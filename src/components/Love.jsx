import Image from 'next/image'
import React from 'react'
import LoveGambar from '@/app/image/love.png'

const Love = () => {
  return (
    <div className='container love d-flex justify-content-center align-items-center'>
      <Image src={LoveGambar} alt='love'  className='love-img'/>
    </div>
  )
}

export default Love
