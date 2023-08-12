import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Conoaroma</h1>
      <Link href='/feeling' className='url'>Go to Feeling page</Link>
      <Link href='https://github.com/nkkn-prog/conoaroma' className='url'>Conoaroma Repository</Link>
    </div>
  )
}
