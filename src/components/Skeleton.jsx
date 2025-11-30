import React from 'react'

export default function Skeleton({times}) {
    //make an array from timeS
    //empty fill
    //Add styles to show shimmer
    const renderedBoxes = Array.from({length:times}).fill(0).map((_, i) => {
        return <div className='flex flex-col gap-2 animate-pulse w-80 py-1 px-1' key={i}>
            <div className="h-7 rounded bg-gray-500"></div>
            <div className="h-7 rounded bg-gray-500"></div>
        </div>
    })
  return <>{renderedBoxes}</>;
}
