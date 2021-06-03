import React from 'react';
import Sidebar from '../panel/components/Sidebar'
import Header from '../panel/components/Header';
import withAuthAdmin from '/helpers/withAuthAdmin';
import useAuth from '/helpers/Context';

function LayoutPanel({children}) {
    const {user, loading, logout} = useAuth()
    return (
        <div className="wrapper-admin">
            <Sidebar />
            <main>
                <Header user={user} logout={logout} />
                {children}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="copyright float-right">
                            ©
                            {new Date().getFullYear()}, by{' '}
                            <a href="https://fz-dev.netlify.com" target="_blank">FZ-Developer</a> for a better web.
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default withAuthAdmin(LayoutPanel);