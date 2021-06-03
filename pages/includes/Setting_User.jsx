import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Setting_User() {
    return (
        <form>
            <Row className="my-3">
                <Col>
                    <div className="h3">Change Password</div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="current_password">Current Password</label>
                        <input type="password" className="form-control" id="current_password" />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="new_password">New Password</label>
                        <input type="password" className="form-control" id="new_password" />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="form-group">
                        <label className="mb-2" htmlFor="re_password">Re-Password</label>
                        <input type="password" className="form-control" id="re_password" />
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="text-center">
                    <button className="btn btn-primary-custom">Save Password</button>
                </Col>
            </Row>
        </form>
    )
}

export default Setting_User;
