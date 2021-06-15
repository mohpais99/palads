import React from 'react';
import LayoutPanel from '../../../layouts/LayoutPanel';
import { useRouter } from 'next/router';
import api from 'services/restapi';
import { Button, Form, Row, Col } from 'react-bootstrap';

function FieldEdit() {
    const router = useRouter();
    const [field, setField] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const { slug } = router.query
    React.useEffect(() => {
        return loadField()
    }, [])

    async function loadField() {
        await api.put(`field/${slug}`)
            .then(res => {
                var {data} = res.data
                setField(data);
                
            })
            .catch(err => {
                return
            })
        setLoading(false)
    }

    const onInputchange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    }
    return (
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="card card-plain">
                            <div className="card-header card-header-info py-4">
                                <h4 className="card-title">Update Field</h4>
                            </div>
                            <div className="card-body">
                                {
                                    !loading ?
                                        field ?
                                            <div className="col-12 px-2">
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3" controlId="name">
                                                        <Form.Label column sm="1">Field Name</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Control type="text" name="name" placeholder="Enter field name ..." value={field.name} onChange={onInputchange} />
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="price">
                                                        <Form.Label column sm="1">Field Price</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Control type="number" name="price" min="50000" value={field.price} onChange={onInputchange} />
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="price">
                                                        <Form.Label column sm="1">Field Price</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Select >
                                                                <option>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                            </Form.Select>
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit">
                                                        Submit
                                                    </Button>
                                                </Form>
                                            </div>
                                        :
                                            <div className="col-12 text-center">
                                                <h5>Tidak ada data</h5>
                                            </div>
                                    :
                                        <div className="col-12 text-center">
                                            <div className="spinner-border" role="status"></div>
                                            <div className="spinner-border" role="status"></div>
                                            <div className="spinner-border" role="status"></div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPanel>
    )
}

export default FieldEdit;
