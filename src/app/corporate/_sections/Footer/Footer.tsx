import Image from 'next/image'
import SmallButtonCallToAction from '../../_components/SmallButtonCallToAction'

export default function Footer() {
  return (
    <footer className="container flex flex-col justify-center items-center py-8">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/logo-login.png"
          alt="Logo Login Informática"
          width={150}
          height={100}
        />
        <div className="flex flex-col gap-4 mb-4 justify-center">
          <p className="flex-1 text-sm text-[#ececec] max-w-[400px] text-center">
            Com 30 anos de mercado, a Login Informática é uma das empresas
            pioneiras na fabricação de computadores e notebooks. Situada no Pólo
            Industrial de Ilhéus, nossa fábrica ocupa uma área de 7500m², a
            estrutura logística de produção é informatizada e altamente moderna,
            assim como a estrutura de armazenagem.
          </p>

          <div className="flex flex-col gap-2 text-[#ececec] text-sm">
            <SmallButtonCallToAction primary />
          </div>
        </div>
        <span className="text-sm text-[#ececec] pt-8">
          © Login Informática - 2025 - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
