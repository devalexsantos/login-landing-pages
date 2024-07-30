import Image from 'next/image'
import { CallToActionButton } from './CallToActionButton'

export function Benefits() {
  const benefits = [
    'Edição de vídeo',
    'Animações 2D',
    'Modelagem e animação 3D',
    'Edição profissional de imagem em alta resolução',
    'Produção multimídia de peças publicitárias',
    'Web design, UX e UI',
    'Edição de vídeos e animações',
    'Design de marcas e identidade visual.',
  ]

  return (
    <section className="container max-w-6xl m-auto flex flex-col md:flex-row gap-20 justify-center items-center min-h-screen mt-10">
      <Image
        src="/assets/workstation/benefits-workstation.png"
        alt="Benefícios"
        width={512}
        height={488}
      />
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-3xl">
          Melhor custo-benefício da categoria de alta performance.
        </h2>
        <ul className="list-disc">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <CallToActionButton>Solicitar Orçamento</CallToActionButton>
      </div>
    </section>
  )
}
