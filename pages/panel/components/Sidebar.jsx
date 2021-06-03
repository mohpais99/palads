import React from 'react'
import { useRouter } from 'next/router';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PageviewIcon from '@material-ui/icons/Pageview';
import ListAltIcon from '@material-ui/icons/ListAlt';

function Sidebar() {
    const router = useRouter()
    return (
        <div className="sidebar" data-background-color="black">
            <div className="side-header">
                <a href="" className="text-center">
                    Administrator
                </a>
            </div>
            <div className="side-body">
                <div className="content">
                    <div onClick={() => router.push('/panel/dashboard')} className="d-block position-relative poppins-semi-bold text-white cursor">
                        <div className={`item-link ${router.pathname === '/panel/dashboard' ? 'active' : ''}`}>
                            <DashboardIcon className="float-left mr-1"></DashboardIcon>
                            <div style={{minWidth: "0"}}>
                                Dashboard
                            </div>
                            <span className="MuiTouchRipple-root"></span>
                        </div>
                    </div>
                    <div onClick={() => router.push('/panel/members')} className="d-block position-relative poppins-semi-bold text-white cursor">
                        <div className={`item-link ${router.pathname === '/panel/members' ? 'active' : ''}`}>
                            <PeopleIcon className="float-left mr-1"></PeopleIcon>
                            <div style={{minWidth: "0"}}>
                                Members
                            </div>
                            <span className="MuiTouchRipple-root"></span>
                        </div>
                    </div>
                    <div className="d-block position-relative poppins-semi-bold text-white cursor">
                        <div className={`item-link ${router.pathname === '/panel/fields' ? 'active' : ''}`}>
                            <PageviewIcon className="float-left mr-1"></PageviewIcon>
                            <div style={{minWidth: "0"}}>
                                Fields
                            </div>
                            <span className="MuiTouchRipple-root"></span>
                        </div>
                    </div>
                    <div className="d-block position-relative poppins-semi-bold text-white cursor">
                        <div className={`item-link ${router.pathname === '/panel/booking' ? 'active' : ''}`}>
                            <ListAltIcon className="float-left mr-1"></ListAltIcon>
                            <div style={{minWidth: "0"}}>
                                Booking List
                            </div>
                            <span className="MuiTouchRipple-root"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
