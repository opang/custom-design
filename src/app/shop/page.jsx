import Image from "next/image"

export default function Shop(){
    return(
        <section className="flex flex-col lg:flex-row  mt-20">
            <div className="lg:border-r-[1px] border-slate-200 basis-[80%]">
                <div className="pl-5">
                    <p className="text-slate-500 text-sm pb-4 ">Home / Shop</p>
                    <h1 className="text-3xl text-red-500 font-semibold md:text-5xl pb-16">Shop</h1>
                </div>
                <div className="ml-5 pr-5 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 place-items-center ">
                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/tshirt4.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Tshirt</p>
                        <p className="text-slate-700  font-semibold">Printed Tshirt Coffee Black Color</p>
                        <p className="text-slate-600 text-sm py-2">$25.00</p>
                    </div>

                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/mug-blue.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Mugs</p>
                        <p className="text-slate-700  font-semibold">Black Printed Coffee Mug</p>
                        <p className="text-slate-600 text-sm py-2">$15.00</p>
                    </div>

                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/tshirt2.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Tshirt</p>
                        <p className="text-slate-700  font-semibold">Printed Brown Tshirt</p>
                        <p className="text-slate-600 text-sm py-2">$25.00</p>
                    </div>

                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/mug-coffee.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Tshirt</p>
                        <p className="text-slate-700  font-semibold">Father’s Day Coffee Mug</p>
                        <p className="text-slate-600 text-sm py-2">$25.00</p>
                    </div>

                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/tshirt6.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Tshirt</p>
                        <p className="text-slate-700  font-semibold">Typography Teal Printed Tshirt</p>
                        <p className="text-slate-600 text-sm py-2">$25.00</p>
                    </div>

                    <div className="shadow w-[250px] min-h-[380px] p-3">
                        <Image src="/mug-yellow.jpg" width={250} height={250} alt="img" className="rounded"/>
                        <p className="text-slate-600 text-sm py-3">Mugs</p>
                        <p className="text-slate-700  font-semibold">Personalised Mug</p>
                        <p className="text-slate-600 text-sm py-2">$25.00</p>
                    </div>
                  
                </div>
            </div>

            <div className="ml-5 mr-5">
                <h1 className="text-slate-700 text-2xl font-semibold pb-5">Categories</h1>
                <div className="flex justify-between pb-5">
                    <p className="text-red-500 ">Mugs</p>
                    <p>(5)</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-red-500 ">Tshirts</p>
                    <p>(5)</p>
                </div>
                <p className="text-slate-700 text-2xl font-semibold mt-8">Hottest Deals</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                    <div className="w-[90px]">
                        <Image src="/tshirt4.jpg" width={90} height={90} alt="img" />
                        <p className="text-slate-700 text-xs font-semibold py-3">Printed Brown Tshirt</p>
                        <p className="text-slate-700 text-xs">$25.00</p>
                    </div>
                    <div className="w-[90px]">
                        <Image src="/mug-blue.jpg" width={90} height={90} alt="img" />
                        <p className="text-slate-700 text-xs font-semibold py-3">Black Printed Coffee Mug</p>
                        <p className="text-slate-700 text-xs">$25.00</p>
                    </div>

                    <div className="w-[90px]">
                        <Image src="/tshirt4.jpg" width={90} height={90} alt="img" />
                        <p className="text-slate-700 text-xs font-semibold py-3">Printed Brown Tshirt</p>
                        <p className="text-slate-700 text-xs">$25.00</p>
                    </div>

                    <div className="w-[90px]">
                        <Image src="/tshirt7.jpg" width={90} height={90} alt="img" />
                        <p className="text-slate-700 text-xs font-semibold py-3">Printed Green Tshirt</p>
                        <p className="text-slate-700 text-xs">$25.00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}