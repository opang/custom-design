import Image from "next/image"


export default function DesignSec(){
    
    return(
        <div>
            <section className=" bg-white mt-20 ">
                <div className="flex flex-col   justify-center gap-8 items-center mb-20 md:flex-row">
                    
                    <div className="text-center shadow    p-3">
                        <Image src="/image-01.jpg" width={300} height={300} alt="image" priority={false} loading="lazy" className=" rounded md:w-[350px]"/>
                        <p className="mt-5 text-slate-700">Most Loved Designs</p>
                        <h1 className="text-slate-700 font-bold text-md">Customize Your T-Shirts</h1>
                    </div>
                    <div className="text-center shadow   p-3">
                        <p className=" text-slate-700">Design of the Week</p>
                        <h1 className="text-slate-700 font-bold text-md mb-5">Rubber Print Your T-Shirt</h1>
                        <Image src="/image-03.jpg" width={300} height={300} alt="image" loading="lazy" className=" md:w-[350px] rounded"/>
                    </div>
                    <div className="text-center shadow  p-3">
                        <Image src="/image-02.jpg" width={300} height={300} alt="image" loading="lazy" className=" md:w-[350px] rounded"/>
                        <p className="mt-5 text-slate-700">New T-shirt Edition</p>
                        <h1 className="text-slate-700 font-bold text-md" >Customize Plain Colors</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}