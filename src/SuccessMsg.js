import React from 'react'
import {useSpring, animated } from 'react-spring'

const SuccessMsg = ({setIsSuccess}) => {
    const closeModal = () => {
        setIsSuccess(false)
      }
      const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 2000 },
      })
      return (
        <animated.div style={props} className="success-msg">
            <img src="images/icon-complete.svg" alt="" />
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
            <button className="btn" onClick={()=> closeModal()}>Continue</button>
        </animated.div>
      )
}

export default SuccessMsg
