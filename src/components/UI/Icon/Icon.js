import React from 'react'

const Icon = ({ Component = 'div', title = '' }) => {
  return title ? (
    <div className='flex-row m-right-s'>
      <i>
        <Component size={20} color='var(--color-font)' />
      </i>
      <p
        style={{
          alignSelf: 'center',
          fontSize: 13,
          color: 'var(--color-font)',
          marginBottom: 5,
        }}>
        {title}
      </p>
    </div>
  ) : null
}

export default Icon
