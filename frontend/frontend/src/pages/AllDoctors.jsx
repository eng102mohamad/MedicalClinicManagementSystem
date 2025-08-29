import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AllDoctors() {
    
const[doctors,setDoctors] = useState([]);
   useEffect(()=>{
    const fectedDoctors = async()=>{
        try{
            const res = await fetch("http://localhost:5000/doctors/allDoctors")
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message || "failed to show Doctors")
            }
            setDoctors(data)
        }
        catch(error){
            console.log(error)

        }
        
    }
    fectedDoctors()

},[])
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#008e9b]'>All Doctors</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {doctors?.map((doc)=>(
                <div className='bg-white rounded-lg shadow p-4 text-center' key={doc?.id}>
                    <Link to={`/doctor/${doc?._id}`}>
                    <img className='w-32 h-32 mx-auto rounded-full object-cover border mb-4'
                     src={`http://localhost:5000/uploads/${doc?.image}`} alt='siu'/>

                     <h3 className='text-xl font-semibold'>{doc?.name}</h3>
                     <p className='text-gray-600'>{doc?.specialty}</p>
                     <p className='text-sm text-gray-500'> {doc?.experienceYears}Years Of Experience</p>
                     </Link>
                     </div>
            ))}
        </div>

      
    </div>
  )
}

export default AllDoctors
