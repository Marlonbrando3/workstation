import React from 'react'
import { useRef } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function Cmainview() {

    const name = useRef();
    const number = useRef();
    const email = useRef();
    const city = useRef();
    const salary = useRef();
    const message = useRef();
    const aprovalwindow = useRef();

    const handleSendForm = (e) => {
        e.preventDefault();

        fetch('/api/sendFormCandidate', {
            method:"POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
                body: JSON.stringify({
                    name: name.current.value,
                    number: number.current.value,
                    email: email.current.value,
                    city: city.current.value,
                    salary: salary.current.value,
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
        <Head>
        <title>Praca w woj.opolskim</title>
        <meta name="description" content="Szukasz pracy w Namysłowie, Kluczborku, Oławie, Kępnie lub innych pobliskich miastach? Jesteś pracodawcą który szuka pracowników do swojej firmy? Zostaw nam kontakt." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='pt-40 xl:w-[1140px] mx-auto px-10'>
            <div className='text-xl mb-4'>
                Jeśli interesuje Cię praca w Namysłowie, Kluczborku, Brzegu, Olesnicy, Kępnie, Oławie, Wołczynie i okolicach oraz częściowo może bezpłatnie zarejestrować się w naszej bazie kandydatów.
                W przypadku zainteresowania pracodawców współpracujących z naszą Agencją zatrudnieniem kandydatów takich jak Ty - powiadomimy Cię o tym mailowo lub telefonicznie.
                Uzupełnij podstawowe dane kontaktowe, w odpowiedzi na Twoje zgłoszenie - skontaktujemy się z Tobą mailowo aby zapytać o szczegółowe informacje.
            </div>
            <span className='text-xl font-bold text-white py-2 bg-green-400 px-2 leading-8'>Aby dodać się do naszej bazy - uzupełnij formularz poniżej:</span>
            <form onSubmit={handleSendForm} className='flex flex-col w-full md:w-10/12 lg:w-8/12 mx-auto bg-slate-800 mt-20 p-8 rounded-md relative shadow-xl'>
                <div ref={aprovalwindow} className='absolute w-0 h-full bg-green-400 top-0 left-0 duration-300 overflow-hidden'>
                    <p className='absolute top-32 font-bold text-2xl text-center text-white  drop-shadow-md'>Wiadomość wysłana, wkrótce się z Tobą skontaktujemy</p>
                    <div className='absolute top-48 w-[160px] h-full left-0 right-0 mx-auto'><FiCheckCircle className='w-[160px] h-[160px] text-white drop-shadow-md'/></div>
                </div>
                <input required ref={name} className="form-input" placeholder="Twoje imię i nazwisko" type="text" name="name"></input>
                <input required ref={number} className="form-input" placeholder="Numer telefonu do kontaktu" type="number" name="phone"></input>
                <input required ref={email} className="form-input" placeholder="Adres email do kontaktu" type="mail" name="email"></input>
                <input required ref={salary} className="form-input" placeholder="Minimalne wynagrodzenie netto (na rękę)." type="number" name="phone"></input>
                <textarea required ref={city} className="textarea" placeholder="Napisz nam w jakich miejscowościach szukasz pracy." type="mail" name="email"></textarea>
                <textarea required ref={message} className='textarea' type="text" placeholder="Napisz na czym Ci szczególnie zależy."></textarea>
                <div className='flex mb-6'>
                    <input required  id="rodo" type='checkbox' className='cursor-pointer w-12 h-6'></input>
                    <div className='text-white text-[14px] pl-2 leading-4'>Wyrażam zgodę na zasady polityki prywatności oraz przetwarzanie danych przez firmę Onesta Group Sp. z o.o. z siedzibą We Wrocławiu </div>
                </div>
                <button className='bg-green-400 border border-green-400 w-[240px] mx-auto py-2 duration-150 rounded-md font-semibold text-white hover:bg-slate-800 hover:border-white'>Wyślij wiadomość</button>
            </form>
        </div>
    </>
  )
}
