import Image from 'next/image'
import { specsData } from '../_mocks/specs'

export function Specs() {
  return (
    <div className="container m-auto flex flex-col gap-8 justify-center items-center">
      <span className="text-lg">Especificações gerais:</span>
      <div className="flex flex-wrap items-center gap-8">
        {specsData.map((spec, index) => (
          <div
            key={index}
            className="border border-white rounded-2xl flex flex-col items-center justify-center w-[137px] h-[137px]"
          >
            <Image src={spec.icon} alt="CPU" width={60} height={60} />
            <span className="text-xl font-bold">{spec.title}</span>
            <span className="text-lg font-light">{spec.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
