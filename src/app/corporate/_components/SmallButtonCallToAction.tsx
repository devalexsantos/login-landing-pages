'use client'

interface SmallButtonCallToActionProps {
  primary?: boolean
}

export default function SmallButtonCallToAction({
  primary,
}: SmallButtonCallToActionProps) {
  const handleClick = () => {
    const inputElement = document.getElementById('name-sendpulse')
    if (inputElement) {
      inputElement.focus()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${primary ? 'bg-[#119823] hover:bg-[#119823] transition-all text-[#ffffff]' : 'bg-[#0B4E83] text-white'} rounded-xl text-sm font-bold`}
    >
      SOLICITAR COTAÇÃO
    </button>
  )
}
