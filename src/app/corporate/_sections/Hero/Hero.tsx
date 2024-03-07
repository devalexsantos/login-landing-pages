import Image from 'next/image'
import FormSendPulse from './components/FormSendPulse'

export default function Hero() {
  return (
    <section id="solicitar" className="bg-hero-pattern bg-cover py-8">
      <div className="container m-auto p-8">
        <div className="flex flex-wrap justify-center gap-8 items-center md:items-end">
          <div className="flex flex-col gap-3 justify-center items-center w-full max-w-[600px]">
            <Image
              src="/assets/logo-login.png"
              alt="logo"
              width={210}
              height={133}
            />
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-white">
                Tudo em informática
              </h1>
              <span className="text-white text-2xl font-light text-center">
                para <strong>pequenas</strong> e{' '}
                <strong>médias empresas</strong>
              </span>
            </div>
            <iframe
              className="mt-4"
              width={'100%'}
              height={310}
              src="https://www.youtube.com/embed/DL71CGU-bms?si=FcYWdfWwAsKDkNQc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <FormSendPulse />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a href="#beneficios">
          <Image
            src={'/assets/icons/arrow-down-circle.svg'}
            width={50}
            height={50}
            alt="arrow down circle"
          />
        </a>
      </div>
    </section>
  )
}
