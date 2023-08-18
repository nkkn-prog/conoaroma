import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className='text-center'>
        <Link href='/' className='text-3xl inline-block pt-1'>
          conoaroma
        </Link>
        <p className='text-xs'>好みのアロマが見つかるアプリ</p>
      </div>
    </header>
  )
}
