import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  const a = faker.image
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.image.ava,
      a,
      ...faker.helpers.userCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={profile.a.avatar()}
            alt="sug-img"
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="pr-2 text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
