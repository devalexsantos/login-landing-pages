import Image from 'next/image'
import SmallButtonCallToAction from '../../_components/SmallButtonCallToAction'

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center py-8">
      <div>
        <Image
          src="/assets/logo-login.png"
          alt="Logo Login Informática"
          width={150}
          height={100}
        />
        <div className="flex flex-col gap-8 md:gap-16 md:flex-row">
          <p className="flex-1 text-sm text-[#ececec] max-w-[400px]">
            Com 30 anos de mercado, a Login Informática é uma das empresas
            pioneiras na fabricação de computadores e notebooks. Situada no Pólo
            Industrial de Ilhéus, nossa fábrica ocupa uma área de 7500m², a
            estrutura logística de produção é informatizada e altamente moderna,
            assim como a estrutura de armazenagem.
          </p>
          <div className="flex flex-col gap-2 text-[#ececec] text-sm">
            <span className="font-bold">ATENDIMENTO</span>
            <div className="flex flex-col">
              <span>Telefone:</span>
              <span className="underline">(71) 2106-3700</span>
            </div>

            <div className="flex flex-col">
              <span>E-mail:</span>
              <span className="underline">site@login.com.br</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[#ececec] text-sm">
            <span className="font-bold">ENDEREÇO</span>
            <p className="max-w-[260px]">
              Alameda das Cajazeiras, 560 – Caminho das Árvores. Salvador / BA
            </p>
            <SmallButtonCallToAction primary />
          </div>
        </div>
        <span className="text-sm text-[#ececec] pt-8">
          © Login Informática - 2024 - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
