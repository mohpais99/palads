import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
// import { useRouter } from 'next/router'
import api from 'services/restapi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const router = useRouter()
    const [user, setUser] = useState(null)
    const [tokenify, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                if (!tokenify) setToken(token)
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data } = await api.get('auth/get')
                    .then(res => {
                        setLoading(false)
                        return res.data
                    })
                    .catch(err => {
                        setLoading(false)
                        Cookies.remove('token')
                        return false
                    })
                if (data) {
                    console.log("auth is valid with", data.last_name)
                    setUser(data);
                }
                
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        var result = await api.post('auth/do-login', { username, password })
            .then(res => {
                var {data} = res.data
                if (data) {
                    console.log("Got token")
                    Cookies.set('token', data.token)
                    Cookies.set('role', data.role)
                    setToken(data.token)
                    api.defaults.headers.Authorization = `Bearer ${data.token}`
                    
                    return data
                }
                return false
            })
            .catch(err => {
                console.log(2, err)
                console.log("Not got token!")
                setLoading(false)
                return false
            })
        if (result) {
            const {data} = await api.get('auth/get')
                .then(res => {
                    return res.data
                })
            setUser(data)
        }
        return result
    }
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        setToken(null)
        setLoading(false)
        delete api.defaults.headers.Authorization
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, tokenify }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export default useAuth;

