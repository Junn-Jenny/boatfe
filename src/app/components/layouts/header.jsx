import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (<header className='bg-net25-blue dark:bg-black'>
    <div className='max-w-hd mx-auto container flex justify-between'>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            className="cursor-pointer object-contain my-3"
            alt="Boat Logo"
          />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          <li className="px-2 py-2 text-gray-300 dark:text-gray-400  font-montserrat"><Link href="/" className='hover:font-semibold'>LISTING</Link></li>          
        </ul>
      </div>

     
    </div>
  </header>)
}