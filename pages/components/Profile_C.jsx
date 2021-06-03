import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HistoryIcon from '@material-ui/icons/History';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SettingsIcon from '@material-ui/icons/Settings';
import Personal_Info from '../includes/Personal_Info';
import Booking_History from '../includes/Booking_History';
import Setting_User from '../includes/Setting_User';


function Profile_C(props) {
    const [tabs, setTabs] = React.useState('personal')
    const handleTab = (name) => {
        setTabs(name)
    }
    const tabContent = () => {
        if (tabs === 'personal') {
            return <Personal_Info />
        } else if(tabs === 'history') {
            return <Booking_History />
        } else if(tabs === 'setting') {
            return <Setting_User />
        } else {
            return <h1>Belum ada data</h1>
        }
    }
    return (
        <Container className="pb-5">
            <Row className="slider-text align-items-center justify-content-center">
                <Col className="text-center pt-5" lg="9">
                    <p className="breadcrumbs">
                        <span className="me-2">
                            <a href="/">
                                <HomeIcon className="mr-1"></HomeIcon>
                                <span className="my-auto">
                                    Home
                                </span> 
                                <ChevronRightIcon></ChevronRightIcon>
                            </a>
                        </span> 
                        <span>
                            Profile
                        </span>
                    </p>
                    <h1 className="mb-0 bread">My Profile</h1>
                </Col>
            </Row>
            {/* <Row id="main-raised" style={{padding: "4em 0 8em"}}> */}
            <Row id="main-raised">
                <Col className="section--main" md="12" style={{padding: "4em 0 8em"}}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <Card>
                                    <Card.Header 
                                        className="text-center" 
                                        style={{
                                            backgroundSize: "cover", 
                                            backgroundRepeat: "no-repeate", 
                                            backgroundPosition: "center center",
                                            backgroundImage: "url('/images/cover-1.jpg')"
                                        }}>
                                        <div className="avatar cursor">
                                            <Image src="/images/avatar-default.png" alt="Circle Image" width="80" height="80" className="img-raised rounded-circle img-fluid" />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="name text-center">
                                            <h3 className="title mb-0">{props.first_name + ' ' + props.last_name}</h3>
                                            <h6>Member since May 2021</h6>
                                            <a href="#pablo" className="btn btn-just-icon btn-link">
                                                <FacebookIcon></FacebookIcon>
                                            </a>
                                            <a href="#pablo" className="btn btn-just-icon btn-link">
                                                <TwitterIcon></TwitterIcon>
                                            </a>
                                            <a href="#pablo" className="btn btn-just-icon btn-link">
                                                <InstagramIcon></InstagramIcon>
                                            </a>
                                        </div>
                                    </Card.Body>
                                    <ul className="nav flex-column tab">
                                        <li className="nav-item cursor" onClick={() => handleTab('personal')}>
                                            <a className={`nav-link p-3 border-top border-bottom ${tabs === 'personal' ? 'active' : ''}`}>
                                                <PermIdentityIcon className="mr-1"></PermIdentityIcon>
                                                Personal Info
                                            </a>
                                        </li>
                                        <li className="nav-item cursor" onClick={() => handleTab('history')}>
                                            <a className={`nav-link p-3 border-top border-bottom ${tabs === 'history' ? 'active' : ''}`}>
                                                <HistoryIcon className="mr-1"></HistoryIcon>
                                                Booking History
                                            </a>
                                        </li>
                                        <li className="nav-item cursor" onClick={() => handleTab('credit')}>
                                            <a className={`nav-link p-3 border-top border-bottom ${tabs === 'credit' ? 'active' : ''}`}>
                                                <CreditCardIcon className="mr-1"></CreditCardIcon>
                                                Credit Card
                                            </a>
                                        </li>
                                        <li className="nav-item cursor" onClick={() => handleTab('setting')}>
                                            <a className="nav-link p-3">
                                                <SettingsIcon className="mr-1"></SettingsIcon>
                                                Setting
                                            </a>
                                        </li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col md="8">
                                <Card>
                                    <Card.Body>
                                        {tabContent()}
                                        {/* <Personal_Info /> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile_C;