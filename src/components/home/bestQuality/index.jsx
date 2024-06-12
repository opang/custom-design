import Image from "next/image"


export default function BestQuality(){
    return(
        <div>
            <section className="flex items-center justify-center bg-[whitesmoke]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-14 lg:grid-cols-4 max-w-[1340px]">
                    <div className="flex flex-col items-center">
                        <div className="">
                        <Image src="/shipping.png" width={60} height={60} alt="image" className="w-auto h-auto"/>
                        </div>
                        <h5 className="font-semibold text-slate-700 text-xl py-5">Worldwide Shipping</h5>
                        <p className="text-slate-700 text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="">
                        <Image src="/badge.png" width={60} height={60} alt="image" className="w-auto h-auto"/>
                        </div>
                        <h5 className="font-semibold text-slate-700 text-xl py-5">Best Quality</h5>
                        <p className="text-slate-700 text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="">
                        <Image src="/discount.png" width={60} height={60} alt="image" className="w-auto h-auto"/>
                        </div>
                        <h5 className="font-semibold text-slate-700 text-xl py-5">Best Offers</h5>
                        <p className="text-slate-700 text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="">
                        <Image src="/lock.png" width={60} height={60} alt="image" className="w-auto h-auto"/>
                        </div>
                        <h5 className="font-semibold text-slate-700 text-xl py-5">Secure Payments</h5>
                        <p className="text-slate-700 text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                
                </div>
        
            </section>
        </div>
    )
}