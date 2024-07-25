import React from 'react'
import Link from 'next/link'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function RankNavbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">WordGame</a>
  </div>
  <div className="flex-none gap-2">
  <Link href="/" className='link mx-2'>Home</Link>
    <UserButton></UserButton>
  </div>
</div>
    </div>
  )
}
