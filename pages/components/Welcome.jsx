import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EventIcon from '@material-ui/icons/Event';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import BookIcon from '@material-ui/icons/Book';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

function Welcome() {
    const [check, setCheck] = React.useState()
    const handleChange = e => {
        setCheck({...check, [e.target.name]: e.target.value})
    }
    // console.log(check);
    return (
        <Container>
            <Row className="slider-text align-items-center justify-content-center">
                <Col className="text-center" lg="10">
                    <span className="subheading">Enjoy With A Great Luxury Experience!</span>
                    <div className="h1 mb-4">Palads Futsal</div>
                    <p>
                        <a href="/" className="btn btn-primary-custom p-4 py-3 mr-2">
                            Take a place 
                            <ArrowForwardIcon></ArrowForwardIcon>
                        </a>
                        <a href="/" className="btn btn-white btn-outline-white p-4 py-3">
                            Be a member! 
                        </a>
                    </p>
                </Col>
            </Row>
            <Row id="ftco-booking">
                <Col lg="12">
                    <form className="booking-form" noValidate>
                        <Row>
                            <Col className="py-lg-5 py-3 col-lg form-wrap d-flex px-4" md="6">
                                <div className="form-group ps-4 border-0">
                                    <label htmlFor="#">Booking Date</label>
                                    <div className="form-field">
                                        <div className="icon">
                                            <span>
                                                <EventIcon></EventIcon>
                                            </span>
                                        </div>
                                        <input type="date" name="booking_date" onChange={handleChange} className="form-control" placeholder="Check-In Date" />
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-lg-5 py-3 col-lg form-wrap d-flex px-4" md="6">
                                <div className="form-group ps-4 border-0">
                                    <label htmlFor="#">Booking Time</label>
                                    <div className="form-field">
                                        <div className="icon">
                                            <span>
                                                <QueryBuilderIcon></QueryBuilderIcon>
                                            </span>
                                        </div>
                                        <select name="booking_time" id="booking_time" onChange={handleChange}  className="form-control">
                                            <option value="09.00">09.00</option>
                                            <option value="10.00">10.00</option>
                                            <option value="11.00">11.00</option>
                                            <option value="12.00">12.00</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-lg-5 py-3 col-lg form-wrap d-flex px-4" md="6">
                                <div className="form-group ps-4 border-0">
                                    <label htmlFor="#">Fields</label>
                                    <div className="form-field">
                                        <div className="icon">
                                            <span>
                                                <BookIcon></BookIcon>
                                            </span>
                                        </div>
                                        <select name="booking_field" id="booking_field" className="form-control" onChange={handleChange} >
                                            <option value="Fields One">Fields One</option>
                                            <option value="Fields Two">Fields Two</option>
                                            <option value="Fields Three">Fields Three</option>
                                            <option value="Fields Four">Fields Four</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-lg-5 py-3 col-lg form-wrap d-flex px-4" md="6">
                                <div className="form-group ps-4 border-0">
                                    <label htmlFor="#">Time Long</label>
                                    <div className="form-field">
                                        <div className="icon">
                                            <span>
                                                <HourglassEmptyIcon></HourglassEmptyIcon>
                                            </span>
                                        </div>
                                        <select name="booking_long" id="booking_long" className="form-control">
                                            <option value="" disabled>How long u will booking?</option>
                                            <option value="1">1 Hours</option>
                                            <option value="2">2 Hours</option>
                                            <option value="3">3 Hours</option>
                                            <option value="4">4 Hours</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <div className="col-md-12 col-lg d-flex">
                                <div className="form-group d-flex border-0">
                                    <div className="form-field w-100 align-items-center d-flex">
                                        {/* <a type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-primary py-lg-4 py-xl-0">
                                            <span>Check Availability</span>
                                        </a> */}
                                        <a type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-success py-lg-4 py-xl-0">
                                            <span>Available</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;
