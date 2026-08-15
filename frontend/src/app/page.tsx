import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the app',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-5xl bg-white px-16 py-20 text-center">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Project 26: Grand Prix Ecosystem Operations Team 2
            </h1>

            <p className="mx-auto max-w-md text-lg text-zinc-600">
              Welcome to the landing page!
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700"
            >
              Sign in
            </Link>

            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
