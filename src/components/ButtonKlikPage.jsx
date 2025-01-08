import React from 'react'
import Image from 'next/image'
import BtnImage from '@/app/image/btnLove.png'

const ButtonKlikPage = ({handleClick}) => {
  return (
    <div className='container '>
      <div className="btn-img d-flex justify-content-center align-items-center vh-100">
        <button type='submit' onClick={handleClick}>
            <Image src={BtnImage} width={180} height={180} alt="love" className='img-btnlove' />
        </button>
        
      </div>
    </div>
  )
}

export default ButtonKlikPage
