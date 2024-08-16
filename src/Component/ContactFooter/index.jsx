

const ContactFooter = () => {
    
    return (
        <div className="bg-[#14161F] py-[70px] px-[50px] flex flex-col md:flex-row gap-2 mt-[50px]">
            <div className=" flex-1">
            <div className=" flex gap-2">
                <img src="/Home/Ellipse.svg" alt="" />
                <p className="font-poppins text-[#fffff0]">Get in Touch</p>
              </div>
              <p className="md:text-[30px] text-[24px]  my-[20px] text-white">SEND US A MESSAGE</p>
              <p className="text-[16px] md:w-[60%] text-[#fffff0]">Industrial-grade 3D Printers for every stage of the production cycleIndustrial-grade 3D Printers for every stage of the production </p>
              <img src="/services/insta.svg" alt="" className="h-[30px] mt-8"/>
            </div>
            <div className=" flex-1">
            <p className="font-poppins text-[#d4cbcb] text-[24px] md:px-4 px-0  py-2">We’d love to hear from you!</p>
            <p className="font-poppins text-[#d4cbcb] text-[24px] md:px-4 px-0  py-2">Lets get in touch</p>

            <div className="w-full md:p-4 p-0">
    <div className="flex flex-wrap md:flex-nowrap justify-between mb-4">
        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</label>
            <input type="text" id="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</label>
            <input type="text" id="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
    </div>
    <div className="flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
            <input type="text" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
    </div>
    <div>
        <label htmlFor="message" className="block mt-4 text-sm font-medium text-white">Message</label>
        <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
    </div>
</div>


            </div>
        </div>
    )
}

export { ContactFooter }
