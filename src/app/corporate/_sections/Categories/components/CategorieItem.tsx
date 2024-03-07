'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType } from 'embla-carousel'
import './EmblaCarroussel.css'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePrevNextButtons } from './EmblaCarousselArrowButton'
import { DotButton, useDotButton } from './EmblaCarousselDotButton'

interface CategorieItemProps {
  categorie: {
    title: string
    image: string
    phrases: {
      title: string
      description: string
    }[]
  }
}

export default function CategorieItem({ categorie }: CategorieItemProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resetOrStop: any =
      autoplay.options.active === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  )

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick,
  )

  return (
    <div className="flex flex-col max-w-[400px]">
      <Image
        src={categorie.image}
        width={400}
        height={300}
        alt="Computadores perfeitos para sua empresa"
      />
      <span className="text-center p-3 bg-[#0B4E83] text-white font-bold">
        {categorie.title}
      </span>
      <div className="flex flex-col justify-center gap-3 bg-white py-8">
        <div className="flex justify-between px-4 items-center">
          <button className="embla__prev" onClick={onPrevButtonClick}>
            <ChevronLeft color="#0B4E83" />
          </button>
          <div className="embla w-full text-[#0B4E83]" ref={emblaRef}>
            <div className="embla__container">
              {categorie.phrases.map((phrase, index) => (
                <div
                  key={index}
                  className="embla__slide px-4 flex flex-col items-center justify-center"
                >
                  <span className="font-extrabold uppercase text-center">
                    {phrase.title}
                  </span>
                  <p className="text-wrap text-center leading-5">
                    {phrase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="embla__next" onClick={onNextButtonClick}>
            <ChevronRight color="#0B4E83" />
          </button>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected ' : '',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
