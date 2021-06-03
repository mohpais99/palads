import React from 'react';
import useAuth from "./Context";
import Loader from "pages/components/Loader";
import { useRouter } from 'next/router';

const withAuthMember = WrappedComponent =>  {
    return (props) => {
        const router = useRouter()
        const {isAuthenticated, loading, user} = useAuth()
        React.useEffect(() => {
            if (!isAuthenticated && !loading) {
                router.push('/')
            }
            
        }, [isAuthenticated, loading])
        if (loading) {
            return <Loader />
        } else {
            return isAuthenticated ? <WrappedComponent {...props} user={user} /> : null
        }
    }
};

export default withAuthMember;