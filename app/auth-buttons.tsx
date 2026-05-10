'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useAuth } from '@/context/auth'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthButtons() {
  const auth = useAuth()
  
  return (
    <div>
      {!!auth?.currentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {!!auth.currentUser.photoURL && (
                <Image
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={70}
                  height={70}
                />
              )}
              <AvatarFallback>
                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className='font-normal'>
                {auth.currentUser.displayName}
              </div>
              <div className='text-xs'>
                {auth.currentUser.email}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href='/account'>
                My Account
              </Link>
            </DropdownMenuItem>
            {!!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href='/admin-dashboard'>
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            )}
            {!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href='/account/my-favourites'>
                  My Favourites
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={async () => {
                await auth.logout()
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> 
      )}
      {!auth?.currentUser && (
        <div className='flex gap-6 items-center'>
          <Link
            href='/login'
            className='hover:text-support-hover transitioning'
          >
            Login
          </Link>
    
          <Link
            href='/register'
            className='hover:text-support-hover transitioning'
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}