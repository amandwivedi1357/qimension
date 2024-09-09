/* eslint-disable react/no-unescaped-entities */
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'; // Import Chakra UI's useToast hook

const ContactFooter = () => {
    const toast = useToast(); // Initialize the useToast hook

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (selectedValue, { name }) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: selectedValue
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_foa4n4b', 'template_kac6iw5', {
            user_name: formData.firstName,
            user_lastname: formData.lastName,
            user_email: formData.email,
            phone_number: formData.phone,
            comment: formData.message,
        }, "HBBhDWoTB59hFkaWj") //UbbN4fkKMy1Icheth
        .then((result) => {
            toast({
                title: "Success!",
                description: "Thank you for contacting us. We will get in touch with you soon.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right", // You can change the position as needed
            });

            // Clear form fields after successful submission
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        }, (error) => {
            toast({
                title: "Error!",
                description: "Error sending email. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });
        });
    };

    return (
        <div className="bg-[#14161F] pt-[70px] pb-[20px] px-[50px] flex flex-col md:flex-row gap-2 mt-[50px]">
            <div className="flex-1">
                <div className="flex gap-2">
                    <img src="/Home/Ellipse.svg" alt="" />
                    <p className="font-poppins text-[#fffff0]">Get in Touch</p>
                </div>
                <p className="md:text-[30px] text-[24px] my-[20px] text-white">SEND US A MESSAGE</p>
                <p className="text-[16px] md:w-[60%] text-[#fffff0]">Industrial-grade 3D Printers for every stage of the production cycle.</p>
                <img src="/services/insta.svg" alt="" className="h-[30px] mt-8" />
            </div>
            <div className="flex-1">
                <p className="font-poppins text-[#d4cbcb] text-[24px] md:px-4 px-0 py-2">We’d love to hear from you!</p>
                <p className="font-poppins text-[#d4cbcb] text-[24px] md:px-4 px-0 py-2">Let's get in touch</p>

                <form onSubmit={sendEmail} className="w-full md:p-4 p-0">
                    <div className="flex flex-wrap md:flex-nowrap justify-between mb-4">
                        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                            <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</label>
                            <input required onChange={e => handleChange(e.target.value, { name: "firstName" })} value={formData.firstName}  name="firstName" type="text" id="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</label>
                            <input required onChange={e => handleChange(e.target.value, { name: "lastName" })} value={formData.lastName}  name="lastName" type="text" id="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-between">
                        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input required onChange={e => handleChange(e.target.value, { name: "email" })} value={formData.email}  name="email" type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
                            <input required onChange={e => handleChange(e.target.value, { name: "phone" })} value={formData.phone}  name="phone" type="text" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mt-4 text-sm font-medium text-white">Comments</label>
                        <textarea required onChange={e => handleChange(e.target.value, { name: "message" })} value={formData.message}  name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>
                    <div className="flex flex-col mt-4 font-poppins sm:items-end items-center justify-start  md:w-full sm:mb-10">
                        <button type="submit" className="hover:bg-white text-white hover:text-black rounded-md bg-[#8647F4] border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px] sm:mb-6">
                            get in touch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { ContactFooter };
