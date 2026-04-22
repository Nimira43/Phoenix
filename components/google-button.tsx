'use client'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { auth } from '@/firebase/client'


export default function GoogleButton() {
  return (
    <Button
      onClick={() => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
      }}
    >
      Login with Google
    </Button>
  )
}