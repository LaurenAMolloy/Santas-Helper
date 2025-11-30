import React from 'react'

export default function Skeleton() {
    const times = 3
    //make an array from time
    //empty fill
    //Add styles to show shimmer
    const renderedBoxes = Array.from(times).fill(0).map((_, i) => {
        return <div flex animate-pulse space-x-4>
            <div class="h-2 rounded bg-gray-200"></div>
        </div>
    })
  return (
    <div>renderedBoxes</div>
  )
}
