import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
      <main className='grid grid-cols-2 grid-rows-10 h-screen'>
      <header className='col-start-1 col-end-3 row-start-1 row-end-2'>
        <div className='text-center'>
          <Link href='/' className='text-3xl inline-block pt-1'>
            conoaroma
          </Link>
          <p className='text-xs'>好みのアロマが見つかるアプリ</p>
        </div>
      </header>
        <div className='col-start-1 col-end-3 row-start-2 row-end-5 text-center align-middle'>
            <Image
              src='/images/essentialoil.jpg'
              alt='essential-oil'
              width={300}
              height={400}
            />
        </div>
        <div className='col-start-1 col-end-3 row-start-5 row-end-9'>
          discription
        </div>
          {/* ボタンの配置について: スマホサイズだったら縦, iPad PCサイズだったら横にする */}
        <div className='lg: col-start-1 col-end-2 row-start-9 row-end-10 text-center'>
          <button className='rounded-full border-2 p-4 w-3/4'>
            <Link href='/feeling'>気分から探す</Link>
          </button>
        </div>
        <div className='col-start-2 col-end-3 row-start-9 row-end-10 text-center'>
          <button className='rounded-full border-2 p-4 w-3/4'>
            <Link href='/category'>系統から見つける</Link>
          </button>
        </div>
      </main>
    </body>
  )
}
