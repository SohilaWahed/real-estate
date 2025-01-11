import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Counter(props) {
    let targetNumber = props.targetNumer
    let steps = props.step
    const duration = 2000
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) {
            const stepTimer = duration / steps
            let currentCount = 0;
            const timer = setInterval(() => {
                currentCount += steps;
                setCount(Math.min(Math.ceil(currentCount), targetNumber));
                if (currentCount >= targetNumber) {
                    clearInterval(timer);
                }
            }, stepTimer);
        }
    }, [inView, targetNumber, duration])


    return (
        <span ref={ref} className='home text-primary text-3xl font-gilroy-bold'>{count}<span>+</span></span>
    )
}
