import Image from "next/image"
import Link from "next/link"

const Paralax = () => {
    return(
        <section >
            <div className="bg-[url('/banner-02.jpg')] w-full  bg-no-repeat bg-center bg-cover lg:bg-fixed ">
                <div className="flex flex-col gap-4  p-10 lg:p-40 justify-center">
                    <h2 className="text-slate-700 font-semibold text-3xl">Hurry Up!</h2>
                    <h3 className="text-slate-700 font-bold text-4xl">Deal of the Day!</h3>
                    <h5 className="text-slate-700 font-semibold">Buy This T-shirt At 20% Discount, Use Code Off20</h5>
                    <Link href="/" className="text-white bg-red-500 px-8 py-2 rounded w-[180px] text-center hover:bg-red-600">SHOP NOW</Link>
                </div>
            </div>
        </section>
    )
}

export default Paralax