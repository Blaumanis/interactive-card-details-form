import React from 'react'

const Error = ({errorMsg={errorMsg}}) => {
  return (
    <p
      className='error-msg'
      style={{
        color: 'red',
        fontSize: '0.7rem',
        position: 'absolute',
        bottom: '-15px',
        lineHeight: '0.85',
      }}
    >
      {errorMsg}
    </p>
  )
}

export default Error
