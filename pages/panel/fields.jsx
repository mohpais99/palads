import React from 'react';
import LayoutPanel from '../layouts/LayoutPanel';
import AddIcon from '@material-ui/icons/Add';
import api from 'services/restapi';
import ModalField from './includes/ModalField';

function Fields() {
    const [show, setShow] = React.useState(false);
    const [field, setField] = React.useState();
    
    const [loading, setLoading] = React.useState(true);
    const handleShow = () => setShow(!show);
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
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="card card-plain">
                            <div className="card-header card-header-info py-4">
                                <h4 className="card-title float-left my-auto">List Field</h4>
                                <span onClick={handleShow} className="float-right text-white my-auto cursor">
                                    <AddIcon></AddIcon>
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        !loading ?
                                            field ? 
                                                field.map((field, key) => 
                                                    <div key={key} className="col-md-4">
                                                        <div className="card" style={{borderRadius: "10px"}}>
                                                            <img src={`data:image/png;base64,${field.image}`} width="100" height="230" className="card-img-top" alt="image field" style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}} />
                                                            <div className="card-body">
                                                                <div className="card-title">{field.name}</div>
                                                                <div className="w-100">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <button className="btn btn-info w-100">Pratinjau</button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button className="btn btn-warning w-100">Edit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            :
                                                <div className="col-12">
                                                    <div className="card">
                                                        <div className="card-body text-center">
                                                            <div className="h4">Tidak ada data</div>
                                                        </div>
                                                    </div>
                                                </div>
                                        :
                                            <div className="col-12">
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
            </div>
            <ModalField show={show} onShow={handleShow} />
        </LayoutPanel>
    )
}

export default Fields;