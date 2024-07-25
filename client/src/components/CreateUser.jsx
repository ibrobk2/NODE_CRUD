import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();
 
 

  const Submit = (e) => {
    e.preventDefault();
      axios.post("http://localhost:3001/createUser", {name, email, phone})
      .then(result =>{
         console.log(result);
         navigate('/');
        })
      .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 p-3 rounded bg-white">
        <form onSubmit={Submit}>
          <h2 className='text-center text-primary'>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="mb-2">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="form-control" placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value)} />
          </div>

          <button className="btn btn-success">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default CreateUser