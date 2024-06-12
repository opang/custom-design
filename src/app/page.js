import Link from "next/link";
import Image from "next/image";
import DesignSec from "@/components/home/designOfTheWeek";
import BestQuality from "@/components/home/bestQuality";
import FeaturedProd from "@/components/home/featuredProducts";
import Testimoni from "@/components/home/testimoni";
import Team from "@/components/home/team";

export default function Home() {
  return (
    <>
      <section className="pt-10" style={{backgroundColor: "whitesmoke"}}>
        <div className=" flex flex-col justify-center items-center gap-10 md:flex-row max-w-[1340px] m-auto">
          <div className=" flex flex-col justify-center p-5 basis-1/2">
            <div className="w-[55px] h-[3px] bg-red-500 mb-5"></div>
            <h5 className="font-semibold text-slate-700 mb-5">Best Quality Products</h5>
            <h1 className="font-bold text-slate-700 text-[30px] md:text-[60px]  md:leading-[60px] mb-5">We Print What<br/> You Want!</h1>
            <p className=" text-slate-700 mb-8">Our designs can be used across multiple printed products, which makes it easier for you to create consistent, professional marketing.</p>
            <Link href="/" className="text-white bg-red-500 px-8 py-2 rounded w-[180px] text-center hover:bg-red-600">GET STARTED</Link>
            
          </div>
          <div className="p-5 ">
            <Image src="/image.jpg" width={300} height={300} alt="image" className="rounded-lg shadow-lg mb-8 w-auto h-auto md:w-[350px] md:h-[auto]" priority={true} />
          </div>
        </div>
      </section>
      <DesignSec />
      <BestQuality/>
      <FeaturedProd/>
      <Testimoni/>
      <Team/>
    </>
  );
}
