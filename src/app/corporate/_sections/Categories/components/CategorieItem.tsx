'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import './EmblaCarroussel.css'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [emblaRef, emblaApi] = useEmblaCarousel(AutoHeight())

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
      <div className="flex justify-between bg-white py-8 px-4 items-center">
        <button className="embla__prev" onClick={scrollPrev}>
          <ChevronLeft color="#0B4E83" />
        </button>
        <div className="embla w-full text-[#0B4E83]" ref={emblaRef}>
          <div className="embla__container">
            {categorie.phrases.map((phrase, index) => (
              <div
                key={index}
                className="embla__slide px-4 flex flex-col items-center justify-center"
              >
                <span className="font-extrabold uppercase">{phrase.title}</span>
                <p className="text-wrap text-center leading-5">
                  {phrase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="embla__next" onClick={scrollNext}>
          <ChevronRight color="#0B4E83" />
        </button>
      </div>
    </div>
  )
}
