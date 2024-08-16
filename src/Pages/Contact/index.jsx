/* eslint-disable react/no-unescaped-entities */
import { ContactFooter, Footer, Navbar } from "../../Component"

const Contactus = () => {
    const contactdata = [
        {
            img:'/Home/call.svg',
            hover:'',
            title:'Contact Number',
            desc:' +91 87903 47455'
        },
        {
            img:'/Home/msg.svg',
            hover:'',
            title:'Email Address',
            desc:'info@qimension.com'
        },
        {
            img:'/Home/loc.svg',
            hover:'',
            title:'Office Location',
            desc:'Open Maps'
        }
    ]
    return (
        <div>
            <Navbar/>
            <div className="w-full">
                <div className="flex flex-col justify-center mt-[5rem] items-center gap-3 px-4">
                    <p className="font-poppins text-center text-[40px]">Get in Touch</p>
                    <p className="w-full md:w-[40%] text-center font-poppins text-[16px]">
                        Connect with Our Creative Team Bring Your Ideas to Life Let's Build Something Extraordinary Together
                    </p>
                </div>
                <div className="mt-[3rem] flex flex-col md:flex-row justify-center items-center gap-5 px-4">
                    <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-8">
                        {
                            contactdata.map((data, idx) => (
                                <div className="h-[10rem] w-full md:w-[15rem] flex flex-col items-center" key={idx}>
                                    <img src={data.img} alt="" className="h-[40px] w-[40px]"/>
                                    <p className="text-[20px] mt-5 font-semibold text-center">{data.title}</p>
                                    <p className="text-center">{data.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ContactFooter/>
        </div>
    )
}

export { Contactus }
