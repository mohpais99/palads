import React from 'react';
import LayoutPanel from '../../../layouts/LayoutPanel';
import { useRouter } from 'next/router';
import api from 'services/restapi';
import { Form } from 'react-bootstrap';

function FieldDetail() {
    const router = useRouter();
    const [field, setField] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const { slug } = router.query
    React.useEffect(() => {
        async function loadField() {
            const { data } = await api.put(`field/${slug}`)
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
    console.log(field);
    return (
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="card card-plain">
                            <div className="card-header card-header-info py-4">
                                <h4 className="card-title">Review Field</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        loading ?
                                            <div className="col-12 text-center">
                                                <div className="spinner-border" role="status"></div>
                                                <div className="spinner-border" role="status"></div>
                                                <div className="spinner-border" role="status"></div>
                                            </div>
                                        :
                                            <p>{slug}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPanel>
    )
}

export default FieldDetail
