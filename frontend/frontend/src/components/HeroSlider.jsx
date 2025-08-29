import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import carousel_1 from '../img/hero-carousel/hero-carousel-1.jpg';
import carousel_2 from '../img/hero-carousel/hero-carousel-2.jpg';
import carousel_3 from '../img/hero-carousel/hero-carousel-3.jpg';

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      image: carousel_1,
      title: "Your Health, Our Priority",
      text: "We provide advanced medical care with experienced doctors, modern technology, and a caring approach for every patient."
    },
    {
      image: carousel_2,
      title: "Specialized Medical Services",
      text: "From cardiology to pediatrics, our expert teams are ready to help you and your family stay healthy and safe."
    },
    {
      image: carousel_3,
      title: "Easy Online Appointment",
      text: "Book your appointment quickly and conveniently with top doctors at your preferred time."
    },
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            {/* الصورة */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* طبقة شفافة + النص بالنص */}
            <div className="absolute inset-0 h-full w-full bg-black bg-opacity-40 
              flex flex-col justify-center items-center text-center text-white px-4">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="max-w-xl text-lg md:text-xl drop-shadow-md">
                {slide.text}
              </p>
              <button
                className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlider;
