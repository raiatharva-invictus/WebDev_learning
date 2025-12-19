import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex gap-3 bg-black text-white'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
