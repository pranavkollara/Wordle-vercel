import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function Sign() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl">Word Game</a>
  </div>
  
  <div className="navbar-end">
    <SignInButton>

    <a className="btn">Sign in</a>
    </SignInButton>
  </div>
</div>
    </div>
  )
}
