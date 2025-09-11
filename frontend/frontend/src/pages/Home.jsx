import React from "react";
import HeroSlider from "../components/HeroSlider";
import CallToAction from "../components/CallToAction";
import About from "../components/About";
import Status from "../components/status";
import Departments from "../components/Departments";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";


function Home(){
    return(
        <div><HeroSlider/>
        <CallToAction/>
          <About/>
          <Status/>
          <Departments/>
          <Doctors/>
         <Footer/>
        </div>
        
    );
}
export default Home;
