import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import api from 'services/restapi';

function ModalField({show, notify, loadField, onShow}) {
    const [imagePreview, setImagePreview] = React.useState(null);
    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();
    const [desc, setDesc] = React.useState();
    const [base64, setBase64] = React.useState();
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
        setBase64(btoa(binaryString))
    }

    const handleSave = async (e) => {
        e.preventDefault()
        let payload = {
            image: base64,
            name,
            price,
            description: desc
        }
        await api.post('field/insert', payload)
            .then(res => {
                var {data} = res.data
                if (data === 1) {
                    notify('Berhasil menambahkan data lapangan!')
                    loadField()
                } else {
                    notify('Something wrong!', 'DANGER')
                }
                onShow(!show)
            })
    };
    return (
        <Modal show={show} onHide={onShow}>
            <Modal.Header>
                <Modal.Title>Add Field</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate>
                    <Form.Control type="text" placeholder="Name field ..." onChange={(e) => setName(e.target.value)} />
                    <Form.Control type="number" placeholder="Price field ..." min="5000" className="my-3" onChange={(e) => setPrice(e.target.value)} />
                    <Form.Control as="textarea" placeholder="Description field ..." className="my-3" onChange={(e) => setDesc(e.target.value)} />
                    <Form.Group controlId="formFile" className="my-3">
                        {
                            imagePreview &&
                                (
                                    <div className="w-100">
                                        <img src={imagePreview} id="photo-field" style={{width: "100%"}} alt="file" />
                                    </div>
                                )
                        }
                        <Form.Control type="file" onChange={handleImage} accept=".jpeg, .png, .jpg" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={onShow}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
                Save Field
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalField
