import React, { useEffect, useState } from 'react'

const CountDown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        setTimeout(() => {
            if (count > 0) {
                setCount(count - 1)
                clearInterval()
            }
            else {
                props.setIsDisable(true)
                clearInterval()
            }
        }, 1000);
    }, [count])
    return (
        <div>{count}</div>
    )
}

export default CountDown