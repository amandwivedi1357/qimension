/* eslint-disable react/no-unescaped-entities */
import { Divider } from "@chakra-ui/react"
import { Banner, Footer, Navbar } from "../../Component"

 const Aboutus = ()=> {
  const data1=[
    {
      id:1,
      title:'Experience, expertise, and precision ',
      desc:'Turning your ideas into reality. From intricate 3D designs to precise CNC machining and detailed laser engravings, we deliver exceptional results every time.'
    },
    {
      id:2,
      title:'State-of-the-Art Technology',
      desc:'With a commitment to excellence, we harness state-of-the-art technology for superior quality and efficiency. Our arsenal includes advanced 3D printers, high-precision CNC machines, and state-of-the-art laser cutters and engravers, ensuring we exceed your expectations.'
    },
    {
      id:3,
      title:'Quality Assurance and Delivery',
      desc:'At Qimension, quality is paramount. We implement rigorous quality control measures throughout production, ensuring each piece meets our high standards. Additionally, we prioritize timeliness, delivering projects punctually without sacrificing quality, thanks to our efficient processes and dedicated team.'
    },
  ]
  return (
    <div className="w-full">
      <Navbar/>
      <div className="sm:m-[50px] m-[22px]">
        <div className="flex flex-col">

        <p className="font-open_sans sm:text-[48px] text-[28px] font-[600]">
        Innovative Manufacturing solutions
        </p>
        <p className="font-poppins text-[16px] leading-[27px] font-[400] tracking-[0.34px]">
        Welcome to Qimension, where innovation meets precision manufacturing. As a leading provider of advanced solutions in 3D Printing, CNC Machining, and Laser Cutting, we are dedicated to pushing the boundaries of what's possible. With state-of-the-art facilities and a team of skilled professionals, we deliver exceptional quality, customization, and service to meet the diverse needs of our clients. Our mission is to empower creativity and inspire breakthroughs in every industry we serve, while maintaining a steadfast commitment to excellence and customer satisfaction. Whether you're looking to prototype a new product, customize parts for manufacturing, or add intricate engravings to your designs, Qimension is here to turn your vision into reality.
        </p>
        </div>
        <div className="sm:my-[80px] my-[20px] flex  sm:flex-row flex-col gap-7 sm:gap-[38px] ">
            <img src="/Home/Home1.png" alt="" className="sm:w-[40%]"/>
            <img src="/Home/Home2.png" alt="" className="sm:w-[57%]"/>
        </div>
        <div className="my-[80px] flex sm:flex-row flex-col-reverse gap-[6%] ">
           
  <div className="sm:flex block  gap-[35px] mt-[60px]">
    <img src="/Home/home3.png" alt="home3" className="h-[500px] w-full" />
    <img src="/Home/home4.png" alt="home4" className="h-[500px] sm:mt-[80px] mt-[20px] w-full" />
  </div>

            <div className="flex-1">
              <div className=" flex gap-2">
                <img src="/Home/Ellipse.svg" alt="" />
                <p className="font-poppins">Our Vision & Mission</p>
              </div>
              <p className="text-[#141414] mt-[14px] mb-[32px] font-poppins sm:text-[40px] text-[28px] font-semibold leading-[1.35] tracking-[1.44px] uppercase">
              SHAPING A FUTURE WITH Revolutionary TECHNOLOGY
              </p>
              <p className="font-poppins tracking-[0.72px] font-semibold mb-[11px] text-[24px]  sm:text-[24px]">
              Empowering Innovation
              </p>
              <p className="mb-[16px] text-[rgba(7,7,16,0.90)] font-poppins text-[17px] font-medium leading-[1.61] tracking-[0.34px]">At Qimension, our mission is to empower innovation and creativity by providing
cutting-edge solutions in 3D Printing, CNC Machining, and Laser Engraving. We
strive to be a trusted partner for our clients, delivering exceptional quality,
customization, and service while fostering a culture of continuous improvement and sustainability.</p>
<p className="font-poppins tracking-[0.72px] font-semibold mb-[11px] text-[24px]  sm:text-[24px]">
Shaping a Boundless Future
</p>
<p className="mb-[16px] text-[rgba(7,7,16,0.90)] font-poppins text-[17px] font-medium leading-[1.61] tracking-[0.34px]">
Our vision at Qimension is to be a global leader in additive and subtractive manufacturing, recognized for our commitment to excellence, innovation, and customer satisfaction. We aim to push the boundaries of technology and creativity, inspiring  breakthroughs in industries ranging from aerospace and automotive to healthcare and consumer goods. Through our dedication to quality, integrity, and collaboration, we envision a future where Qimension plays a pivotal role in shaping the world of manufacturing.
</p>
            </div>

        </div>
      </div>
      <div className="my-[20px] sm:my-[80px] sm:mx-[50px] mx-[22px] flex sm:flex-row flex-col-reverse gap-[6%] ">
      <div className="flex-1 sm:mt-0 mt-5">
              <div className=" flex gap-2">
                <img src="/Home/Ellipse.svg" alt="" />
                <p className="font-poppins">Why choose us</p>
              </div>
              <p className="text-[#141414] mt-[14px] mb-[32px] font-poppins sm:text-[40px] text-[28px] font-semibold leading-[1.35] tracking-[1.44px] uppercase">
              SHAPING A FUTURE THROUGH 3D PRINTING
              </p>
             
             {
              data1.map((data,idx)=>(
                <div key={idx}>
                  
              <div className="flex sm:gap-10 gap-3">

              <p className="text-[#8647F4] text-[3rem] font-semibold">
                0{data.id}
              </p>
              <div className=" flex flex-col gap-3">
              <p className="text-[20px] font-bold font-poppins">{data.title}</p>
              <p className="text-[16px] font-poppins">{data.desc}</p>
              </div>
             
              </div>
              <div className="my-8">

              <Divider />
              </div>
             </div>
              ))
             }
            

{/* <button className="mt-[11px] hover:border hover:border-[#8647F4] group hover:bg-[#fff] bg-[#8647F4]  border h-[43px] border-white rounded-md w-[125px] ">
           <p className="text-[#fff]  group-hover:text-[#8647F4] font-poppins font-[400] text-[16px]"> Know More</p>
          </button> */}
            </div>
            <div className="">
              
  <div className=''>
    <img src="/Home/video_img.png" alt="home3" className="h-full" />
    
  </div>
</div>
            

        </div>
        <Banner/>
        <Footer/>
    </div>
  )
}
export {Aboutus}