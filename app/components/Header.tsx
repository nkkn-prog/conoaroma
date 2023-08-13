import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className='text-center border-2 border-black'>
        <Link href='/' className='text-3xl inline-block py-5'>
          conoaroma
        </Link>
      </div>
    </header>
  )
}
