import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import Story from './Story'
const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  const a = faker.image
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.image.ava,
      a,
      ...faker.helpers.userCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex  space-x-2 overflow-x-scroll rounded-sm border-gray-200 bg-white p-6 scrollbar-thin">
      {session && (
        <Story username={session.user.username} img={session.user.image} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.a.avatar()}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
