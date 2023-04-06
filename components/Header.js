import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { HiMenuAlt1 } from 'react-icons/hi'

export default function Header() {

    const menu = useRef();
    const OpenBurger = useRef();
    const ClosedBurger = useRef();

    const showMobileMenu = () => {

        ClosedBurger.current.style.display = "block"
        OpenBurger.current.style.display = "none"
        menu.current.style.right = "0px"
    }

    const hideMobileMenu = () => {
        ClosedBurger.current.style.display = "none"
        OpenBurger.current.style.display = "block"
        menu.current.style.right = "-150vw"
    }

    const handleHideMenu = (e) => {
        if(e.target.offsetParent.style.right){
            ClosedBurger.current.style.display = "none"
            OpenBurger.current.style.display = "block"
            menu.current.style.right = "-150vw"
        }
    }

  return (
    <div className='w-screen h-[80px] bg-white fixed shadow-md z-10'>
        <div className='xl:w-[1140px] w-screen h-full  mx-auto flex justify-between items-center'>
            <a href="#" className='h-full w-64 flex items-center ml-3 md:mr-0'>
                    <Image 
                        src="/work-station-logo-blue-centered.png"
                        width={120}
                        height={120}
                    />
            </a>
            <div ref={menu} className='xl:h-full xl:w-[800px] duration-300 xl:-mr-0 right-[-150vw] xl:static absolute xl:top-auto top-20 h-screen w-screen bg-white'>
                <nav className='h-full'>
                    <ul className='flex items-center justify-center h-full flex-col xl:flex-row -mt-10 md:my-0 md:-mr-20'>
                        <li className='li-item active'><a href="#home" name="home" onClick={handleHideMenu}>Strona główna</a></li>
                        <li className='li-item'><a href="#about-us" onClick={handleHideMenu}>O nas</a></li>
                        <li className='li-item'><a href="#about-us" onClick={handleHideMenu}>W czym pomagamy</a></li>
                        <li className='li-item'><a href="#contact" onClick={handleHideMenu}>Kontakt</a></li>
                        <li className='li-item bg-red-500 text-white'><Link href="/candidates" onClick={handleHideMenu}>Dla kandytatów</Link></li>
                    </ul>
                </nav>
            </div>
            <div ref={OpenBurger} onClick={showMobileMenu} className='cursor-pointer mr-3 md:mr-12 w-12 h-12 visible xl:hidden'>
                <HiMenu onClick={showMobileMenu} className='w-[100%] h-[100%] block'/>
            </div>
            <div ref={ClosedBurger} onClick={hideMobileMenu} className='cursor-pointer mr-3 md:mr-12 w-12 h-12 hidden xl:hidden'>
                <HiMenuAlt1 onClick={showMobileMenu} className='w-[100%] h-[100%] block'/>
            </div>
        </div>
    </div>
  )
}
