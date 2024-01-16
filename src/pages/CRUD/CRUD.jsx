import React from 'react'
import FormAddUser from './FormAddUser'
import TableUsers from './TableUsers'
import { useSelector } from 'react-redux'

const CRUD = () => {
    const countUser = useSelector(state => state.crud.listUsers).length
    return (
        <div className='container'>
            <div className='pt-5 text-end'>{`(${countUser}) ${countUser > 1 ? "Users" : "User"}`}</div>
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