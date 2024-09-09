import { useState } from "react";
import { Banner, Footer, Navbar } from "../../Component"

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const printing_services = [
    {
      img: "/Home/Printing.svg",
      head_text: "Custom 3D Printing",
      desc_text: "Fast-tracking design iteration for swift product development",
      hover: '/Home/rapid_fff.svg'
    },
    {
      img: "/Home/3Ddice.svg",
      head_text: "3D Scanning",
      desc_text: "Fast-tracking design iteration for swift product development",
      hover: '/Home/Printing_fff.svg'
    },
  ]
  return (
    <div>
      <Navbar />
      <div className="mx-4 md:mx-[50px]">
        <div className="md:my-12 my-6">
          <p className="md:text-center text-left text-[20px] md:text-[40px] font-poppins font-semibold">CUTTING-EDGE MANUFACTURING SERVICES FOR EVERY NEED</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 md:pr-8">
            <p className="font-poppins font-semibold text-[20px] md:text-[24px]">
               Additive Manufacturing (3D Printing)
            </p>
            <p className="font-poppins mt-2 text-[17px]">
              At Qimension, we employ cutting-edge additive manufacturing techniques, commonly
              known as 3D printing, to bring your ideas to life layer by layer. Our advanced 3D printers
              utilize a range of materials, from plastics and resins to metals and ceramics, to create
              intricate and complex geometries with precision and efficiency. Whether you need rapid
              prototyping for product development, customized components for manufacturing, or
              detailed models for design validation, our additive manufacturing process enables quick
              turnaround times and unparalleled flexibility.
            </p>
            {/* <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {
                printing_services.map((item, idx) => (
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={idx} className="group py-6 px-3 hover:bg-[#8647F4] rounded-md transition duration-300 ease-in-out">
                    <img src={hoveredIndex === idx ? item.hover : item.img} alt="" />
                    <p className="group-hover:text-[#fff] font-poppins mt-[31px] font-[600] text-[#12151C] text-[20px]">{item.head_text}</p>
                    <p className="group-hover:text-[#fff] mt-[12px] font-poppins text-[16px] text-[rgba(18, 21, 28, 0.70)]">
                      {item.desc_text}
                    </p>
                  </div>
                ))
              }
            </div> */}
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img src="/services/3d printing.png" alt="" className="float-right h-auto md:h-[550px] w-full md:w-auto" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:mt-[80px] mt-[50px]">
          <div className="flex-1 mt-8 md:mt-0">
            <img src="/services/second.png" className="float-left h-auto md:h-[500px] w-full md:w-auto" alt="" />
          </div>
          <div className="flex-1 md:pl-8">
            <p className="font-poppins font-semibold text-[20px] md:text-[24px]">
              Subtractive Manufacturing (CNC Machining)
            </p>
            <p className="font-poppins mt-2 text-[17px]">
              Qimension specializes in subtractive manufacturing through Computer Numerical Control (CNC) machining. With our state-of-the-art CNC machines and expert machinists, we can produce high-precision components with tight tolerances and superior surface finishes. From milling and turning to drilling and grinding, our CNC machining process allows for the precise shaping and finishing of a wide range of materials, including metals, plastics, and composites. Whether you require prototypes, custom parts, or production runs, our CNC machining capabilities ensure quality, consistency, and reliability in every project.
            </p>
            {/* <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {
                printing_services.map((item, idx) => (
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={idx} className="group py-6 px-3 hover:bg-[#8647F4] rounded-md transition duration-300 ease-in-out">
                    <img src={hoveredIndex === idx ? item.hover : item.img} alt="" />
                    <p className="group-hover:text-[#fff] font-poppins mt-[31px] font-[600] text-[#12151C] text-[20px]">{item.head_text}</p>
                    <p className="group-hover:text-[#fff] mt-[12px] font-poppins text-[16px] text-[rgba(18, 21, 28, 0.70)]">
                      {item.desc_text}
                    </p>
                  </div>
                ))
              }
            </div> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start mt-[50px] md:mt-[100px]">
          <div className="flex-1 md:pr-8">
            <p className="font-poppins font-semibold text-[20px] md:text-[24px]">
              Rapid Prototyping
            </p>
            <p className="font-poppins mt-2 text-[17px]">
              Rapid prototyping is a streamlined process that allows for quick iteration and testing of design concepts. Utilizing advanced technologies like 3D printing, it accelerates product development cycles, enabling efficient validation of ideas and reducing time-to-market. This approach facilitates cost-effective exploration of multiple design variations, leading to enhanced innovation and ultimately, superior end products.
            </p>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img src="/services/third.png" alt="" className="float-right h-auto md:h-[550px] w-full md:w-auto" />
          </div>
        </div>
      </div>
      {/* <div className="mt-[50px] flex flex-col md:flex-row h-auto md:h-[29rem] relative">
        <div className="w-full md:w-[60%] bg-[#111111] px-4 md:pl-[70px] py-8 md:pt-[80px] ">
          <p className="text-[30px] md:text-[40px] text-white capitalize font-semibold w-full md:w-[90%] tracking-[0.2rem]">
            TURNING DREAMS INTO
            REALITY BEGINS HERE
          </p>
          <p className="text-white w-full md:w-[60%] mt-[2rem]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu
          </p>
          <button className="mt-[2rem] hover:border hover:border-[#8647F4] group hover:bg-[#fff] border h-[43px] border-white rounded-md w-[125px] ">
            <p className="text-[#fff] group-hover:text-black font-poppins font-[400] text-[16px]">Contact Us</p>
          </button>
        </div>
        <div className="w-full md:w-[40%] bg-[#8647F4]"></div>
        <img src="/Home/cake.png" alt="" className="absolute top-20 right-20 w-[60%] md:w-[40%] hidden md:block" />
      </div> */}
      <Banner/>
      <Footer />
    </div>
  )
}

export { Services }
