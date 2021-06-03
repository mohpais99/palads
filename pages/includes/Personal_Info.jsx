import React from 'react'
import { Col, Row } from 'react-bootstrap';

function Personal_Info() {
    return (
        <form>
            <Row className="my-3">
                <Col>
                    <div className="h3">Change Personal Info</div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="first_name">First Name</label>
                        <input type="text" className="form-control" id="first_name" placeholder="First Name ..." />
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="last_name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" placeholder="Last Name ..." />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="gender">Gender</label>
                        <select name="gender" id="gerder" className="form-control bg-transparent">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Phone ..." />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="identity">Identity</label>
                        <input type="text" className="form-control" id="identity" placeholder="No Identity ..." />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="pod">Place of Date</label>
                        <input type="text" className="form-control" id="pod" placeholder="Place of Date ..." />
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="bod">Birth of Day</label>
                        <input type="date" className="form-control" id="bod" />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="address">Address</label>
                        <textarea className="form-control" id="address" rows="5"></textarea>
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="text-center">
                    <button className="btn btn-primary-custom">Update Change</button>
                </Col>
            </Row>
        </form>
    )
}

export default Personal_Info;