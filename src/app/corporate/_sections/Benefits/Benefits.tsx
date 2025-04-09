import Image from 'next/image'
import ButtonCallToAction from '../../_components/ButtonCallToAction'
import ProductsCarousel from '../Products/components/ProductsCarousel'

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
        <h2 className="text-xl text-center max-w-[600px] font-bold mt-4">
          Conheça alguns dos produtos do portfólio Login para empresas:
        </h2>
        <ProductsCarousel />
        <h2 className="text-3xl text-center mt-10">
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
        <ButtonCallToAction />
      </div>
    </section>
  )
}
