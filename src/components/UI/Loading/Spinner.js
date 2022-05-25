import React, { memo } from 'react'
import './Spinner.css'

const Spinner = memo(({ styles }) => {
  return <div className={`spinner ${styles}`}></div>
})
export default Spinner
