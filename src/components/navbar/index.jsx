"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";


export default function Navbarr(){
   const pathName = usePathname()
    return(
        <>
            <Navbar fluid style={{backgroundColor:"whitesmoke"}}>
                <Navbar.Brand as={Link} href="/" className="p-5 ">
                    <img src="/print-1.svg" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="p-5 text-slate-800">
                    <Navbar.Link as={Link} href="/" style={{backgroundColor:"whitesmoke"}}>
                        <p className={`link ${pathName === '/' ? 'text-red-500 text-[16px]' : 'text-[16px] hover:text-red-500'}`}>HOME</p>
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/about"  style={{backgroundColor:"whitesmoke"}}>
                        <p className={`link ${pathName === '/about' ? 'text-red-500 text-[16px]' : 'text-[16px] hover:text-red-500'}`}>ABOUT</p>
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/team"  style={{backgroundColor:"whitesmoke"}}>
                        <p className={`link ${pathName === '/team' ? 'text-red-500 text-[16px]' : 'text-[16px] hover:text-red-500'}`}>OUR TEAM</p>
                    </Navbar.Link>
                   

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}