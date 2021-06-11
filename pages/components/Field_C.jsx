import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import api from 'services/restapi';

function Field_C() {
    const [loading, setLoading] = React.useState(true);
    const [field, setField] = React.useState();
    React.useEffect(() => {
        async function loadField() {
            const { data } = await api.get('field')
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    return false
                })
            if (data) {
                setLoading(false)
                setField(data);
            }
        }
        loadField()
    }, [])
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
                            Fields
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Our Fields</h1>
                </Col>
            </Row>
            <Row id="main-raised">
                <Col className="section--main" md="12">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="heading-section text-center mb-5" md="8">
                                <span className="subheading">Fields Collection</span>
                                <h2 className="mb-4">Featured Fields</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            {
                                !loading && 
                                    field ?
                                        field.map((field, key) => 
                                            field.id % 2 !== 0 ?
                                                <div key={key} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                                    <div className="room-wrap shadow d-md-flex flex-md-column-reverse w-100">
                                                        <a href="" className="img img-room" style={{backgroundImage: `url(data:image/png;base64,${field.image})`}}></a>
                                                        <div className="text p-5 text-center">
                                                            <h3>
                                                                <a href="">{field.name}</a>
                                                            </h3>
                                                            <p>{field.description}</p>
                                                            <p className="mb-0 mt-2">
                                                                <span className="me-3 price">
                                                                    Rp {field.price}
                                                                    <small>/ Hours</small>
                                                                </span>
                                                                <a href="#" className="btn-custom">Book Now</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                <div key={key} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                                    <div className="room-wrap shadow w-100">
                                                        <a href="" className="img img-room" style={{backgroundImage: `url(data:image/png;base64,${field.image})`}}></a>
                                                        <div className="text p-5 text-center">
                                                        <h3>
                                                            <a href="#">{field.name}</a></h3>
                                                            <p>{field.description}</p>
                                                            <p className="mb-0 mt-2">
                                                                <span className="me-3 price">
                                                                    Rp {field.price}
                                                                    <small>/ Hours</small>
                                                                </span>
                                                                <a href="#" className="btn-custom">Book Now</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    :
                                        <div className="col-12 text-center">
                                            <div className="h4">Tidak ada data!</div>
                                        </div>

                            }
                            {/* <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow d-md-flex flex-md-column-reverse">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-1.jpeg)'}}></a>
                                    <div className="text p-5 text-center">
                                        <h3>
                                            <a href="">Lapangan Sintesis</a>
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-2.jpg)'}}></a>
                                    <div className="text p-5 text-center">
                                    <h3>
                                        <a href="#">Lapangan Beton</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow d-md-flex flex-md-column-reverse">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-1.jpeg)'}}></a>
                                    <div className="text p-5 text-center">
                                        <h3>
                                            <a href="">Lapangan Sintesis</a>
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow d-md-flex flex-md-column-reverse">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-1.jpeg)'}}></a>
                                    <div className="text p-5 text-center">
                                        <h3>
                                            <a href="">Lapangan Sintesis</a>
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-2.jpg)'}}></a>
                                    <div className="text p-5 text-center">
                                    <h3>
                                        <a href="#">Lapangan Beton</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="room-wrap shadow d-md-flex flex-md-column-reverse">
                                    <a href="" className="img img-room" style={{backgroundImage: 'url(/images/lapangan-1.jpeg)'}}></a>
                                    <div className="text p-5 text-center">
                                        <h3>
                                            <a href="">Lapangan Sintesis</a>
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="mb-0 mt-2">
                                            <span className="me-3 price">
                                                Rp 85.000 
                                                <small>/ Hours</small>
                                            </span>
                                            <a href="#" className="btn-custom">Book Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </Row>
                        <Row>
                            <Col className="text-center" sm="12">
                                <a href="#" className="btn btn-primary-custom py-3 px-4">See More ...</a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Field_C
