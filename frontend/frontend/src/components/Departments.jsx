import React from 'react';
import {useState, useEffect} from 'react';
 function Departments (){
    const [departments,setDepartments] = useState([]);
    const[activeTab,setActiveTab]=useState([]);
    useEffect(()=>{
        fetch("https://medicalclinicmanagementsystem.onrender.com/departments/allDepartment")
         .then((res) => res.json()) 
        .then((data)=>{
            setDepartments(data)
            if(data.length>0)setActiveTab(data[0]._id)
        })
    .catch((err)=>console.error('Faild to fetch department',err))

    
    },[])
    const handleTabClick=(id)=>{
        setActiveTab(id)
    }

    return (
        <section className='mb-8 text-center'>
            <h2 className='text-3xl font-bold mb-2'>Departments</h2>
            <p className='text-gray-600 max-w-xl mx-auto'>
                Explore our specialized medical departments
                satffed with export doctors.
            </p>
            <div className='flex flex-col md:flex-row gap-6'>
                <ul className='flex md:flex-col space-x-4 
                md:space-x-0 border-b md:border-b-0 md:border-r border-gray-300'>
                    {departments.map((dep)=>(
                        <li key={dep._id}>
                            <button onClick={()=>handleTabClick(dep._id)} className={`block mt-3 mr-4 w-40 px-4 py-2 rounded-t md:rounded-tr-none md:rounded-1
                                ${activeTab===dep._id?"bg-[#008e9b] text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}` }>

{dep?.name}
                                </button>
                        </li>
                    ))}
                </ul>
                <div className='flex-1 bg-gray-50 p-6 rounded'>
                    {departments?.map((dep)=>(
                    dep?._id ===activeTab ?(
                        <div key={dep._id}className='flex flex-col md:flex-row items-center gap-6'>
                            <div>
                    <h3 className="text-2xl font-semibold text-[#008e9b] mb-2">
                     {dep?.name}
                    </h3>
                      <p className="text-gray-600 leading-relaxed max-w-md md:text-left text-center">
                      {dep?.description}
                       </p>

                             
                           
                            </div>
                            <div>
                            </div>
                            </div>
                    ):null

                    
                    ))}
                </div>
            </div>

        </section>


  )};
  export default Departments;
