import React from 'react'
import Link from 'next/link';
import img from '../public/bg-home.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Homeview() {
  return (
    <div id="home" className='w-screen h-[700px] flex'>
    <div className="bg-[url('../public/bg-home.jpg')] bg-cover flex-grow h-[90%] flex items-center rounded-r-[70px]">
      <div className='w-[1100px] mx-auto'>
        <div className='md:w-[500px] px-4 md:px-auto w-screen flex flex-wrap'>
          <p className='home-view-claim'>Rekrutacje</p>
          <p className='home-view-claim'>Praca tymczasowa</p>
          <p className='home-view-claim'>Outsourcing personalny</p>
          <p className='home-view-claim'>Kadry</p>
          <p className='home-view-claim'>Doradztwo persnalone</p>
          <p className='home-view-claim'>Szkolenia BHP</p>
        </div>
        <button className='border mx-5 md:mx-5 bg-slate-800 text-white text-2xl mt-5 px-5 py-2 rounded-md cursor pointer duration-300 hover:text-white hover:bg-green-400'>
          <a href="#contact">Zapytaj o ofertę</a></button>
      </div>
    </div>
    <a href="#about-us">
    <div className='h-[90%] w-[80px] flex duration-300 flex-col items-center justify-end py-16 pr-3 cursor-pointer hover:text-green-400 hover:py-12'>
        <div className='flex rotate-90 w-[180px] items-center'>
          <p className='hidden xl:block text-xl w-[180px] font-semibold'>Czytam dalej</p>
          <ArrowForwardIcon className='w-12 h-12 hidden xl:block' />
        </div>
      </div>
      </a>
    </div>
  )
}
