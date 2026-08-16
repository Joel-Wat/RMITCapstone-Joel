'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }
{/* {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'} */}
  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div>Capstone Project</div>
        <div className="text-xs font-normal text-zinc-500">team-26</div>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {user && <span className="hidden text-sm text-zinc-500 sm:block">Welcome, {user.email}</span>}
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          aria-label="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
