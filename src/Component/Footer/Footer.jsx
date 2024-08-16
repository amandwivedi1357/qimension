import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#14161F] py-[120px] px-[50px] flex flex-col md:flex-row gap-2 mt-[50px]">
            <div className="flex-2 flex gap-4 mb-6 md:mb-0 md:mr-6">
                <img src="/Home/logo.svg" alt="" className="h-[50px] mx-auto"/>
                <p className="font-poppins text-[24px] mx-auto text-[white]">
                    QIMENSION
                </p>
            </div>
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <p className="w-full md:w-[60%] m-auto text-white text-[20px] font-poppins capitalize">
                    Experience the Future of Creativity, Turn Your Imagination into Reality Through 3D Printing
                </p>
                <div className="mt-[50px] flex flex-col md:flex-row justify-center gap-10 md:gap-20">
                    <div className="mb-6 md:mb-0">
                        <p className="font-poppins text-white text-[20px]">Pages</p>
                        <ul>
                            <li className="font-poppins cursor-pointer hover:text-white duration-100 ease-in text-[#FFFFFFCC] my-3 text-[16px]" onClick={() => navigate('/')}>Home</li>
                            <li className="font-poppins cursor-pointer hover:text-white duration-100 ease-in text-[#FFFFFFCC] my-3 text-[16px]" onClick={() => navigate('/about-us')}>About us</li>
                            <li className="font-poppins cursor-pointer hover:text-white duration-100 ease-in text-[#FFFFFFCC] my-3 text-[16px]" onClick={() => navigate('/services')}>Our services</li>
                            <li className="font-poppins cursor-pointer hover:text-white duration-100 ease-in text-[#FFFFFFCC] my-3 text-[16px]" onClick={() => navigate('/contact-us')}>Contact us</li>
                            <li className="font-poppins cursor-pointer hover:text-white duration-100 ease-in text-[#FFFFFFCC] my-3 text-[16px]" onClick={() => navigate('/machines')}>Machines</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[40%]">
                        <p className="font-poppins text-white text-[20px]">Contact Us</p>
                        <ul className="mt-3 flex flex-col gap-6">
                            <li className="flex gap-4">
                                <img src="/Home/loc.svg" alt="" className="-mt-10"/>
                                <p className="text-[#FFFFFFCC]">Kshetra A-42, 2nd Floor, Road No. 6, Film Nagar, Jubilee Hills, Hyderabad, Telangana-500033</p>
                            </li>
                            <li className="flex gap-4">
                                <img src="/Home/msg.svg" alt="" className="w-6"/>
                                <p className="w-full md:w-[50%] text-[#FFFFFFCC]">info@qimension.com</p>
                            </li>
                            <li className="flex gap-4">
                                <img src="/Home/call.svg" alt=""/>
                                <p className="w-full md:w-[50%] text-[#FFFFFFCC]">+91 87903 47455</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-3 flex flex-col items-start justify-center">
                <p className="text-center text-white text-[24px] font-poppins capitalize">
                    Social Media
                </p>
                <img src="/services/insta.svg" alt="" className="h-[20px] mt-4"/>
            </div>
        </div>
    )
}

export { Footer }
