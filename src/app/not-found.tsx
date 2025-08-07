import Link from 'next/link'
import React from 'react'

import "./globals.css";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
    <h2 className="text-2xl font-bold text-red-500">Página INEXISTENTE!</h2>
      <Link href="/" className="mt-6 underline font-bold text-lg">
        Voltar para o início
      </Link>
    </div>
  )
}

export default NotFound
