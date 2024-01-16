import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchAllUsers } from '../../redux/CRUD/crud.actions'

const TableUsers = () => {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.crud.listUsers)
    const isLoading = useSelector(state => state.crud.isLoading)
    const isError = useSelector(state => state.crud.isError)
    const isDeleting = useSelector(state => state.crud.isDeleting)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
    }

    return (
        <>
            {isLoading
                ?
                <div>Loading...</div>
                :
                <>
                    {isError ? <div>Something wrongs, please try again!</div> : <table className="table table-striped">
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
                                            <button className='btn btn-warning me-3' >Edit</button>
                                            <button className='btn btn-danger' onClick={() => handleDelete(user.id)} disabled={isDeleting}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </>}
        </>
    )
}

export default TableUsers