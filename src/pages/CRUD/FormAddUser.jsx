import React from 'react'

const FormAddUser = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>

    )
}

export default FormAddUser