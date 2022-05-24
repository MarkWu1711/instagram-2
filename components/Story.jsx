import React from 'react'

const Story = ({ id, img, username }) => {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition-transform duration-200 ease-out hover:scale-105"
        src={img}
        alt=""
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
