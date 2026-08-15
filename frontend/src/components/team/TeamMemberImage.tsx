'use client'

import Image from 'next/image'
import { useState } from 'react'

export function TeamMemberImage({
  src,
  name,
}: {
  src: string
  name: string
}) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div
        className="flex h-32 w-32 items-center justify-center rounded-full bg-zinc-100 text-center text-sm text-zinc-400"
        role="img"
        aria-label={`${name} profile image unavailable`}
      >
        Image unavailable
      </div>
    )
  }

  return (
    <div className="relative h-32 w-32 overflow-hidden rounded-full bg-zinc-100">
      <Image
        src={src}
        alt={`${name} profile`}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}