import Image from 'next/image'
import React from 'react'

const Imagecard = ({url,onclick}) => {
  return (
    <div className=''>
      <div className='p-5'>
        <Image src={url} alt='image' width={100} height={60} priority />
      </div>
      <button type='button' className='btn' onClick={onclick}>Delete</button>
    </div>
  )
}

export default Imagecard