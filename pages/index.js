import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Homeview from '@/components/Homeview'
import Header from '@/components/Header'
import Aboutus from '@/components/Aboutus'
import Ouroffer from '@/components/Ouroffer'
import Contact from '@/components/Contact' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-881VQLZGN5"></Script>
        <Script id="google-analitycs">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-881VQLZGN5');`}
        </Script>
      <Head>
        <title>Agencja Pośrednictwa Pracy - Work Station</title>
        <meta name="description" content="Szukasz pracy w Namysłowie, Kluczborku, Oławie, Kępnie lub innych pobliskich miastach? Jesteś pracodawcą który szuka pracowników do swojej firmy? Zostaw nam kontakt." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative'>
        <Header />
        <Homeview />
        <Aboutus />
        {/* <Ouroffer /> */}
        <Contact />
      </main>
    </>
  )
}
