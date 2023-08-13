import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'

export default function Home() {
  return (
    <body>
      <Header/>
      <main className='h-screen'>
        <div className='flex justify-center items-center h-3/5'>
          About conoaroma
        </div>
        <div className='h-2/5 text-center items-center'>
          <div className='h-1/2'>
            <button className='rounded-full border-2 p-4 w-1/2'>
            <Link href='/feeling'>気分から探す</Link>
          </button>
          </div>
          <div className='h-1/2'>
            <button className='rounded-full border-2 p-4 w-1/2'>
            <Link href='/category'>系統から見つける</Link>
          </button>
          </div>
        </div>
      </main>
    </body>
  )
}
