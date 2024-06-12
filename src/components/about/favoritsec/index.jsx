import Image from "next/image"

const Favorit = () => {
    return(
        <section className="flex flex-col gap-14  lg:flex-row p-10 md:p-16 justify-center items-center max-w-[1330px] m-auto">
            <div className="">
                <h1 className="text-slate-700 font-semibold text-3xl ">We Are Your Favourite, Online Store.</h1>
                <p className="text-slate-700  text-justify pt-8">For more than 20 years, Print has helped small business owners, entrepreneurs and dreamers create custom designs and professional marketing. Our online printing services are intended to help you find custom products you need – business cards, promotional marketing and more – to create a look you love.</p>
            </div>
            
            <div className="grid grid-cols-1 px-8 gap-10 md:grid-cols-2">
                <div className="flex flex-col items-center md:items-start  ">
                    <Image src="/snowflake-regular.svg" width={25} height={25} alt="img" />
                    <h4 className="text-center md:text-start py-4 text-slate-700 font-bold text-lg">Easy Design</h4>
                    <p className="text-center md:text-justify text-slate-700 ">Our online tools make the process as simple and clear as possible, and we’re working to improve your experience all the time.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/hand-regular.svg" width={25} height={25} alt="img"/>
                    <h4 className="text-center md:text-start py-4 text-slate-700 font-bold text-lg">Make It Match</h4>
                    <p className="text-center md:text-justify text-slate-700 ">Our designs can be used across multiple printed products, which makes it easier for you to create consistent, professional marketing.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/codepen.svg" width={25} height={25} alt="img"/>
                    <h4 className="text-center md:text-start py-4 text-slate-700 font-bold text-lg">Easy experience</h4>
                    <p className="text-center md:text-justify text-slate-700 ">We help small business owners quickly and effectively create the products they need to get the job done – with tips, inspiration and experts readily available.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/gg.svg" width={25} height={25} alt="img"/>
                    <h4 className="text-center md:text-start py-4 text-slate-700 font-bold text-lg">Design for everyone</h4>
                    <p className="text-center md:text-justify text-slate-700 ">We offer on-trend designs, intuitive tools, and the support options that enable any small business owner to create expertly designed marketing – even if they’re not a design expert.</p>
                </div>
            </div>
        </section>
    )
}

export default Favorit