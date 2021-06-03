import React from 'react';
import Image from 'next/image';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Nav } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useRouter } from 'next/router';

function Header({user, logout}) {
    const router = useRouter()
    const [show, setShow] = React.useState(false)
    const brand = router.pathname.split("/")[2]

    const capitalize = str => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <a className="navbar-brand-panel" href="#">{capitalize(brand)}</a>
                </div>
                <div className="col-auto ml-auto">
                    <Nav as="ul">
                        <Nav.Item as="li" className="">
                            <Nav.Link className="p-3 position-relative mr-2 text-dark">
                                <NotificationsIcon></NotificationsIcon>
                                <span className="jss83">5</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="position-relative">
                            <Nav.Link onClick={() => setShow(!show)} >
                                <div className="row deets text-dark" >
                                    <div className="col-auto pr-0">
                                        <div className="profile-photo-small d-flex">
                                            <Image src="/images/avatar-default.png" alt="Circle Image" width="30" height="30" className="rounded-circle img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col my-auto pl-0"> 
                                        <span>
                                            {user.first_name}
                                        </span>
                                    </div>
                                </div>
                                <div className={`profiledropdown ${show ? 'show' : ''}`} style={{width: "125px"}}>
                                    <ul>
                                        <li className='option' onClick={() => router.push('/profile')}>
                                            <AccountCircleIcon className="mr-1"></AccountCircleIcon>
                                            Profile
                                        </li>
                                        <li className='option'>
                                            <SettingsIcon className="mr-1"></SettingsIcon>
                                            Settings
                                        </li>
                                        <li className='option'>
                                            <HelpOutlineIcon className="mr-1"></HelpOutlineIcon>
                                            Help
                                        </li>
                                        <li className='divider'></li>
                                        <li className='option' onClick={() => logout()}>
                                            <ExitToAppIcon className="mr-1"></ExitToAppIcon>
                                            Sign out
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </nav>
    )
}

export default Header
