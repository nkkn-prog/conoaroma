import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <main className='border-2 border-rose-500 h-screen'>
        <div className='flex justify-center items-center h-1/2'>
          <p className='text-5xl'>Conoaroma</p>
        </div>
        <div className='flex justify-center items-center'>
          <Link href='https://github.com/nkkn-prog/conoaroma'>Conoaroma Repository</Link>
        </div>
    </main>

  )
}
