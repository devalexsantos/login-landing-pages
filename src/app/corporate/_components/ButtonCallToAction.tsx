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
      className="bg-[#FFB930] hover:bg-[#ffb01c] transition-all text-[#305776] px-6 py-3 rounded-xl font-extrabold max-w-3xl text-center text-xl mx-8 w-full"
    >
      SOLICITAR UMA COTAÇÃO
    </button>
  )
}
