'use client'
import React from 'react'

export function CallToActionButton({ children }: { children: string }) {
  const handleClick = () => {
    const inputElement = document.getElementById('name-sendpulse')
    if (inputElement) {
      inputElement.focus()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#5D9B18] px-6 py-4 text-center border border-white/30 font-bold text-xl w-full max-w-[360px] uppercase"
    >
      {children}
    </button>
  )
}
