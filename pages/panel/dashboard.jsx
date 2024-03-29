import React from 'react';
import LayoutPanel from '../layouts/LayoutPanel';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import WarningIcon from '@material-ui/icons/Warning';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BugReportIcon from '@material-ui/icons/BugReport';
import CodeIcon from '@material-ui/icons/Code';
import CloudIcon from '@material-ui/icons/Cloud';
import TabPaneBugs from './includes/TabPaneBugs';
import TabPaneMessages from './includes/TabPaneMessages';
import TabPaneCloud from './includes/TabPaneCloud';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import * as g from 'libs/Global';
import api from 'services/restapi';

function Dashboard() {
    const [tab, setTab] = React.useState('bug_report')
    const [payment, setPayment] = React.useState()
    React.useEffect(() => {
        loadPayment()
    }, [])

    async function loadPayment() {
        await api.get('payment/current')
            .then(res => {
                var {data} = res.data
                setPayment(data)
            })
    }

    return (
        <LayoutPanel>
            <div className="panel-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-warning card-header-icon text-right">
                                    <div className="card-icon">
                                        <MonetizationOnIcon></MonetizationOnIcon>
                                    </div>
                                    <p className="card-category">Fee</p>
                                    <h3 className="card-title text-dark">
                                        <small>Rp</small>{' '}
                                        100k
                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <WarningIcon className="text-danger mr-1">warning</WarningIcon>
                                        <a href="#">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon text-right">
                                    <div className="card-icon">
                                        <PersonAddIcon></PersonAddIcon>
                                    </div>
                                    <p className="card-category">New Member</p>
                                    <h3 className="card-title text-dark">
                                        7{' '}
                                        <small>Member</small>
                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <WarningIcon className="text-danger mr-1">warning</WarningIcon>
                                        <a href="#">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon text-right">
                                    <div className="card-icon">
                                        <FileCopyIcon></FileCopyIcon>
                                    </div>
                                    <p className="card-category">Used Fields</p>
                                    <h3 className="card-title text-dark">6/8{' '}
                                        <small>Field</small>
                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <WarningIcon className="text-danger mr-1">warning</WarningIcon>
                                        <a href="#">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-info card-header-icon text-right">
                                    <div className="card-icon">
                                        <LibraryBooksIcon></LibraryBooksIcon>
                                    </div>
                                    <p className="card-category">Booking Request</p>
                                    <h3 className="card-title text-dark">115{' '}
                                        <small>Data</small>
                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <WarningIcon className="text-danger mr-1">warning</WarningIcon>
                                        <a href="#">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="card">
                                <div className="card-header card-header-tabs card-header-primary">
                                    <div className="nav-tabs-navigation">
                                        <div className="nav-tabs-wrapper">
                                            <span className="nav-tabs-title">Tasks:</span>
                                            <ul className="nav nav-tabs" data-tabs="tabs">
                                                <li className="nav-item cursor" onClick={() => setTab('bug_report')}>
                                                    <a className={`nav-link ${tab === 'bug_report' ? 'active' : ''}`}>
                                                        <BugReportIcon className="material-icons">bug_report</BugReportIcon> Bugs
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li className="nav-item cursor" onClick={() => setTab('messages')}>
                                                    <a className={`nav-link ${tab === 'messages' ? 'active' : ''}`}>
                                                        <CodeIcon className="material-icons">code</CodeIcon> Website
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li className="nav-item cursor" onClick={() => setTab('settings')}>
                                                    <a className={`nav-link ${tab === 'settings' ? 'active' : ''}`}>
                                                        <CloudIcon className="material-icons">cloud</CloudIcon> Server
                                                        <div className="ripple-container"></div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <TabPaneBugs tab={tab} />
                                        <TabPaneMessages tab={tab} />
                                        <TabPaneCloud tab={tab} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="card">
                                <div className="card-header card-header-warning">
                                    <h4 className="card-title">Payment List</h4>
                                    <p className="card-category">New payment on {g.currentDate()}</p>
                                </div>
                                <div className="card-body table-responsive">
                                    <table className="table table-hover">
                                        <thead className="text-warning">
                                            <tr>
                                                <th>#</th>
                                                <th>No VA</th>
                                                <th>Amount</th>
                                                <th>Expired</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                payment && payment.map((pay, key) => 
                                                    <tr key={key}>
                                                        <td>{key+1}</td>
                                                        <td>{pay.va}</td>
                                                        <td>{g.formatRibuan(pay.total)}</td>
                                                        <td>{pay.expired}</td>
                                                        <td>
                                                            <span className="p-2 bg-info font-10">
                                                                Belum Bayar
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-sm btn-warning mr-1">
                                                                <EditIcon></EditIcon>
                                                            </button>
                                                            <button className="btn btn-sm btn-success">
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
        </LayoutPanel>
    )
}

export default Dashboard