"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbarr(){
   const pathName = usePathname()
    return(
        <>
            <Navbar fluid className="bg-[whitesmoke]">
                <Navbar.Brand as={Link} href="/" className="p-5 ">
                    <Image src="/print-1.svg" width={110} height={110} alt="img"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="p-5 text-slate-800">
                    <Navbar.Link as={Link} href="/" className="bg-[whitesmoke]">
                        <p className={`link ${pathName === '/' ? 'text-red-500 text-[16px] font-semibold' : 'text-[16px] font-semibold hover:text-red-500'}`}>HOME</p>
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/about"  className="bg-[whitesmoke]">
                        <p className={`link ${pathName === '/about' ? 'text-red-500 text-[16px] font-semibold' : 'text-[16px] font-semibold hover:text-red-500'}`}>ABOUT</p>
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/team"  className="bg-[whitesmoke]">
                        <p className={`link ${pathName === '/team' ? 'text-red-500 text-[16px] font-semibold' : 'text-[16px] font-semibold hover:text-red-500'}`}>OUR TEAM</p>
                    </Navbar.Link>
                   

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}