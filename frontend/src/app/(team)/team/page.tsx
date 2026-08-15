import type { Metadata } from 'next'
import { TeamMemberImage } from '@/components/team/TeamMemberImage'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the project team',
}

const teamMembers = [
  {
    name: 'TianXiang Hang',
    role: 'PM',
    image: '/images/team/max.webp',
    description:
      'Responsible for coordinating the project team, managing project progress, and ensuring project goals are achieved.',
    isPM: true,
  },
  {
    name: 'Gabriel Halvarsson',
    role: 'Dev 1',
    image: '/images/team/kimi.webp',
    description:
      'Responsible for software development and implementation of project features.',
    isPM: false,
  },
  {
    name: 'Joel Waterhouse',
    role: 'Dev 2',
    image: '/images/team/lando.webp',
    description:
      'Responsible for software development and implementation of project features.',
    isPM: false,
  },
  {
    name: 'Diya Diljith',
    role: 'UX',
    image: '/images/team/lewis.webp',
    description:
      'Responsible for user interface design and ensuring a consistent user experience.',
    isPM: false,
  },
  {
    name: 'Anas Rizwan',
    role: 'BA',
    image: '/images/team/george.webp',
    description:
      'Responsible for analysing business requirements and translating stakeholder needs into project requirements.',
    isPM: false,
  },
]

export default function TeamPage() {
  const projectManager = teamMembers.find((member) => member.isPM)
  const team = teamMembers.filter((member) => !member.isPM)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
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
    </main>
  )
}

function TeamCard({
  member,
}: {
  member: (typeof teamMembers)[number]
}) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-zinc-100">
        <TeamMemberImage
          src={member.image}
          name={member.name}
        />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold">{member.name}</h2>

        <p className="mt-1 text-sm font-medium text-purple-600">
          {member.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {member.description}
        </p>
      </div>
    </div>
  )
}