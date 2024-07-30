import Image from 'next/image'
import FormSendPulse from './FormSendPulse/FormSendPulse'

export function Hero() {
  return (
    <section
      id="cta"
      className="w-full flex flex-col items-center container justify-end m-auto md:flex-row-reverse "
    >
      <div className="flex flex-col gap-4 p-4 md:ml-[-50px]">
        <Image
          src="/assets/workstation/workstation-logo.png"
          alt="Logo"
          width={317}
          height={278}
        />
        <FormSendPulse />
      </div>
      <div className="p-4">
        <Image
          src="/assets/workstation/pc-workstation.png"
          alt="Computador Workstation"
          width={720}
          height={888}
        />
      </div>
    </section>
  )
}
