import React from 'react';

function Boking_History() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Field</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Time Long</th>
                    <th scope="col">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">Field One</th>
                    <td>01/01/2021</td>
                    <td>1 Hours</td>
                    <td>Rp 85.000,00</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th scope="row">Field Two</th>
                    <td>05/01/2021</td>
                    <td>2 Hours</td>
                    <td>Rp 170.000,00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Boking_History
