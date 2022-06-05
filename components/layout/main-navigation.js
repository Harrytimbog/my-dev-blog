import React from 'react'
import Link from 'next/link';

const MainNavigation = () => {
  return (
    <header>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li><Link href="/posts"><a>Posts</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;