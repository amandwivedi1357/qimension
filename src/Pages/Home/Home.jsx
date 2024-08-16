/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";
import './Home.css';
import { useEffect, useState } from "react";
import { printing_services } from ".";
import { Divider } from "@chakra-ui/react";
import { Footer } from "../../Component";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [
    '/Home/dog.png',
    '/Home/leg.png',   // Replace with your actual image paths
  ];
  
  const data1 = [
    {
      id: 1,
      title: 'Consultation and Design',
      desc: 'Consultation and design drive efficient 3D printing, aligning client needs for innovative prototypes.'
    },
    {
      id: 2,
      title: 'Material Selection and Printing',
      desc: 'Material selection is key for 3D printing quality, while printing techniques bring digital designs to life swiftly and accurately.'
    },
    {
      id: 3,
      title: 'Quality Assurance and Delivery',
      desc: 'Quality assurance guarantees precise 3D printed prototypes, while swift delivery accelerates innovation from design to fruition.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="w-full flex h-screen relative flex-col md:flex-row">
        <div className="md:w-[25%] w-full bg-[#111]  md:h-auto">
          <div className="md:h-[8rem] md:p-0 p-10  h-[650px] cursor-pointer flex md:justify-center justify-start  md:items-center items-start gap-3">
            <img src="/Home/logo.svg" alt="" className="h-8 md:h-auto" />
            <p className="font-open_sans text-[20px] text-[#fff] font-[500] tracking-[2.00px]">
              QIMENSION
            </p>
          </div>
        </div>
        <div className="md:w-[75%] w-full bg-[#8647F4]">
          <div className="h-[8rem] w-full flex justify-center items-center">
            <div className="flex justify-around w-full px-4 md:px-0">
              <div className=" gap-[32px] hidden md:flex">
                <NavLink
                  to="/about-us"
                  className="text-white font-poppins"
                  activeClassName="border-b-2 border-white"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/services"
                  className="text-white font-poppins"
                  activeClassName="border-b-2 border-white"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className="text-white font-poppins"
                  activeClassName="border-b-2 border-white"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/machines"
                  className="text-white font-poppins"
                  activeClassName="border-b-2 border-white"
                >
                  Machines
                </NavLink>
              </div>
              <img src="/Home/Ham.svg" alt="" className="block md:hidden mt-[-82.5rem] ml-[18rem]" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center -mt-24 pb-10 md:pb-0 md:mt-20">
            <div className="md:w-[70%] w-[90%] mx-auto">
              <p className="font-poppins text-white font-[600] text-[30px] md:text-[50px] leading-[40px] md:leading-[60px]">
                Prototype to Production Fast On-Demand Manufacturing
              </p>
              <p className="font-poppins text-[14px] md:text-[16px] text-white tracking-[0.32px] font-[400] capitalize">
                Industrial-grade 3D Printers for every stage of the production cycle
              </p>
              <button className="mt-[20px] md:mt-[31px] group hover:bg-[#fff] border h-[43px] border-white rounded-md w-[125px]">
                <p className="text-white group-hover:text-[#8647F4] font-poppins font-[400] text-[16px]">
                  Contact us
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`fade-in ${currentImage === index ? 'visible' : 'hidden'}`}
          />
        ))}
      </div>

      <div className="md:mt-[104px] mt-[15rem] mx-[20px] md:mx-[50px]">
        <div className="flex gap-3 ">
          <img src="/Home/Ellipse.svg" alt="" />
          <p className="text-[16px] font-poppins">Our Services</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="md:w-[60%] font-poppins text-[#12151C] font-[600] text-[30px] md:text-[50px] leading-[40px] md:leading-[60px]">
            INNOVATIVE 3D PRINTING SERVICES FOR EVERY NEED
          </p>
          <button className="mt-[31px] hover:border hover:border-[#8647F4] group hover:bg-[#fff] bg-[#8647F4] border h-[43px] border-white rounded-md w-[125px]">
            <p className="text-[#fff] group-hover:text-[#8647F4] font-poppins font-[400] text-[16px]">
              Contact us
            </p>
          </button>
        </div>
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {printing_services.map((item, idx) => (
            <div
              key={idx}
              className="group py-6 px-3 hover:bg-[#8647F4] rounded-md transition duration-300 ease-in-out"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === idx ? item.hover : item.img} alt="" />
              <p className="group-hover:text-[#fff] font-poppins mt-[31px] font-[600] text-[#12151C] text-[20px]">
                {item.head_text}
              </p>
              <p className="group-hover:text-[#fff] mt-[12px] font-poppins text-[16px] text-[rgba(18, 21, 28, 0.70)]">
                {item.desc_text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-[80px] mx-[20px] md:mx-[50px] flex flex-col md:flex-row gap-[6%] h-auto md:h-[40rem]">
        <div className="flex-1">
          <div className="flex gap-[35px]">
            <img src="/Home/home3.png" alt="home3" className="h-[300px] md:h-[500px]" />
            <img src="/Home/home4.png" alt="home4" className="h-[300px] md:h-[500px] mt-[50px] md:mt-[135px]" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-2">
            <img src="/Home/Ellipse.svg" alt="" />
            <p className="font-poppins">About us</p>
          </div>
          <p className="text-[#141414] mt-[14px] mb-[32px] font-poppins text-[30px] md:text-[40px] font-semibold leading-[1.35] tracking-[1.44px] uppercase">
            TURNING IDEAS INTO OBJECTS
          </p>
          <p className="mb-[16px] text-[rgba(18, 21, 28, 0.70)] font-poppins text-[14px] md:text-[17px] font-normal leading-[1.61] tracking-[0.34px]">
            At Qimension, our mission is to empower innovation and creativity by providing
            cutting-edge solutions in 3D Printing, CNC Machining, and Laser Engraving. We
            strive to be a trusted partner for our clients, delivering exceptional quality,
            customization, and service while fostering a culture of continuous improvement and sustainability. <br /> <br />
            Our mission is to empower creativity and inspire breakthroughs in every industry we serve, while maintaining a steadfast commitment to excellence and customer satisfaction. Whether you're looking to prototype a new product, customize parts for manufacturing, or add intricate engravings to your designs, Qimension is here to turn your vision into reality.
          </p>
          <button className="mt-[31px] hover:border hover:border-[#8647F4] group hover:bg-[#fff] bg-[#8647F4] border h-[43px] border-white rounded-md w-[125px]">
            <p className="text-[#fff] group-hover:text-[#8647F4] font-poppins font-[400] text-[16px]">
              Contact us
            </p>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[6%] my-[80px] mx-[20px] md:mx-[50px]">
        <div className="flex-1">
          <div className="flex gap-2">
            <img src="/Home/Ellipse.svg" alt="" />
            <p className="font-poppins">About us</p>
          </div>
          <p className="text-[#141414] mt-[14px] mb-[32px] font-poppins text-[30px] md:text-[40px] font-semibold leading-[1.35] tracking-[1.44px] uppercase">
            SIMPLE STEPS TO 3D PRINTING TECHNOLOGY
          </p>
          {data1.map((data, idx) => (
            <div key={idx}>
              <div className="flex gap-10">
                <p className="text-[#8647F4] text-[2rem] md:text-[3rem] font-semibold">
                  0{data.id}
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-[18px] md:text-[20px] font-bold font-poppins">{data.title}</p>
                  <p className="text-[14px] md:text-[16px] font-poppins">{data.desc}</p>
                </div>
              </div>
              <div className="my-8">
                <Divider />
              </div>
            </div>
          ))}
          <button className="mt-[11px] md:mb-0 mb-5 hover:border hover:border-[#8647F4] group hover:bg-[#fff] bg-[#8647F4] border h-[43px] border-white rounded-md w-[125px]">
            <p className="text-[#fff] group-hover:text-[#8647F4] font-poppins font-[400] text-[16px]">
              Know More
            </p>
          </button>
        </div>
        <div className="h-auto w-full md:w-1/2">
          <img src="/Home/video_img.png" alt="home3" className="h-full w-full object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Home};
