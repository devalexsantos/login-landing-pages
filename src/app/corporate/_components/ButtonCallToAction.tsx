'use client'

export default function ButtonCallToAction() {
  const handleClick = () => {
    const inputElement = document.getElementById('name-sendpulse')
    if (inputElement) {
      inputElement.focus()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#119823] hover:bg-[#119823] transition-all text-[#ffffff] px-6 py-3 rounded-xl font-extrabold max-w-3xl text-center text-xl w-full"
    >
      SOLICITAR UMA COTAÇÃO
    </button>
  )
}
