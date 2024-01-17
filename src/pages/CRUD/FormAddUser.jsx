import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../redux/CRUD/crudSlice'

const FormAddUser = () => {
    const dispatch = useDispatch()
    const ref = useRef()
    const isCreating = useSelector(state => state.crud.isCreating)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createNewUser({
            email: ref.current.email.value,
            password: ref.current.password.value,
            username: ref.current.username.value,
        }))
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit} ref={ref}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required autoComplete='off' />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id='password' required />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id='username' required autoComplete='off' />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isCreating}>Create</button>
        </form>

    )
}

export default FormAddUser