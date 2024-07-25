import React from 'react'
import Link from 'next/link'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">WordGame</a>
  </div>
  <div className="flex-none gap-2">
  <Link href="/rank" className='link mx-2'>Rank</Link>
    <UserButton></UserButton>
  </div>
</div>
    </div>
  )
}
