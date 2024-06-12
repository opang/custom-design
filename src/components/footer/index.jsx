import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return(
        <footer className="bg-slate-600">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 p-14">
                <div>
                   <Image src="/print-favicon.png" width={70} height={70} alt="fav"/> 
                   <h4 className="text-white text-lg py-5">Custom Print Store</h4>
                   <div className="flex gap-5 md:mb-5">
                        <Image src="/instagram.svg" width={15} height={15} className="cursor-pointer"  alt="ig"/>
                        <Image src="/twitter.svg" width={15} height={15} className="cursor-pointer" alt="tiwt"/>
                        <Image src="/linkedin.svg" width={15} height={15} className="cursor-pointer" alt="link"/>
                        <Image src="/square-facebook.svg" width={15} height={15} className="cursor-pointer" alt="fb"/>
                   </div>
                </div>
                <div className="text-white">
                    <h5 className="font-semibold text-lg pb-5">Get in Touch with Us for the Best Quality Custom Prints & Supplies.</h5>
                    <p className="text-sm">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                </div>
                <div className="text-white">
                    <h5 className="font-semibold text-lg pb-5">Quick Links</h5>
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="hover:text-red-500 text-sm">Know More About Us</Link>
                        <Link href="/" className="hover:text-red-500 text-sm">Visit Store</Link>
                        <Link href="/" className="hover:text-red-500 text-sm">Let’s Connect</Link>
                    </div>
                </div>
                <div className="text-white">
                    <h5 className="font-semibold text-lg pb-5">Important Links</h5>
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="hover:text-red-500 text-sm">Privacy Policy</Link>
                        <Link href="/" className="hover:text-red-500 text-sm">Shipping Details</Link>
                        <Link href="/" className="hover:text-red-500 text-sm">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="text-slate-300 text-sm flex flex-col items-center gap-3 md:flex-row md:justify-between p-8">
                <p>Copyright © 2024 | Custom Printing</p>
                <p>Powered By Custom Printing</p>
            </div>
        </footer>
    )
}

export default Footer