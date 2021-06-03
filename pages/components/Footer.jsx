import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <footer className="ftco-footer">
            <div className="container-xl">
                <div className="row mb-5 pb-5 justify-content-between">
                    <div className="col-md-6 col-lg">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 logo d-flex">
                                <a className="navbar-brand align-items-center pt-0" href="#">
                                    <span className="">Palads <small>Futsal Booking</small></span>
                                </a>
                            </h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <ul className="ftco-footer-social list-unstyled mt-2">
                                <li>
                                    <a href="#">
                                        <span><FacebookIcon></FacebookIcon></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><InstagramIcon></InstagramIcon></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><TwitterIcon></TwitterIcon></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        Free Wifi
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        EZ Booking
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Quick Links</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        Fields
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="me-2">
                                            <ChevronRightIcon></ChevronRightIcon>
                                        </span>
                                        Gallery
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <span className="icon">
                                            <MapIcon></MapIcon>
                                        </span>
                                        <span className="text">
                                            203 Fake St. Mountain View, San Francisco, California, USA
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <PhoneIcon></PhoneIcon>
                                            </span>
                                            <span className="text">+2 392 3929 210</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <MailIcon></MailIcon>
                                            </span>
                                            <span className="text">info@yourdomain.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0 py-5 bg-darken">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-0" style={{color: "rgba(255,255,255,.5)", fontSize: "13px"}}>
                                Copyright ©{new Date().getFullYear()}{' '}
                                All rights reserved | This template is made with 
                                <i className="text-danger">
                                    <FavoriteIcon></FavoriteIcon>
                                </i> by {' '} 
                                <a href="https://fz-dev.netlify.app/" target="_blank">FZ-Dev</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
