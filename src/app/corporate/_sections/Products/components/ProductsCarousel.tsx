import SmallButtonCallToAction from '@/app/corporate/_components/SmallButtonCallToAction'
import { products } from '@/app/corporate/_mocks/products'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

export default function ProductsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-[1024px]"
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 md:basis-1/3 lg:basis-1/4"
          >
            <div className="flex flex-col items-center justify-center w-[250px] h-[300px] bg-white rounded-xl shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
              />
              <h3 className="text-center font-bold text-[#0B4E83] py-3 text-lg">
                {product.title}
              </h3>
              <SmallButtonCallToAction />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
