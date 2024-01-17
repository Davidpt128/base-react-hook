import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchAllUsers, updateUser } from '../../redux/CRUD/crud.actions'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TableUsers = () => {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.crud.listUsers)
    const isLoading = useSelector(state => state.crud.isLoading)
    const isError = useSelector(state => state.crud.isError)
    const isDeleting = useSelector(state => state.crud.isDeleting)
    const [showEdit, setShowEdit] = useState(false);
    const [userEdit, setUserEdit] = useState({})

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    const handleOpenEdit = (user) => {
        setShowEdit(true)
        setUserEdit(user)
    };

    const handleCloseEdit = () => setShowEdit(false);

    const handleChangeEdit = (event) => {
        setUserEdit({ ...userEdit, [`${event.target.id}`]: event.target.value })
    }

    const handleSubmitEdit = () => {
        dispatch(updateUser(userEdit))
        setShowEdit(false)
    }

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
                                            <button className='btn btn-warning me-3' onClick={() => handleOpenEdit(user)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => handleDelete(user.id)} disabled={isDeleting}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </>}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required value={userEdit.email} onChange={handleChangeEdit} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id='password' required value={userEdit.password} onChange={handleChangeEdit} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required value={userEdit.username} onChange={handleChangeEdit} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitEdit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default TableUsers