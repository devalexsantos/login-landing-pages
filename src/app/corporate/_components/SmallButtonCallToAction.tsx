'use client'

interface SmallButtonCallToActionProps {
  primary?: boolean
}

export default function SmallButtonCallToAction({
  primary,
}: SmallButtonCallToActionProps) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=557140204075"
      rel="noopener noreferrer"
      target="_blank"
      className={`px-4 py-2 ${primary ? 'bg-[#119823] hover:bg-[#119823] transition-all text-[#ffffff]' : 'bg-[#0B4E83] text-white'} rounded-xl text-sm font-bold text-center`}
    >
      SOLICITAR COTAÇÃO
    </a>
  )
}
