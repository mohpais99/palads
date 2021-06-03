import { useRouter } from 'next/router';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
// import useAuth from '/helpers/Context';
import Image from 'next/image'
import FaceIcon from '@material-ui/icons/Face';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Navigation({user, logout}) {
    const [show, setShow] = React.useState(false)
    const router = useRouter()
    return (
        <Navbar id="sections-nav" className="bg-transparent" expand="lg">
            <Container>
                <div className="navbar--translation">
                    <Navbar.Brand href="#home" className="d-none d-lg-block align-items-center">
                        <span >Palads <small>Futsal Booking</small></span>
                        {/* <Image 
                            src="/vercel.svg" 
                            width="70" 
                            height="70" 
                            className="d-inline-block align-top"
                        /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                    <Nav className="ml-auto text-uppercase poppins-semi-bold">
                        <Nav.Link onClick={() => router.push('/')} className="p-3">Home</Nav.Link>
                        <Nav.Link onClick={() => router.push('/about')} className="p-3">About Us</Nav.Link>
                        <Nav.Link onClick={() => router.push('/field')} className="p-3">Fields</Nav.Link>
                        <Nav.Link className="p-3">Galleries</Nav.Link>
                        <Nav.Link className="p-3">Contact</Nav.Link>
                        <Nav.Link onClick={() => router.push('/booking')} className="p-3">Booking</Nav.Link>
                    </Nav>
                    
                    {
                        !user ? (
                            <Nav className="ml-auto">
                                <Nav.Link href="/sign-in" className="p-3 px-1">
                                    <button className="btn btn-secondary py-2">
                                        <FaceIcon></FaceIcon>
                                        <span className="ps-1">Sign In</span>
                                    </button>
                                </Nav.Link>
                                <Nav.Link href="/sign-up" className="p-3 px-1">
                                    <button className="btn btn-primary py-2">
                                        <span>Sign Up</span>
                                    </button>
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className="ml-auto">
                                <Nav.Link href="" className="p-3">
                                    <LibraryBooksIcon></LibraryBooksIcon>
                                </Nav.Link>
                                <Nav.Link href="" className="p-3 position-relative mr-2">
                                    <NotificationsIcon></NotificationsIcon>
                                    <span className="jss83">5</span>
                                </Nav.Link>
                                <Nav.Link href="" onClick={() => setShow(!show)} className="w-100 position-relative px-2 d-flex align-items-center">
                                    <div className="row deets">
                                        <div className="col-auto pr-0">
                                            <div className="profile-photo-small d-flex">
                                                <Image src="/images/avatar-default.png" alt="Circle Image" width="30" height="30" className="rounded-circle img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col my-auto pl-0"> 
                                            <span>
                                                {
                                                    user.first_name + ' ' + user.last_name
                                                }
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div className={`profiledropdown ${show ? 'show' : ''}`}>
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
                            </Nav>
                        )
                    }
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
