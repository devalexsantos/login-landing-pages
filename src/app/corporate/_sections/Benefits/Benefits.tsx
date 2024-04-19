import Image from 'next/image'
import ButtonCallToAction from '../../_components/ButtonCallToAction'
import { CreditCard, Truck } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: '/assets/icons/atendimento-ao-cliente.png',
      firstLine: 'Atendimento',
      secondLine: 'personalizado',
      size: 80,
    },
    {
      icon: '/assets/icons/precos-especiais.png',
      firstLine: 'Preços',
      secondLine: 'especiais',
      size: 100,
    },
    {
      icon: '/assets/icons/data-limite.png',
      firstLine: 'Prazos',
      secondLine: 'diferenciados',
      size: 70,
    },
    {
      icon: '/assets/icons/entrega-rapida.png',
      firstLine: 'Entrega',
      secondLine: 'expressa',
      size: 90,
    },
  ]

  return (
    <section id="beneficios" className="bg-[#F5F5F5] py-14 text-[#0B4E83]">
      <div className="container m-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl text-center">
          Mais <strong>vantagens</strong> para sua empresa
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-[200px] h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-3"
            >
              <Image
                src={benefit.icon}
                width={benefit.size}
                height={0}
                alt="Atendimento ao cliente"
              />
              <div className="flex flex-col gap-0 items-center mt-2 text-xl">
                <span>{benefit.firstLine}</span>
                <span className="mt-[-5px] font-extrabold">
                  {benefit.secondLine}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full max-w-[400px] flex justify-center bg-[#0B4E83] text-[#FFCA41] rounded-full px-8 py-2 z-10">
            <span className="uppercase italic font-bold text-xl">
              Condições Especiais
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center bg-[#FFCA41] text-[#0B4E83] rounded-xl px-6 pt-10 pb-6 mt-[-25px] w-full max-w-[846px]">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <span className="flex items-center gap-2 font-bold italic text-xl">
                <Truck size={32} />
                FRETE GRÁTIS*
              </span>
              <span className="flex items-center gap-2 font-bold italic text-xl">
                <CreditCard size={32} />
                ATÉ 12X SEM JUROS
              </span>
              <span className="flex items-center gap-2 font-bold italic text-xl">
                <Image
                  src="/assets/icons/pix.svg"
                  width={32}
                  height={32}
                  alt="Pix Logo"
                />
                8% DE DESCONTO NO PIX
              </span>
            </div>
            <p className="text-center text-sm">
              *Pedido mínimo de 5.000,00 (região Nordeste/Sudeste), com exceção
              da linha de ar condicionado. Demais regiões consulte condições.
            </p>
          </div>
        </div>
        <ButtonCallToAction />
      </div>
    </section>
  )
}
