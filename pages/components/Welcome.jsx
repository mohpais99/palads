import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EventIcon from '@material-ui/icons/Event';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import BookIcon from '@material-ui/icons/Book';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import api from 'services/restapi';
import * as g from 'libs/Global';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useAuth from '/helpers/Context';

function Welcome() {
    const { notify } = useAuth()
    const [check, setCheck] = React.useState({
        booking_date: "",
        booking_field: "",
        booking_long: "",
        booking_time: ""
    })
    const [field, setField] = React.useState()
    // const [available, setAvailable] = React.useState(false)
    const [loading, setLoading] = React.useState(true);

    const handleChange = e => {
        setCheck({...check, [e.target.name]: e.target.value})
    }

    React.useEffect(() => {
        return loadField()
    }, [])

    async function loadField() {
        await api.get('field/active')
            .then(res => {
                var {data} = res.data
                setField(data)
            })
            .catch(err => {
                return false
            })
        setLoading(false)
    }

    const handleAvailable = async (e) => {
        e.preventDefault();
        var start_date = check.booking_date + ' ' + check.booking_time;
        var calculate = new Date(start_date);
        var toDateCalculate = new Date(calculate.setHours( calculate.getHours() + parseInt(check.booking_long)));
        var end_date = g.convertDate(toDateCalculate)
        // console.log(end_date);
        const params = {
            start_date,
            end_date,
            slug: check.booking_field
        }
        await api.put('field/search', params)
            .then(res => {
                var {data} = res.data
                if (data.length === 0) {
                    notify("Lapangan belum di booking!")
                } else {
                    notify("Lapangan sudah di booking!", "WARNING")
                }
            })
        setLoading(false)
    }
    const options = [];

    for (let i = 8; i < 23; i++) {
        const value = i.toString() + ':00:00';
        const label = i.toString() + ':00';
        if (i <= 9) {
            value = '0' + value
            label = '0' + label
        }
        let obj = {value, label}
        g.arrPush(options, obj)
    }
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
                    {
                        !loading && 
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
                                                <select name="booking_time" id="booking_time" onChange={handleChange} className="form-control">
                                                    {
                                                        options.map((opt, key) =>
                                                            <option key={key} value={opt.value}>{opt.label}</option>
                                                        )
                                                    }
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
                                                    {
                                                        field.map((f, k) => 
                                                            <option key={k} value={f.slug}>{f.name}</option>
                                                        )
                                                    }
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
                                                <select name="booking_long" id="booking_long" className="form-control" onChange={handleChange}>
                                                    <option value="" disabled>How long u will booking?</option>
                                                    <option value="1">1 Hours</option>
                                                    <option value="2">2 Hours</option>
                                                    <option value="3">3 Hours</option>
                                                    <option value="4">4 Hours</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="col-md-12 col-lg d-flex" onClick={handleAvailable} >
                                        <div className="form-group d-flex border-0">
                                            <div className="form-field w-100 align-items-center d-flex">
                                                <a type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-primary py-lg-4 py-xl-0">
                                                    <span>Check Availability</span>
                                                </a>
                                                {/* {
                                                    available ? 
                                                        <a type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-success py-lg-4 py-xl-0">
                                                            <CheckCircleIcon className="mr-1 text-success-custom"></CheckCircleIcon>
                                                            <span>Available</span>
                                                        </a>
                                                    :
                                                        <a type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-success py-lg-4 py-xl-0">
                                                            <CheckCircleIcon className="mr-1 text-success-custom"></CheckCircleIcon>
                                                            <span>Available</span>
                                                        </a>
                                                } */}
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </form>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;
