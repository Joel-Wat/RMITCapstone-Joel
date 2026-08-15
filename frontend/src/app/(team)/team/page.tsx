import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the project team',
}

const teamMembers = [
  {
    name: 'TianXiang Hang',
    role: 'PM',
    description:
      'Responsible for coordinating the project team, managing project progress, and ensuring project goals are achieved.',
    isPM: true,
  },
  {
    name: 'Gabriel Halvarsson',
    role: 'Dev 1',
    description:
      'Responsible for software development and implementation of project features.',
    isPM: false,
  },
  {
    name: 'Joel Waterhouse',
    role: 'Dev 2',
    description:
      'Responsible for software development and implementation of project features.',
    isPM: false,
  },
  {
    name: 'Diya Diljith',
    role: 'UX',
    description:
      'Responsible for user interface design and ensuring a consistent user experience.',
    isPM: false,
  },
  {
    name: 'Anas Rizwan',
    role: 'BA',
    description:
      'Responsible for software development, testing, and implementation of project features.',
    isPM: false,
  },
]

export default function TeamPage() {
  const projectManager = teamMembers.find((member) => member.isPM)
  const team = teamMembers.filter((member) => !member.isPM)

  return (
    <div className="space-y-8">
      {projectManager && (
        <div className="flex justify-center">
          <TeamCard member={projectManager} />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}

function TeamCard({
  member,
}: {
  member: (typeof teamMembers)[number]
}) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Image placeholder */}
      <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-zinc-100 text-sm text-zinc-400">
        Image
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold">{member.name}</h2>

        <p className="mt-1 text-sm font-medium text-purple-600">
          {member.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {member.description}
        </p>
      </div>
    </div>
  )
}