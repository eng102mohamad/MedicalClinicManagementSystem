import React, { useState, useEffect } from 'react';

function Status() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const doctorStatus = await fetch("https://medicalclinicmanagementsystem.onrender.com/doctors/count");
        const departmentsStatus = await fetch("https://medicalclinicmanagementsystem.onrender.com/departments/count");

        const doctorData = await doctorStatus.json();
        const departmentsData = await departmentsStatus.json();

        setDoctorCount(doctorData|| 0);
        setDepartmentCount(departmentsData || 0);
          
      }
      
      catch (error) {
        console.log("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    { icon: "fas fa-user-md", count: doctorCount, label: "Doctors" },
    { icon: "fas fa-hospital", count: departmentCount, label: "Departments" },
    { icon: "fas fa-flask", count: 8, label: "Research" },
    { icon: "fas fa-award", count: 9, label: "Awards" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start space-x-4 bg-white rounded-lg p-6 hover:shadow-lg transition"
            >
             
              <i className={`${item.icon} text-3xl text-[#46daea]`}></i>

              
              <div>
                <span className="text-3xl font-bold text-black">{item.count}</span>
                <p className="text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Status;
