import React from 'react'

const TableUsers = () => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <button className='btn btn-warning me-3'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    )
}

export default TableUsers