import Image from "next/image"
import Link from "next/link"


export default function FeaturedProd(){
    return(
        <div>
            <section className="mb-[120px]">
                <h1 className="text-center mt-14 text-3xl text-slate-700 font-bold">Our Featured Products</h1>
                <div className="w-[55px] h-[3px] bg-red-500 m-auto my-5"></div>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4  px-8">
                    <div className="py-5">
                        <div className="">
                        <Link href="/">
                            <Image src="/mug-blue.jpg" width={300} height={300} alt="img"/>
                        </Link>
                        </div>
                        <p className="text-slate-500 text-sm py-2">mugs</p>
                        <p className="text-slate-700 text-[13px] md:text-base lg:text-lg">Black Printed Coffee Mug</p>
                        <p className="text-slate-700 text-sm">$15.00</p>
                    </div>

                    <div className="py-5">
                        <div className="">
                        <Link href="/">
                            <Image src="/mug-coffee.jpg" width={300} height={300} alt="img"/>
                        </Link>
                        </div>
                        <p className="text-slate-500 text-sm py-2">mugs</p>
                        <p className="text-slate-700 text-[13px] md:text-base lg:text-lg">Father’s Day Coffee Mug</p>
                        <p className="text-slate-700 text-sm">$15.00</p>
                    </div>

                    <div className="py-5">
                        <div className="">
                        <Link href="/">
                            <Image src="/mug-yellow.jpg" width={300} height={300} alt="img"/>
                        </Link>
                        </div>
                        <p className="text-slate-500 text-sm py-2">mugs</p>
                        <p className="text-slate-700 text-[13px] md:text-base lg:text-lg">Personalised Mug</p>
                        <p className="text-slate-700 text-sm">$15.00</p>
                    </div>

                    <div className="py-5">
                        <div className="">
                        <Link href="/">
                            <Image src="/mug-blue.jpg" width={300} height={300} alt="img"/>
                        </Link>
                        </div>
                        <p className="text-slate-500 text-sm py-2">mugs</p>
                        <p className="text-slate-700 text-[13px] md:text-base lg:text-lg">Valentine’s Day Special Mug</p>
                        <p className="text-slate-700 text-sm">$15.00</p>
                    </div>
                </div>
            </section>
        </div>
    )
}