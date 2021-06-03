import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

function TabPaneMessages({tab}) {
    return (
        <div className={`tab-pane ${tab === 'messages' ? 'active' : ''}`} id="messages">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" />
                                </label>
                            </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost</td>
                        <td className="td-actions text-right">
                            <button type="button" className="btn btn-primary btn-link btn-sm">
                                <EditIcon className="material-icons">edit</EditIcon>
                            </button>
                            <button type="button" className="btn btn-danger btn-link btn-sm">
                                <CloseIcon className="material-icons">close</CloseIcon>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" />
                                </label>
                            </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                            <button type="button" className="btn btn-primary btn-link btn-sm">
                                <EditIcon className="material-icons">edit</EditIcon>
                            </button>
                            <button type="button" className="btn btn-danger btn-link btn-sm">
                                <CloseIcon className="material-icons">close</CloseIcon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabPaneMessages
