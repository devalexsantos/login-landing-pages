'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarroussel.css'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePrevNextButtons } from '@/app/corporate/_sections/Categories/components/EmblaCarousselArrowButton'
import { CallToActionButton } from './CallToActionButton'

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resetOrStop: any =
      autoplay.options.active === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick,
  )

  const imagesSlide = [
    '/assets/fotos-loja/foto-fachada-login-1.png',
    '/assets/fotos-loja/foto-fachada-login-2.png',
    '/assets/fotos-loja/foto-fachada-login-3.png',
    '/assets/fotos-loja/foto-fachada-login-4.png',
    '/assets/fotos-loja/foto-fachada-login-5.png',
    '/assets/fotos-loja/foto-fachada-login-6.png',
  ]

  return (
    <section id="about" className="flex flex-col">
      <div className="container m-auto flex flex-col gap-8 md:flex-row md:gap-4 items-center justify-center">
        <div className="flex items-center">
          <button className="embla__prev" onClick={onPrevButtonClick}>
            <ChevronLeft size={32} />
          </button>
          <div className="embla max-w-[550px]" ref={emblaRef}>
            <div className="embla__container">
              {imagesSlide.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide px-4 flex flex-col items-center justify-center"
                >
                  <Image
                    src={image}
                    width={500}
                    height={533}
                    alt="Fachada Login"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="embla__next" onClick={onNextButtonClick}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="w-full flex flex-col gap-3 max-w-[500px]">
          <h2 className="font-bold text-4xl">Sobre a Login</h2>
          <p className="">
            Bem-vindo à Login! Somos um grupo com mais de 30 anos de experiência
            na fabricação de Computadores e Notebooks, são 11 lojas em alguns
            dos maiores Shoppings do Nordeste, e-commerce próprio e presença nos
            maiores Marketplaces do Brasil.{' '}
          </p>
          <p className="mb-4">
            Temos uma grande variedade de equipamentos das melhores marcas do
            mundo, além de uma linha completa de computadores e notebooks de
            fabricação própria.
          </p>

          <CallToActionButton>Solicitar Orçamento</CallToActionButton>
        </div>
      </div>
    </section>
  )
}
