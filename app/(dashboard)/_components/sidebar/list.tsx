'use client'

import { useOrganizationList } from '@clerk/nextjs'
import { Item } from './item'
import { useEffect, useState } from 'react'

export const List = () => {
  const { isLoaded, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  useEffect(() => {
    if (isLoaded && userMemberships) {
      userMemberships.revalidate()
    }
  }, [isLoaded])

  if (!isLoaded) {
    return null
  }

  // if (!userMemberships.data?.length) return null
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  )
}
