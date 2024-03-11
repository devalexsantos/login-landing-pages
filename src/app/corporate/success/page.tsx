import {
  ArrowLeftCircle,
  Link as LinkLucid,
  MailPlus,
  PhoneOutgoing,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="bg-hero-pattern bg-cover py-8]">
      <div className="container flex flex-col gap-4 justify-center items-center min-h-[100vh]">
        <Image
          src="/assets/logo-login.png"
          alt="logo"
          width={270}
          height={133}
        />
        <h1 className="text-[#ececec] text-4xl font-bold text-center">
          Recebemos o seu contato!
        </h1>
        <p className="text-[#ececec] text-2xl max-w-[400px] text-center">
          Logo mais um consultor irá entrar em contato você!
        </p>
        <p className="text-xl max-w-[400px] text-center text-[#FFB930] font-light">
          Caso não queira aguardar, você pode entrar em contato através dos
          canais abaixo:
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=557140204075"
            target="_blank"
            className="flex items-center justify-between gap-4 bg-white rounded-xl shadow-xl w-full p-3 md:w-[300px] "
            rel="noreferrer"
          >
            <Image
              src="/assets/icons/whatsapp.svg"
              alt="whatsapp"
              width={35}
              height={35}
            />
            <div className="flex flex-col items-center text-[#0B4E83]">
              <span className="text-xs">WhatsApp:</span>
              <span className="text-xl font-bold">(71)4020-4075</span>
            </div>
            <LinkLucid size={25} color="#0B4E83" />
          </a>

          <a
            href="mailto:site@login.com.br"
            className="flex items-center justify-between gap-4 bg-white rounded-xl shadow-xl w-full p-3 md:w-[300px] "
          >
            <MailPlus size={35} color="#0B4E83" />
            <div className="flex flex-col items-center text-[#0B4E83]">
              <span className="text-xs">E-mail:</span>
              <span className="text-xl font-bold">site@login.com.br</span>
            </div>
            <LinkLucid size={25} color="#0B4E83" />
          </a>

          <a
            href="tel:557121063700"
            className="flex items-center justify-between gap-4 bg-white rounded-xl shadow-xl w-full p-3 md:w-[300px] "
          >
            <PhoneOutgoing size={35} color="#0B4E83" />
            <div className="flex flex-col items-center text-[#0B4E83]">
              <span className="text-xs">Televendas:</span>
              <span className="text-xl font-bold">(71) 2106-3700</span>
            </div>
            <LinkLucid size={25} color="#0B4E83" />
          </a>
        </div>
        <Link
          href="/corporate"
          className="flex items-center gap-3 text-white mt-8"
        >
          <ArrowLeftCircle size={20} /> Voltar ao site
        </Link>
      </div>
    </section>
  )
}
