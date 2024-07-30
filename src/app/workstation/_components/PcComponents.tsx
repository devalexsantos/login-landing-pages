import Image from 'next/image'
import { pcComponentsData } from '../_mocks/pc-components'
import { CallToActionButton } from './CallToActionButton'

export function PcComponents() {
  return (
    <section className="container max-w-6xl m-auto flex flex-col  gap-8 justify-center items-center min-h-screen mt-20">
      <h2 className="font-bold text-3xl">Componentes de última geração</h2>
      <div className="flex gap-3 items-center flex-wrap justify-center mt-10">
        {pcComponentsData.map((component, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center items-center bg-black p-4 rounded-2xl"
          >
            <Image
              src={component.url}
              alt={component.title}
              width={200}
              height={200}
            />
            <div className="flex flex-col gap-1 text-center">
              <span className="font-bold">{component.title}</span>
              <span className="font-thin">{component.subtitle}</span>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col gap-4 justify-center items-center bg-black p-4 rounded-2xl">
          <Image
            src="/assets/workstation/pc-components/processador-ryzen-7.png"
            alt="Processador"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-1 text-center">
            <span className="font-bold">RYZEN 7</span>
            <span className="font-thin">5700X</span>
          </div>
        </div> */}
      </div>
      <span className="max-w-xl text-center">
        * Imagens meramente ilustrativas. As marcas dos componentes podem variar
        de acordo com a disponibilidade em estoque.
      </span>
      <CallToActionButton>Solicitar Orçamento</CallToActionButton>
    </section>
  )
}
