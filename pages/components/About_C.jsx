import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

function About_C() {
    return (
        <Container className="pb-5">
            <Row className="slider-text align-items-center justify-content-center">
                <Col className="text-center pt-5" lg="9">
                    <p className="breadcrumbs">
                        <span className="me-2">
                            <a href="/">
                                <span>
                                    <HomeIcon></HomeIcon>
                                    Home
                                </span> 
                                <ChevronRightIcon></ChevronRightIcon>
                            </a>
                        </span> 
                        <span>
                            About Us 
                        </span>
                    </p>
                    <h1 className="mb-0 bread">About Us</h1>
                </Col>
            </Row>
            <Row id="main-raised">
                <Col className="section--main" md="12">
                    <Container>
                        <Row className="about">
                            <Col md="6">
                                <Row>
                                    <Col md="6">
                                        <div className="f-services d-md-flex flex-md-column-reverse">
                                            <div className="img w-100" style={{backgroundImage: `url('/images/wp-1.jpg')`}}></div>
                                            <div className="text w-100 p-4 text-center mb-md-4">
                                                <div className="icon">
                                                    <AccessibilityNewIcon></AccessibilityNewIcon>
                                                </div>
                                                <h3>EZ Booking</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="f-services">
                                            <div className="img w-100 mb-md-4" style={{backgroundImage: `url('/images/wp-2.jpg')`}}></div>
                                                <div className="text w-100 p-4 text-center">
                                                <div className="icon">
                                                    <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                                                </div>
                                                <h3>Efficient Wallet</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="d-flex align-items-center heading-section" md="6">
                                <div className="mt-5 mt-md-0">
                                    <span className="subheading">About Us</span>
                                    <h2 className="mb-4">Palads A Futsal Booking Agency</h2>
                                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p>
                                        <a href="#" className="btn btn-primary-custom py-3 px-4">Be a Member Now!</a></p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center pb-4 ftco-section">
                            <Col className="text-center heading-section" md="7">
                                <span className="subheading">Testimonial</span>
                                <h3 className="mb-3">Happy Guests</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <div className="testimony-wrap">
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="user-img" style={{backgroundImage: 'url(/images/user-1.jpg)'}}>
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-quote-left"></span>
                                                </div>
                                            </div>
                                            <div className="ps-3 tx">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <p className="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="testimony-wrap">
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="user-img" style={{backgroundImage: 'url(/images/user-1.jpg)'}}>
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-quote-left"></span>
                                                </div>
                                            </div>
                                            <div className="ps-3 tx">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <p className="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="testimony-wrap">
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="user-img" style={{backgroundImage: 'url(/images/user-1.jpg)'}}>
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-quote-left"></span>
                                                </div>
                                            </div>
                                            <div className="ps-3 tx">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <p className="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default About_C
