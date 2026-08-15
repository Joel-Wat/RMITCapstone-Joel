import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'
import { adminDb } from '@/lib/firebase/admin'

export const metadata: Metadata = {
  title: 'Meet the Team',
}

export default async function DashboardPage() {
  const session = await getServerSession()
  const profileSnap = session ? await adminDb.collection('users').doc(session.uid).get() : null

  const displayName = profileSnap?.exists
    ? (profileSnap.data()?.displayName as string | null)
    : null
  const greetingName = displayName ?? session?.email ?? null

  return (
    <div
      className="min-h-screen px-6 py-6"
      style={{
        background:
          'linear-gradient(135deg, #7B3FC6 0%, #4B3575 50%, #2B1C47 100%)',
      }}
    >

    <div className="space-y-6">
      <div>
        <h1 className="font-bold tracking-tight text-white text-2x1 ">Meet the Team</h1>
        {/* <p className="mt-1 text-sm text-zinc-500">
          Welcome back{greetingName ? `, ${greetingName}` : ''}.
        </p> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {(['Metric One', 'Metric Two', 'Metric Three', 'Metric Four'] as const).map((title) => (
          <div
            key={title}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
