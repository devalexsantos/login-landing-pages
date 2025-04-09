'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import ButtonCallToAction from '../../_components/ButtonCallToAction'
import { useCallback } from 'react'
import { usePrevNextButtons } from '../Categories/components/EmblaCarousselArrowButton'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <section id="beneficios" className="bg-[#163e5e] py-28 text-white">
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
            na fabricação de Computadores, Notebooks e na comercialização de
            equipamentos de informática em geral. Temos 11 lojas físicas em
            alguns dos maiores Shoppings do Nordeste, e-commerce próprio e
            estamos presentes nos maiores Marketplaces do Brasil.
          </p>
          <p className="mb-4">
            Contamos com uma grande variedade de equipamentos de informática e
            tecnologia das melhores marcas do mundo, prontos para atender todas
            as necessidades do seu negócio, além de uma linha completa de
            computadores e notebooks de fabricação própria, com garantia direta
            com a Login.
          </p>

          <ButtonCallToAction />
        </div>
      </div>
    </section>
  )
}
