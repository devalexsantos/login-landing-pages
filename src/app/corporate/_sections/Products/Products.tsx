import { Cpu, Leaf, MonitorCheck, ShieldCheck } from 'lucide-react'
import ProductsCarousel from './components/ProductsCarousel'

export default function Products() {
  return (
    <section
      id="beneficios"
      className="bg-[#F5F5F5] pt-14 pb-28 text-[#0B4E83]"
    >
      <div className="container m-auto flex flex-col items-center gap-8 px-8">
        <h2 className="text-2xl text-center max-w-[600px] font-bold">
          Computadores de alto desempenho com fabricação própria há mais de 30
          anos
        </h2>
        <p className="max-w-[700px] text-center mt-[-10px]">
          Combinando experiência e inovação, nossos produtos são construídos
          para atender às demandas mais exigentes do ambiente corporativo. Conte
          com a qualidade e confiabilidade que uma empresa com mais de 30 anos
          de experiência na fabricação própria de Computadores pode oferecer.
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:flex-wrap">
          <div className="flex flex-col gap-1 items-center leading-tight">
            <MonitorCheck strokeWidth={0.8} size={50} />
            <span className="text-center font-bold">
              Componentes de alta <br />
              qualidade
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center leading-tight">
            <Leaf strokeWidth={0.8} size={50} />
            <span className="text-center font-bold">
              Fabricação <br />
              certificada
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center leading-tight">
            <ShieldCheck strokeWidth={0.8} size={50} />
            <span className="text-center font-bold">
              Garantia de <br />
              fábrica
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center leading-tight">
            <Cpu strokeWidth={0.8} size={50} />
            <span className="text-center font-bold">
              Grande variedade <br />
              de configurações
            </span>
          </div>
        </div>
        <h2 className="text-xl text-center max-w-[600px] font-bold mt-4">
          Conheça alguns dos produtos do portfólio Login para empresas:
        </h2>
        <ProductsCarousel />
      </div>
    </section>
  )
}
