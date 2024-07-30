import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="container flex flex-col justify-center items-center pb-8 mt-20">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/logo-login.png"
          alt="Logo Login Informática"
          width={150}
          height={100}
        />
        <span className="text-sm text-[#ececec] pt-8">
          © Login Informática - 2024 - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
