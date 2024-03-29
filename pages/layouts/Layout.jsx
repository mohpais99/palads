import React from 'react';
import Head from 'next/head';
import Navigation from 'pages/components/Navigation';
import useAuth from '/helpers/Context';
import Loader from 'pages/components/Loader';

function Layout({children}) {
    const {user, loading, logout} = useAuth()
    return (
        <>
            {
                loading ?
                    <Loader/>
                :
                    <div className="wrapper">
                        <Head>
                            <title>Palads Futsal</title>
                            <meta name="description" content="Generated by create next app" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Navigation user={user} logout={logout} />
                        {children}
                    </div>
            }
        </>
    )
}

export default Layout;
