import { Route, Routes } from 'react-router-dom'
import {  Aboutus, Contactus, Home, Machines, Services } from '../Pages'


const AllRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/services" element={<Services />}/>
       
         <Route path="/machines" element={<Machines />}/>
    </Routes>
  )
}

export default AllRoutes
