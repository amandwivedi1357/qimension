import { Footer, Navbar } from "../../Component"

const Machines = () => {
    const list = [
        {
            head: '1. 3D Printers',
            list: [
                'BambuLab X1 Carbon',
                'BambuLab A1 ',
                'Creality Ender 5 Pro ',
                'Creality Ender 3 V1, V2',
                'Creality CR-10',
                'Creality CR-30 ',
                'Elegoo Saturn S Resin Printer',
                'Creality Halot 1 Resin Printer '
            ]
        },
        {
            head: '2. CNC Machines',
            list: [
                'Haas ST-20Y Turnmill ',
                'Haas VF-2-I  ',
                'Zund G3 L2500 CNC Router  ',
                'Axiom Precision - AR8 Pro V5 ',
                'Multicam Apex1R ',
                'Nargesa non-mandrel Tube and Pipe Bender CC60 ',
                
            ]
        },
        {
            head: '3. Laser Cutter',
            list: [
                'Epilog Fusion Pro 48',
                'Sil AccuCut 6090CNC Machines ',
                
            ]
        },
        {
            head: '4. Welding',
            list: [
                <strong key={1}>BambuLab X1 Carbon</strong>,
                'Spot Welding ',
                'ARC Welding ',
                'MIG Welding',
                'TIG Welding',
                'Plasma Cutting  ',
                <strong key={2}>Conventional Mill</strong>,
                <strong key={3}>Conventional Lathe</strong>,
            ]
        },
    ]
    return (
        <div>
            <Navbar />
            <div className="mx-4 md:mx-[50px]">
                <div className="my-12 w-full md:w-[50%] mx-auto">
                    <p className="text-center text-[30px] md:text-[40px] font-poppins font-semibold">YOUR SOURCE FOR MANUFACTURING EXPERTISE</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {
                        list.map((data, idx) => (
                            <ul key={idx} className="list-disc">
                                <p className="font-semibold font-poppins text-[20px] md:text-[24px]">{data.head}</p>
                                {
                                    data.list.map((item, idx) => (
                                        <li key={idx} className="ml-5 my-2 text-sm md:text-base">
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 my-[50px] mx-auto">
                    <img src="/services/fourth.png" alt="" className="w-full" />
                    <img src="/services/fourth.png" alt="" className="w-full" />
                    <img src="/services/fourth.png" alt="" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row h-auto md:h-[29rem] relative">
                <div className="w-full md:w-[60%] bg-[#111111] px-4 md:pl-[70px] py-8 md:pt-[80px] ">
                    <p className="text-[30px] md:text-[40px] text-white capitalize font-semibold w-full md:w-[90%] tracking-[0.2rem]">
                        TURNING DREAMS INTO
                        REALITY BEGINS HERE
                    </p>
                    <p className="text-white w-full md:w-[60%] mt-[2rem]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu
                    </p>
                    <button className="mt-[2rem] hover:border hover:border-[#8647F4] group hover:bg-[#fff] border h-[43px] border-white rounded-md w-[125px] ">
                        <p className="text-[#fff] group-hover:text-black font-poppins font-[400] text-[16px]"> Contact Us</p>
                    </button>
                </div>
                <div className="w-full md:w-[40%] bg-[#8647F4]"></div>
                <img src="/Home/cake.png" alt="" className="absolute top-20 right-20 w-[60%] md:w-[40%]" />
            </div>
            <Footer />
        </div>
    )
}

export { Machines }
