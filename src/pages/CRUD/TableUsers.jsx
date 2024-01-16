import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableUsers = () => {
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axios.get("http://localhost:4000/users")
            setListUsers(response.data)
        }
        fetchData()
    }, [])


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
                {listUsers?.map((user, index) => {
                    return (
                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='btn btn-warning me-3'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}

export default TableUsers