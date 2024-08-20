
const Banner = () => {
  return (
    <div className="mt-[50px] flex flex-col md:flex-row h-auto md:h-[29rem] relative">
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
  </div>
  )
}

export  {Banner}