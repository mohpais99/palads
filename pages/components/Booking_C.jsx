import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useAuth from '/helpers/Context';

function Booking_C() {
    const {user} = useAuth()
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
                            Booking
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Booking Pages</h1>
                </Col>
            </Row>
            <Row id="main-raised">
                <Col className="section--main" md="12">
                    <form noValidate>
                        <Container className="booking-section">
                            <Row>
                                <Col className="">
                                    <header>
                                        <h2 className="title-header">Personal Information</h2> 
                                        {
                                            user ?
                                                <h5 className="description">Please complete the data down below!.</h5>
                                            :
                                                <h5 className="description font-16">
                                                    <a href="#" style={{textDecoration: "none"}}>
                                                        <span className="sing-in-link">Sing in</span>
                                                    </a> {' '}
                                                    for fast booking or enter your personal information
                                                </h5>
                                        }
                                    </header>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col> 
                                    <label htmlFor="first-name" className="form-order-label d-block mb-1 font-16">First Name</label> 
                                    <input type="text" id="first-name" name="first-name" className="form-order-input input-error mb-1" placeholder="Enter first name" required />
                                    <p className="error-text">Please enter a first and last name using letters only.</p> 
                                </Col>
                                <Col> 
                                    <label htmlFor="first-name" className="form-order-label d-block mb-1 font-16">Last Name</label> 
                                    <input type="text" id="first-name" name="first-name" className="form-order-input mb-1" placeholder="Enter last name" required />
                                </Col>
                            </Row>
                            <Row>
                                <Col> 
                                    <label htmlFor="email" className="form-order-label d-block mb-1 font-16">Email</label> 
                                    <input type="email" id="email" name="email" className="form-order-input input-error mb-1" placeholder="Enter email" required />
                                    <p className="error-text">Email required.</p> 
                                </Col>
                                <Col> 
                                    <label htmlFor="no_telp" className="form-order-label d-block mb-1 font-16">Phone Number</label> 
                                    <input type="telp" id="no_telp" name="no_telp" className="form-order-input mb-1" placeholder="Enter phone number" required />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col className="">
                                    <header>
                                        <h2 className="title-header">Order Information</h2> 
                                        {
                                            user ?
                                                <h5 className="description">Please complete the data down below!.</h5>
                                            :
                                                <h5 className="description font-16">
                                                    <a href="#" style={{textDecoration: "none"}}>
                                                        <span className="sing-in-link">Sing in</span>
                                                    </a> {' '}
                                                    for fast booking or enter your personal information
                                                </h5>
                                        }
                                    </header>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col> 
                                    <label htmlFor="booking-date" className="form-order-label d-block mb-1 font-16">Booking Date</label> 
                                    <input type="date" id="booking-date" name="booking-date" className="form-order-input input-error mb-1" required />
                                    <p className="error-text">Please enter a first and last name using letters only.</p> 
                                </Col>
                                <Col> 
                                    <label htmlFor="booking-time" className="form-order-label d-block mb-1 font-16">Booking Clock</label> 
                                    <select id="booking-time" name="booking-time" className="form-order-input mb-1" required >
                                        <option value="" disabled>-- Take a time --</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="12:00">12:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                    </select>
                                </Col>
                                <Col> 
                                    <label htmlFor="booking-long" className="form-order-label d-block mb-1 font-16">How long u will play?</label> 
                                    <select id="booking-long" name="booking-long" className="form-order-input mb-1" required >
                                        <option value="" disabled>-- Take a time --</option>
                                        <option value="1">1 Hour</option>
                                        <option value="2">2 Hour</option>
                                        <option value="3">3 Hour</option>
                                        <option value="4">4 Hour</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col> 
                                    <label htmlFor="fields" className="form-order-label d-block mb-1 font-16">Fields</label> 
                                    <select id="fields" name="fields" className="form-order-input input-error mb-1" required>
                                        <option value="" disabled>-- Select Field --</option>
                                        <option value="field-1">Field 1</option>
                                        <option value="field-2">Field 2</option>
                                        <option value="field-3">Field 3</option>
                                    </select>
                                    <p className="error-text">Please enter a first and last name using letters only.</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center"> 
                                    <button type="submit" className="btn btn-primary-custom">
                                        Booking Now
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Booking_C
