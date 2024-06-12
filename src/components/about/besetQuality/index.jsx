import Accordionn from "../accordion";
import Image from "next/image";
import BestQuality from "@/components/home/bestQuality";

const BestQualityy = () => {
    return(
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-40 px-10">
                <div className="">
                    <h1 className="text-slate-700 text-2xl lg:text-4xl font-semibold">Best Quality Printed T-Shirts & Mugs At Affordable Price!</h1>
                    <div className="grid grid-cols-1 w-[200px] md:grid-cols-2 md:w-[350px] gap-3 py-10">
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Personal Gifts</p>
                        </div>
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Occasional Gifts</p>
                        </div>
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Corporate Gifts</p>
                        </div>
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Couple Tshirt</p>
                        </div>
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Wedding Package</p>
                        </div>
                        <div className="text-slate-700 flex items-center gap-2">
                            <Image src="/gratipay.svg" width={15} height={15} alt="img"/>
                            <p>Corporate Gifts</p>
                        </div>
            
                    </div>
                </div>
                <Accordionn/>
    
            </section>
            <BestQuality/>
        </>
        
    )
}

export default BestQualityy