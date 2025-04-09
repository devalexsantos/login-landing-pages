'use client'

interface SmallButtonCallToActionProps {
  primary?: boolean
}

export default function SmallButtonCallToAction({
  primary,
}: SmallButtonCallToActionProps) {
  return (
    <a
      href="https://wa.me/557140204075?text=Ol%C3%A1%2C+vi+a+p%C3%A1gina+de+voc%C3%AAs+sobre+a+linha+corporate+e+queria+mais+informa%C3%A7%C3%B5es"
      rel="noopener noreferrer"
      target="_blank"
      className={`px-4 py-2 ${primary ? 'bg-[#119823] hover:bg-[#119823] transition-all text-[#ffffff]' : 'bg-[#0B4E83] text-white'} rounded-xl text-sm font-bold text-center`}
    >
      SOLICITAR COTAÇÃO
    </a>
  )
}
