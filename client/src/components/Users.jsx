import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])


  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(result=>{
      console.log(result);
      window.location.reload();
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex flex-column h-100 bg-primary justify-content-center align-items-center'>
        <h2 className="text-center text-white">Users</h2>
      
        <div className="w-75 bg-white rounded p-3">
          <Link to='/create' className='btn btn-success'>Add User +</Link>
            <table className="table">
                <thead>
                  <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Wallet</th>
                        <th>Action</th>
                  </tr>
                  </thead>
                <tbody>
                   {
                    users.map((user)=>{
                      return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.wallet}</td>
                        <td>
                          <Link to={`/update/${user._id}`} className='btn btn-primary'>Edit</Link>
                          <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                        </td>
                      </tr>
                    })
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users