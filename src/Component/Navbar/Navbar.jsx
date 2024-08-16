
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-[155px] bg-[#8748F4] flex flex-row'>
    
            <div className='flex justify-center items-center md:w-[20%]  h-full  w-full'>
                <div className="flex gap-3 j " onClick={()=>navigate('/')}>
                    <img src="/Home/logo.svg" alt=""  className='w-[20px]'/>
                    <p className="font-poppins text-[white]">
                    QIMENSION
                    </p>
                </div>
            </div>
            <div className='flex  items-center justify-center w-[80%]'>
                <div className="flex justify-around w-[100%]">
                <div className="md:flex hidden ml-[12rem] gap-[32px]  ">
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
                <img src="/Home/Ham.svg" alt="" className='ml-10 sm:ml-0 md:hidden block'/>
                </div>
        
      </div>
    
    </div>
  )
}

export { Navbar}
