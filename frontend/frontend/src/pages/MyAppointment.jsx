import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/context/AuthContext'


function MyAppointment() {
    const {user} = useContext(AuthContext)
    const [appointment,setAppointment]= useState([])
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchAppointmrnt = async()=>{
            try{
              const token =  localStorage.getItem('token');
              const res = await fetch('https://medicalclinicmanagementsystem.onrender.com/appointments/myAppointments',
                {
                headers:{Authorization:`Bearer ${token}`} ,
            })
            const data = await res.json()
             if(!res.ok){
                throw new Error(data.message || "failed to fetch Appointment")
            }
           setAppointment(data)

            }
            catch(error){
                  console.error(error)
                  setError(error)
            }
        }
        fetchAppointmrnt()
    },[])
    const cancelAppointment = async(id)=>{
        try{  const token =  localStorage.getItem('token');
              const res = await fetch(`https://medicalclinicmanagementsystem.onrender.com/appointments/deleteAppointment/${id}`,

                { 
                    method :"POST",

                headers:{
                     "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`,
                } ,
            })
             const data = await res.json()
             if(!res.ok){
                throw new Error(data.message || "failed to Delete Appointment")
            }
         setAppointment(prevAppointment=>{const updateAppointment =prevAppointment.filter((a)=>a._id !== id)
            return updateAppointment
           }  )
         alert('Appointment Delete Succsuflly')


        }
        catch(error){
            console.error(error);
            alert(`Error cancelAppointment :${error.message}`)

        }
    }
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#008e9b]'>My Appointment</h2>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
      <div className='space-y-6 max-w-3xl mx-auto'>
        {appointment?.length === 0 ?(
            <p className='text-center text-gray-500'>No Appointment Found</p>
        ): appointment?.map((app)=>(
            <div key={app?._id} className='flex items-center justify-between bg-white
            shadow rounded-lg p-4'>
       <div className='flex items-center gap-4'>

         <img className='w-20 h-20 rounded-full object-cover border'
         src={`https://medicalclinicmanagementsystem.onrender.com/uploads/${app?.doctor.image}`} alt='siu'/>

<div className=''>
    <h3 className='text-xl font-semibold'>{app.doctor?.name}</h3>
    <p className='text-gray-600'>{app.reason}</p>
    <p>{new Date (app?.date).toLocaleDateString()}</p>
</div>


            </div>
       <button className='text-white' onClick={()=>{if(window.confirm('Are You sure you wat to delete this Appointment?')){
        cancelAppointment(app?._id);
        }}} >Delete</button>
            </div>
          ))
          
          } 
 

      </div>
     </div>
  )
}

export default MyAppointment
