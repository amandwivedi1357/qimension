import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <div className='w-full h-[155px] bg-[#8748F4] flex flex-row'>
      <div className='flex justify-center items-center md:w-[20%]  h-full  w-full'>
        <div className="flex gap-3" onClick={() => navigate('/')}>
          <img src="/Home/logo.svg" alt="" className='w-[20px]'/>
          <p className="font-poppins text-[white]">
            QIMENSION
          </p>
        </div>
      </div>
      <div className='flex  items-center justify-center w-[80%]'>
        <div className="flex justify-around w-[100%]">
          <div className="md:flex hidden ml-[12rem] gap-[32px]">
            <NavLink to="/about-us" className="text-white font-poppins" activeClassName="border-b-2 border-white">
              About Us
            </NavLink>
            <NavLink to="/services" className="text-white font-poppins" activeClassName="border-b-2 border-white">
              Services
            </NavLink>
            <NavLink to="/contact-us" className="text-white font-poppins" activeClassName="border-b-2 border-white">
              Contact Us
            </NavLink>
            <NavLink to="/machines" className="text-white font-poppins" activeClassName="border-b-2 border-white">
              Machines
            </NavLink>
          </div>
          <img src="/Home/Ham.svg" alt="" className='ml-10 sm:ml-0 md:hidden block' onClick={onOpen}/>
        </div>
      </div>
      
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#8748F4" color="white">
          <DrawerCloseButton />
          <DrawerBody display="flex" flexDirection="column" justifyContent="center" py={8}>
            {/* Logo and Title at the top */}
            <div className="flex gap-3 mb-8 items-center" onClick={() => { navigate('/'); onClose(); }}>
              <img src="/Home/logo.svg" alt="" className="w-[40px]" />
              <p className="font-poppins text-[white]">QIMENSION</p>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col gap-6">
              <NavLink to="/" className="text-white font-poppins" onClick={onClose}>
                Home
              </NavLink>
              <NavLink to="/about-us" className="text-white font-poppins" onClick={onClose}>
                About Us
              </NavLink>
              <NavLink to="/services" className="text-white font-poppins" onClick={onClose}>
                Services
              </NavLink>
              <NavLink to="/contact-us" className="text-white font-poppins" onClick={onClose}>
                Contact Us
              </NavLink>
              <NavLink to="/machines" className="text-white font-poppins" onClick={onClose}>
                Machines
              </NavLink>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export { Navbar };
