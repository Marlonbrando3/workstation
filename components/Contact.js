// import { data } from 'autoprefixer';
import React from 'react'
import { useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'


export default function Contact() {

    const name = useRef();
    const number = useRef();
    const email = useRef();
    const message = useRef();
    const aprovalwindow = useRef();

    const handleSendForm = (e) => {
        e.preventDefault();

        fetch('/api/sendForm', {
            method:"POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
                body: JSON.stringify({
                    name: name.current.value,
                    number: number.current.value,
                    email: email.current.value,
                    message: message.current.value,
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.info === "sendet"){
                    console.log("wysłano maila")
                    aprovalwindow.current.style.width = "100%"

                    setTimeout(() => {
                        aprovalwindow.current.style.width = "0px"

                    },5000)
                } else {
                    console.log("niewysłano ")
                }
            })



    }

  return (
    <>
    <div id="contact" className='mt-20'></div>
    <div className='flex flex-col h-[400px] lg:w-[1140px] mx-auto'>
        <div className='mb-8 w-full flex justify-center'>
            <span className='middle-title text-center'>Skontaktuj się z nami</span>
        </div>
         <div className='w-full flex flex-col lg:flex-row px-4 md:p-0'>
            <form onSubmit={handleSendForm} className='flex flex-col lg:w-1/2 w-full md:mx-10 md:w-10/12 m-auto bg-slate-800 p-8 rounded-md relative shadow-xl z-0'>
                <div ref={aprovalwindow} className='absolute w-0 h-full bg-green-400 top-0 left-0 duration-300 overflow-hidden'>
                    <p className='absolute top-32 font-bold text-2xl text-center text-white  drop-shadow-md'>Wiadomość wysłana, wkrótce się z Tobą skontaktujemy</p>
                    <div className='absolute top-48 w-[160px] h-full left-0 right-0 mx-auto'><FiCheckCircle className='w-[160px] h-[160px] text-white drop-shadow-md'/></div>
                </div>
                <input required ref={name} className="form-input" placeholder="Imię i nazwisko / nazwa firmy" type="text" name="name"></input>
                <input required ref={number} className="form-input" placeholder="Numer telefonu do kontaktu" type="number" name="phone"></input>
                <input required ref={email} className="form-input" placeholder="Adres emial do kontaktu" type="mail" name="email"></input>
                <textarea required ref={message} className='textarea' type="text" placeholder="Napisz nam jak możemy Ci pomóc np. jakiego rodzaju pracowników potrzebujesz i ilu."></textarea>
                <div className='flex mb-6'>
                    <input required  id="rodo" type='checkbox' className='cursor-pointer w-12 h-6'></input>
                    <div className='text-white text-[14px] pl-2 leading-4'>Wyrażam zgodę na zasady polityki prywatności oraz przetwarzanie danych przez firmę Onesta Group Sp. z o.o. z siedzibą We Wrocławiu </div>
                </div>
                <button className='bg-green-400 border border-green-400 w-[240px] mx-auto py-2 duration-150 rounded-md font-semibold text-white hover:bg-slate-800 hover:border-white'>Wyślij wiadomość</button>
            </form>
            <div className='md:w-1/2 '>
                <div className='md:px-16 px-4 w-full h-full mt-12'>
                    <p className='font-bold mb-2'>Agencja Pośrednictwa pracy - WorkStation</p>
                    <p><span className='font-semibold'>Mobilne biuro: </span> Namysłów</p>
                    <p><span className='font-semibold'>Biuro Opole: </span>plac Połsudskiego 14/3</p>
                    <p className='mt-12'><span className='font-semibold'>Telefon kontaktowy: </span>+48 669 75 25 25</p>
                    <p><span className='font-semibold'>Email kontaktowy: </span>biuro@work-station.pl</p>
                    <p className=' mt-10 font-bold'>Dane rejestrowe firmy</p>
                    <p>Onesta Group Sp. z o.o.</p>
                    <p>54-138 Wrocław</p>
                    <p>ul. Wolbromska 18/1b</p>
                </div>
            </div>
         </div>
    </div>
    </>
  )
}
