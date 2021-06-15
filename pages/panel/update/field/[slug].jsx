import React from 'react';
import LayoutPanel from '../../../layouts/LayoutPanel';
import { useRouter } from 'next/router';
import api from 'services/restapi';
import { Button, Form, Row, Col } from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import useAuth from '/helpers/Context';

function FieldEdit() {
    const { notify } = useAuth()
    const router = useRouter();
    const [imagePreview, setImagePreview] = React.useState(null);
    const [field, setField] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const { slug } = router.query;

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        await api.put(`field/edit/${field.id}`, field)
            .then(res => {
                var {success} = res.data;
                if (success === 1 ) {
                    notify('Berhasil update field!');
                    router.push(`/panel/view/field/${field.slug}`)
                } else {
                    notify("Gagal mengupdate field!", "Danger");
                }
            })
            .catch(err => {
                return
            })
    }

    const handleImage = e => {
        let file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file))
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded
            reader.readAsBinaryString(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setField({ ...field, image: btoa(binaryString)})
    }

    const onInputchange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    }

    const options = [
        { value: 1, label: 'Active' },
        { value: 0, label: 'Not Active' },
    ];
    return (
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="card card-plain">
                            <div className="card-header card-header-info py-4 d-flex">
                                <div className="btn btn-sm my-auto mr-2 text-white">
                                    <Link href="/panel/fields">
                                        <ArrowBackIcon></ArrowBackIcon>
                                    </Link>
                                </div>
                                <h4 className="card-title">Update Field</h4>
                            </div>
                            <div className="card-body">
                                {
                                    !loading ?
                                        field ?
                                            <div className="col-12 px-2">
                                                <Form onSubmit={handleSubmit} noValidate>
                                                    <Form.Group as={Row} className="mb-3" controlId="name">
                                                        <Form.Label column sm="1">Name</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Control 
                                                                type="text" 
                                                                name="name" 
                                                                placeholder="Enter field name ..." 
                                                                value={field.name} 
                                                                onChange={onInputchange} />
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="price">
                                                        <Form.Label column sm="1">Price</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Control 
                                                                type="number" 
                                                                name="price" 
                                                                min="50000" 
                                                                value={field.price} 
                                                                onChange={onInputchange} />
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="status">
                                                        <Form.Label column sm="1">Status</Form.Label>
                                                        <Col sm="11">
                                                            <select name="status" value={field.status} onChange={onInputchange} className="form-select">
                                                                <option value="" disabled>-- Select One --</option>
                                                                {
                                                                    options.map((opt, key) => 
                                                                        <option key={key} value={opt.value}>{opt.label}</option>)
                                                                }
                                                            </select>
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="description">
                                                        <Form.Label column sm="1">Description</Form.Label>
                                                        <Col sm="11">
                                                            <Form.Control
                                                                as="textarea"
                                                                placeholder="Leave a description here"
                                                                name="description" 
                                                                style={{ height: '100px' }}
                                                                value={field.description}
                                                                onChange={onInputchange} 
                                                                />
                                                        </Col>
                                                        <Col sm="11" className="ml-auto mt-2">
                                                            <Form.Text className="text-danger">
                                                                We'll never share your email with anyone else.
                                                            </Form.Text>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="image">
                                                        <Form.Label column sm="1">Image</Form.Label>
                                                        <Col sm="11">
                                                            <div className="w-100 mb-2">
                                                                {
                                                                    !imagePreview ? 
                                                                        <img width="200" className="img-fluid" src={`data:image/png;base64,${field.image}`} alt="Field" />
                                                                    :
                                                                        <img width="200" className="img-fluid" src={imagePreview} alt="Field" />
                                                                }
                                                            </div>
                                                            <Form.Control 
                                                                type="file" 
                                                                name="image"
                                                                onChange={handleImage} />
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
