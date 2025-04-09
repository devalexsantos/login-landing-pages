import Image from 'next/image'

export default function Hero() {
  const benefits = [
    {
      icon: '/assets/icons/atendimento-ao-cliente.png',
      firstLine: 'Atendimento',
      secondLine: 'personalizado',
      size: 30,
    },
    {
      icon: '/assets/icons/precos-especiais.png',
      firstLine: 'Preços',
      secondLine: 'especiais',
      size: 40,
    },
    {
      icon: '/assets/icons/data-limite.png',
      firstLine: 'Prazos',
      secondLine: 'diferenciados',
      size: 26,
    },
    {
      icon: '/assets/icons/entrega-rapida.png',
      firstLine: 'Entrega',
      secondLine: 'expressa',
      size: 30,
    },
  ]

  return (
    <section className="bg-hero-pattern bg-cover py-8">
      <div className="container m-auto p-8">
        <div className="flex flex-wrap justify-center gap-8 items-center md:items-end">
          <div className="flex flex-col gap-3 justify-center items-center w-full max-w-[1000px]">
            <Image
              src="/assets/logo-login.png"
              alt="logo"
              width={210}
              height={133}
            />
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-white">
                Tudo em informática
              </h1>
              <span className="text-white text-2xl font-light text-center">
                para <strong>pequenas</strong> e{' '}
                <strong>médias empresas</strong>
              </span>
              <p className="text-white text-xl text-center mt-2 max-w-[500px] font-light">
                Obtenha maior produtividade e eficiência com os produtos da
                Login Informática.
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-4/5">
                <div className="flex flex-col items-center gap-3 justify-between">
                  <iframe
                    className="mt-4 w-full rounded overflow-hidden"
                    height={400}
                    src="https://www.youtube.com/embed/DL71CGU-bms?si=FcYWdfWwAsKDkNQc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <a
                    href="https://api.whatsapp.com/send?phone=557140204075"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-[#5D9B18] text-white px-6 py-4 text-center border border-white/30 font-bold text-xl w-full max-w-[360px] uppercase"
                  >
                    Faça seu orçamento
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/5 flex flex-col gap-4 justify-center mt-5">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-xl shadow flex items-center gap-3 p-3 bg-white text-[#0B4E83]"
                  >
                    <Image
                      src={benefit.icon}
                      width={benefit.size}
                      height={0}
                      alt="Ícone de benefício"
                    />
                    <div className="flex flex-col items-start text-lg">
                      <span>{benefit.firstLine}</span>
                      <span className="font-extrabold">
                        {benefit.secondLine}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
