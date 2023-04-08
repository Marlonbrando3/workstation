import React from 'react'
import Image from 'next/image'

export default function Aboutus() {
  return (
    <>
    <div id="about-us" className="absolute top-[600px] md:top-[700px] scroll-smooth"></div>
    <div className='w-full md:mt-20'>
        <div className='xl:w-[1140px] h-full mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 md:w-2/3 w-full h-1/2 px-10 flex flex-col justify-center'>
                <div className='my-4'>
                     <span className='middle-title'>Kim jesteśmy?</span>
                </div>
                <p className='desc-article'>Jesteśmy nową agencja pośrednictwa pracy oraz doradztwa personalnego. Mamy za sobą duże doświadczenie zawodowe w rektureacji, szkoleniu i zarządzaniu pracownikami. Mamy pomysł jak docierać do pracowników, którzy szukają zatrudnienia, rekrutować ich oraz dostarczać kandydatów spełniających oczekiwania. Nasze doświadczenie dowiodło, że empatia, dobry plan i wiedza o firme tj. zrozumienie potrzeb naszych klientów oraz elastyczność to klucz do udanej rekrutacji i niskiej rotacji. </p>
            </div>
            <div className='lg:w-1/2 lg:h-1/2 w-1/3 hidden md:block'>
                <Image className='object-cover w-full h-full'
                    src="/team-about-us.jpeg"
                    width={1000}
                    height={1000}
                />
            </div>
            <div id="where" className='w-full h-24'></div>
            <div className='lg:w-1/2 lg:h-1/2 w-1/3 hidden md:block'>
            <Image className='object-cover w-full h-full'
                    src="/recruitment.jpeg"
                    width={1000}
                    height={1000}
                />
            </div>
            <ul className='lg:w-1/2 md:w-2/3 w-full h-1/2 px-10 flex flex-col justify-center'>
                <div className='my-4'>
                     <span className='middle-title my-4'>W czym pomagamy?</span>
                </div>
                <li className='desc-article list-disc'>nagłośnieniu oferty pracy poprzez portale oraz grupy tematyczne,</li>
                <li className='desc-article list-disc'>przedstawieniu oferty stale rosnącej naszej bazie kandydatów,</li>
                <li className='desc-article list-disc'>rekrutacje pracowników w trakcie której sprawdzimy ich kompetencje i motywacje,</li>
                <li className='desc-article list-disc'>prowadzenie dokumentacji kadrowo-płacowej,</li>
            <p className='desc-article'>W skrócie znajdziemy dla Ciebie odpowiedniego pracownika.</p>
            </ul>
            <div className='w-full h-24'></div>
            <div className='lg:w-1/2 md:w-2/3 w-full h-1/2 px-10 flex flex-col justify-center'>
                <div className='my-4'>
                     <span className='middle-title'>Gdzie działamy?</span>
                </div>
                <p className='desc-article'>Jako <strong>Osoby poszukujące pracy w Namysłowie, Kluczborku, Brzegu, Oławie, Oleśnicy, Kępnie lub Wołczynie</strong> wraz z oklicami tych miast mogą zarejestrować się naszej bazie kandydatów. Jako agencja pracy również działamy na tym regionie i jesteśmy otwarci na nowe wspołprace z firmami, które zapraszamy do kontaktu.</p>
            </div>
            <div className='lg:w-1/2 lg:h-1/2 w-1/3 hidden md:block'>
                <Image className='object-cover w-full h-full'
                    src="/agencja-pracy-namyslow.jpeg"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </div>
    </>
  )
}
