import React from 'react'
import LayoutPanel from '../layouts/LayoutPanel';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import api from 'services/restapi';

function Members() {
    const [member, setMember] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        async function loadAllUser() {
            const { data } = await api.get('member')
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    return false
                })
            if (data) {
                setLoading(false)
                setMember(data);
            }
        }
        loadAllUser()
    }, [])
    return (
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="card card-plain">
                            <div className="card-header card-header-info">
                                <h4 className="card-title">Registered Member</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Username</th>
                                                    <th>No Telp</th>
                                                    <th>Gender</th>
                                                    <th>Address</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    loading ?
                                                        <tr>
                                                            <td className="text-center" colSpan="8">
                                                                <div className="spinner-border" role="status"></div>
                                                                <div className="spinner-border" role="status"></div>
                                                                <div className="spinner-border" role="status"></div>
                                                            </td>
                                                        </tr>
                                                    :
                                                        member.map((data, i) => 
                                                            <tr key={i}>
                                                                <td>{i+1}</td>
                                                                <td>{data.first_name + ' ' + data.last_name}</td>
                                                                <td>{data.email}</td>
                                                                <td>{data.username}</td>
                                                                <td>{data.no_telp}</td>
                                                                <td>
                                                                    {
                                                                        data.gender && data.gender === 'F'? 'Female' : 'Male'
                                                                    }
                                                                </td>
                                                                <td>{data.address}</td>
                                                                <td>
                                                                    <button type="button" className="btn btn-warning btn-sm mr-2">
                                                                        <EditIcon></EditIcon>
                                                                    </button>
                                                                    <button type="button" className="btn btn-danger btn-sm">
                                                                        <CloseIcon></CloseIcon>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPanel>
    )
}

export default Members
