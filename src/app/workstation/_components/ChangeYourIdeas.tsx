import Image from 'next/image'
import { CallToActionButton } from './CallToActionButton'

export function ChangeYourIdeas() {
  const iconsUrl = [
    '/assets/workstation/icons/adobe-illustrator.svg',
    '/assets/workstation/icons/adobe-after-effects.svg',
    '/assets/workstation/icons/adobe-photoshop.svg',
    '/assets/workstation/icons/cinema-4d.png',
    '/assets/workstation/icons/davinci-resolve.png',
  ]

  return (
    <section className="container m-auto flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/assets/workstation/change-your-ideas-login-workstation.png"
        width={990}
        height={555}
        alt="Change Your Ideas"
      />
      <div className="flex flex-col gap-6 mt-[-100px] z-10 max-w-[900px]">
        <h2 className="font-bold text-3xl">
          Transforme suas ideias em conteúdos extraordinários
        </h2>
        <p className="text-2xl font-thin">
          Alta performance em edição de imagens em alta resolução, produção
          multimídia de peças publicitarias, web design, UX e UI, Edição de
          vídeo e animação garantindo eficiência e qualidade em seus projetos.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-between items-end max-w-[900px] mt-10 gap-8">
        <div className="flex flex-col gap-3">
          <span>Ideal para:</span>
          <div className="flex items-center gap-2">
            {iconsUrl.map((url, index) => (
              <Image
                key={index}
                src={url}
                width={50}
                height={50}
                alt="Programms to Workstation"
              />
            ))}
          </div>
        </div>
        <div>
          <CallToActionButton>Solicitar Orçamento</CallToActionButton>
        </div>
      </div>
    </section>
  )
}
