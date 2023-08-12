import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Conoaroma</h1>
      <Link href='/feeling' className='url'>Go to Feeling page</Link>
    </div>
  )
}
