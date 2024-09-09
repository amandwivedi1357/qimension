import { Banner, Footer, Navbar } from "../../Component"

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
                
                'Spot Welding ',
                'ARC Welding ',
                'MIG Welding',
                'TIG Welding',
                'Plasma Cutting  ',
               
            ]
        },
    ]
    return (
        <div>
            <Navbar />
            <div className="mx-4 md:mx-[50px]">
                <div className="md:my-12 my-3  w-full md:w-[50%] mx-auto">
                    <p className="md:text-center text-left text-[25px]  md:text-[40px] font-poppins font-semibold ">YOUR SOURCE FOR MANUFACTURING EXPERTISE</p>
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
                
                {/* <div className=" md:hidden block">

                <SwipeCarousel/>
                </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-1 my-[50px] mx-auto">
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img1.webp" alt="Service Image 1" className="w-[50%] border border-red-500" />
    </div>
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img2.webp" alt="Service Image 2" className="w-[50%] border border-red-500" />
    </div>
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img3.webp" alt="Service Image 3" className="w-[50%] border border-red-500" />
    </div>
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img7.webp" alt="Service Image 4" className="w-[50%] border border-red-500" />
    </div>
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img5.webp" alt="Service Image 5" className="w-[50%] border border-red-500" />
    </div>
    <div className="flex justify-center">
        <img loading="lazy" src="/services/img6.webp" alt="Service Image 6" className="w-[50%] border border-red-500" />
    </div>
</div>

            <Banner/>
            <Footer />
        </div>
    )
}

export { Machines }
