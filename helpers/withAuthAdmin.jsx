import React from 'react';
import useAuth from "./Context";
import Loader from "pages/components/Loader";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuthAdmin = WrappedComponent =>  {
    return (props) => {
        const router = useRouter()
        const {isAuthenticated, loading, user} = useAuth()
        const role = Cookies.get('role')
        React.useEffect(() => {
            if (!isAuthenticated && !loading) {
                router.push('/')
            } else if (role === 'member') {
                router.push('/404')
            }
        }, [isAuthenticated, loading, role])
        if (loading) {
            return <Loader />
        } else {
            return isAuthenticated && role !== 'member' ? <WrappedComponent {...props} user={user} /> : null
        }
    }
};

export default withAuthAdmin;