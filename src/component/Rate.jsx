import React from 'react'

export default function Rate(props) {
    const fullStar = Math.floor(props.rate)
    const halfStar = props.rate % 1 !== 0


    return (
        <div className="flex space-x-1">
            {Array(fullStar).fill(0).map((_,index)=><i key={index} className="fa-solid fa-star text-primary"></i>)}
            {halfStar&&<i className="fa-solid fa-star-half-stroke text-primary"></i>}
        </div>
    )
}
