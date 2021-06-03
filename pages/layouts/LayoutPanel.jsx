import React from 'react';
import Sidebar from '../panel/components/Sidebar'
import Header from '../panel/components/Header';
// import SearchIcon from '@material-ui/icons/Search';
function LayoutPanel({children}) {
    return (
        <div className="wrapper-admin">
            <Sidebar />
            <main>
                <Header />
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

export default LayoutPanel;