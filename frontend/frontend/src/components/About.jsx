import React from 'react';
import AboutUs from '../img/about.jpg'
function About(){
    return (
        <section className='py-16 bg-gray-50'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold text-[#0097a5] mb-3'>About Us</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    We are dedicated to providing high-quality healthcare services
                    modren facilities, and compassionate  care.
                    Our mission is to ensure every day the attention and treatment they deserve
                </p>
            </div>
            <div className='max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                <div className='relative'>
                    <img src={AboutUs} className='rounded-lg shadow-md'/>

                
                <div >
                    <h3 className='text-2xl font-semibold mb-4'>
                        We are committed to providing trusted healthcare services with skilled
                        professionals,advanced technology,and compassionate care to ensure you well-being
                    </h3>
                    <p className='text-[#0097a5]'>We Strive to
                        deliver exceptional healthcare with a patient-first approach,combining expert medical
                        knowledge,modren facilities,and
                        compassionate care to improve lives and build healthier communities.
                    </p>

</div>
                </div>
            </div>

        </section>

    );
}
export default About