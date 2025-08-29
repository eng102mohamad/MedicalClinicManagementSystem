import React, { useContext, useState } from 'react'
import { AuthContext } from '../components/context/AuthContext'

function AddDoctor() {
  const {user} = useContext(AuthContext)
  const [preview,setPreview] = useState(null)
  const [error,setError]=useState(null)
  const [form,setForm] = useState({
    name:"",
    specialty:"",
    description:"",
    experienceYears:"",
    image:null
  })
  const handleChange =(e)=>{
    const{name,value,files} = e.target
    if(files){
      const file = files[0]
      setForm({...form, image:file})
      setPreview(URL.createObjectURL(file))
    }else{
      setForm({...form,[name]:value})
    }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    setError(null)
    try{
    const token = localStorage.getItem('token')
    const formData = new FormData()
    formData.append("name",form.name);
    formData.append("specialty",form.specialty);
    formData.append("description",form.description);
    formData.append("experienceYears",form.experienceYears);
    if(form.image) formData.append("image",form.image);

    
    const res = await fetch("https://medicalclinicmanagementsystem.onrender.com/doctors/addDoctors",{    
              method: "POST",
            headers: { Authorization:`Bearer ${token}`},
          body:formData      
    })
     const data = await res.json()
     if(!res.ok){
      throw new Error(data.message || "failed to Add Doctor ")
     }
     alert('Doctor Added Succeesfully')
     setForm({name:"",
    specialty:"",
    description:"",
    experienceYears:"",
    image:null})
  }
    catch(error){
      console.error("Error on the Added",error)
      setError(error.message)

    }

  }
  if(!user ||user.role !=='admin'){
    return <div className='flex items-center h-screen'>Only Admin can be Add Doctors</div>
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl flex gap-8'
      encType='multipart/from-data'>

        <div className='flex flex-col items-center w-1/3'>
<div className='w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300'>
  {preview ? (
    <img src={preview} alt='x' className='object-cover w-full h-full'/>

  ):( <img src ='CR7.png'alt='Doctor' />)}
                
</div>

        <button type='button' onClick={()=>document.getElementById('fileInput').click()} className='mt-4'>Choose Image</button>

        <input id= 'fileInput' onChange={handleChange} type='file' accept='image/*' className='hidden'/>
        </div>
        <div className='text-2xl font-bold mb-6 text-[#008e9b]text-center'>
           <h2>Add New Doctor</h2>
           {error && <p className='texxt-res-500'>{error}</p>}

          <label className='block mb-2 font-semibold'>Name</label>
          <input value={form.name} onChange={handleChange} type='text'name='name' required className='w-full mb-4 p-2 border rounded'/>


          
          <label className='block mb-2 font-semibold'>Specialty</label>
          <input value={form.specialty} onChange={handleChange} type='text'name='specialty' required className='w-full mb-4 p-2 border rounded'/>


          
          <label className='block mb-2 font-semibold'>Experience Years</label>
          <input value={form.experienceYears}  onChange={handleChange} type='number'name='experienceYears' required className='w-full mb-4 p-2 border rounded'/>

           
          <label className='block mb-2 font-semibold'>Description</label>
          <input value={form.description} onChange={handleChange} type='text'name='description' required className='w-full mb-4 p-2 border rounded'/>
           <button type='submit'>Add Doctor</button>
        </div>
    
      </form>

    </div>
  )
}

export default AddDoctor
