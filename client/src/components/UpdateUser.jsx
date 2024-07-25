import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const UpdateUser = () => {
  const {id} = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [wallet, setWallet] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {
      console.log(result.data);
      setName(result.data.name);
      setEmail(result.data.email);
      setPhone(result.data.phone);
      setWallet(result.data.wallet);
    })
    .catch(err => console.log(err))
  }, [])

  const Update = (e) =>{
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, phone, wallet})
      .then(result =>{
         console.log(result);
         navigate('/');
        })
      .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 p-3 rounded bg-white">
      <form onSubmit={Update}>
        <h2 className='text-center text-primary'>Update User</h2>
        <div className="mb-2">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>

        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input type="email" className="form-control" placeholder='Enter Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>

        <div className="mb-2">
          <label htmlFor="">Phone Number</label>
          <input type="text" className="form-control" placeholder='Enter Phone Number' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
        </div>

        <div className="mb-2">
          <label htmlFor="">Wallet</label>
          <input type="text" className="form-control" placeholder='Enter Amount' value={wallet} onChange={(e) => {setWallet(e.target.value)}} />
        </div>

        <button className="btn btn-success">Update</button>

      </form>
    </div>
  </div>
  )
}

export default UpdateUser