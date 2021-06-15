import React from 'react';
import LayoutPanel from '../../../layouts/LayoutPanel';
import { useRouter } from 'next/router';
import api from 'services/restapi';

function FieldDetail() {
    const router = useRouter();
    const [field, setField] = React.useState(null);
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
                                {
                                    loading ?
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <div className="spinner-border" role="status"></div>
                                                <div className="spinner-border" role="status"></div>
                                                <div className="spinner-border" role="status"></div>
                                            </div>
                                        </div>
                                    :
                                        field && 
                                            <div className="row">
                                                <div className="col-4">
                                                    <img className="img-fluid" src={`data:image/png;base64,${field.image}`} alt="Field" />
                                                </div>
                                                <div className="col-8">
                                                    <div className="h2">{field.name}</div>
                                                    <hr />
                                                    <div className="h6">
                                                        <span>{field.description}</span>
                                                    </div>
                                                </div>
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

export default FieldDetail
