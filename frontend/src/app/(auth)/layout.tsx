import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-white px-12 py-12">
          {children}
        </div>
      </section>
    </main>
  )
}
