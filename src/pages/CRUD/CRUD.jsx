import React from 'react'
import FormAddUser from './FormAddUser'
import TableUsers from './TableUsers'

const CRUD = () => {
    return (
        <div className='container'>
            <div className='py-5'>
                <FormAddUser />
            </div>
            <hr />
            <div className='py-5'>
                <TableUsers />
            </div>
        </div>
    )
}

export default CRUD