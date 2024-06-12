import Image from "next/image";


const Testimoni = () => {
    return(
        <div>
            <section className="mt-20">
                <h1 className="text-center text-3xl text-slate-700 font-semibold">Our Happy Clients!</h1>
                <div className="w-[55px] h-[3px] bg-red-500 m-auto my-5 mb-14"></div>
                <div className=" mb-[100px]  grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 shadow rounded-xl">
                        <p className="text-slate-700">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</p>
                        <div className="flex gap-2 py-5">
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/client02.jpg" width={60} height={60} alt="img"/>
                            <p className="text-slate-700 font-semibold">Diana Burnwood</p>
                        </div>
                    </div>

                    <div className="p-8 shadow rounded-xl">
                        <p className="text-slate-700">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</p>
                        <div className="flex gap-2 py-5">
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/client2.png" width={60} height={60} alt="img"/>
                            <p className="text-slate-700 font-semibold">Jessica Foxx​</p>
                        </div>
                    </div>

                    <div className="p-8 shadow rounded-xl">
                        <p className="text-slate-700">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</p>
                        <div className="flex gap-2 py-5">
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                            <Image src="/star-solid.svg" width={17} height={17} alt="star"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/client3.png" width={60} height={60} alt="img"/>
                            <p className="text-slate-700 font-semibold">Lily Granger</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Testimoni