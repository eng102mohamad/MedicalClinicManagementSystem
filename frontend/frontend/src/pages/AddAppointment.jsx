import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/context/AuthContext'

function AddAppointment() {
    const {user} = useContext(AuthContext)
    const [doctor,setDoctor]= useState([])
    const [form,setForm] = useState({
        doctor:"",
        date:"",
        reason:""
    })
    useEffect(()=>{
        const fetchDoctor = async()=>{
            const res= await fetch("https://medicalclinicmanagementsystem.onrender.com/doctors/allDoctors")
            const data = await res.json()
            setDoctor(data)
        }
           fetchDoctor()
        
    },[])
    const handleChange = (e)=>setForm({...form, [e.target.name]:e.target.value})
 
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const token =localStorage.getItem("token");
        const res = await fetch("https://medicalclinicmanagementsystem.onrender.com/appointments/createAppointment",{    
              method: "POST",
            headers: {
              "Content-Type": "application/json",
            Authorization:`Bearer ${token}`,
               },
          body: JSON.stringify(form)  
           
    });
    const data = await res.json()
    if (res.ok){
        alert('Appointmemt Add Successfully');
        setForm({doctor:"",date:"",reason:""})
    }else{
        alert('Failed Add Appointment')
    }
         
    }
    if(!user){
        alert('You Need to login to make AddAppointment')
    }
   

    
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>
                Add Appointmemt
            </h2>
         <label className='block mb-2 text-sm font-semibold'>Doctor</label>
<select 
  name='doctor' 
  value={form.doctor} 
  onChange={handleChange} 
  required
  className='w-full mb-4 p-2 border rounded'
>
  <option value=''>Select Doctor</option>
  {doctor?.map((doc) => (
    <option key={doc._id} value={doc._id}>
      {doc.name} - {doc.specialty}
    </option>
  ))}
</select>


            <label className='block mb-2 text-sm font-semibold'>Date</label>
            <input
            type='date'
            name='date'
            value={form.date}
            onChange={handleChange} 
            required
            className='w-full mb-4 p-2 border rounded'
            />

             <textarea
            type='text'
            name='reason'
            value={form.reason}
            onChange={handleChange} 
            required
            className='w-full mb-4 p-2 border rounded'
            ></textarea>
            <button type='submit' className='w-full py-2 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default AddAppointment
