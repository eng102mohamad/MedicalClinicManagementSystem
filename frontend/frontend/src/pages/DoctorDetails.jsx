import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'


function DoctorDetails() {
    const {id} = useParams();
    const[doctor,setDoctor] = useState([]);
   useEffect(()=>{
    const fectedDoctors = async()=>{
        try{
            const res = await fetch(`https://medicalclinicmanagementsystem.onrender.com/doctors/${id}`)
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message || "failed to show Doctors")
            }
            setDoctor(data)
        }
        catch(error){
            console.log(error)

        }
        
    }
    fectedDoctors()

},[id])
  return (
    <div className=' flex flex-col md:flex-row items-center max-w-5xl max-auto
     p-8 bg-gray-100 min-h-screen'>
        <img src={`http://localhost:5000/uploads/${doctor?.image}`} alt='siu' className='w-64 h-64 object-cover rounded-lg shadow-md mb-6 md:mb-0 md:mr-10'/>

        <div className='space-y-4'>
            <h2 className='text-4xl font-bold text-[#008e9b]'>{doctor?.name}</h2>
          <p className='text-xl text-gray-600'>{doctor?.specialty}</p>
        <p className='text-sm text-gray-500'> {doctor?.experienceYears}Years Of Experience</p>
        <p>{doctor?.description}</p>
        </div>
       
      
    </div>
  )
}

export default DoctorDetails
