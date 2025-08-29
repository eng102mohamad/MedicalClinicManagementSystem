import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
   
    const {login} = useContext(AuthContext)
    const [form ,setForm] = useState({email:"",password:""})
     const [error,setError] = useState(null);
      const navigate =useNavigate();
 const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value})
const handleSubmit = async(e) => {
  e.preventDefault();
  setError(null);
  console.log("form before send:", form);
    const res =await fetch('https://medicalclinicmanagementsystem.onrender.com/user/signin',{
     method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(form)     
});
    const data =  await res.json()
    if(!res.ok){
        setError(data.message || "something is error")
    }
    if (data.token){
        login(data.token)
        navigate('/')
    }

 }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
   <form className='bg-white p-6 rounded w-96 'onSubmit={handleSubmit}>
    <h2 className='text-2xl mb-4 text-center font-bold'>Login</h2>
     {error && <p className='text-red-500'>{error}</p>}
     <input
    type='email'
    name='email'
    placeholder='Email'
    onChange={handleChange}
    className='w-full mb-3 p-2 border rounded'
    />
    <input
    type='password'
    name='password'
    placeholder='Password'
    onChange={handleChange}
    className='w-full mb-3 p-2 border rounded'
    />
    <button className=' w-full text-black py-2 rounded hover:bg-blue-700'>Login</button>
   </form>
   </div>
  )
}

export default Login
