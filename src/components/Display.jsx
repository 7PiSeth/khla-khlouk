import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongkong from "../images/bongkong.png"
import man from "../images/man.png"

const Display = () => {
  return (
    <div className='bg-[#F4F6F8] dark:bg-[#161B22] p-12 rounded-full flex flex-col items-center '>
      <LazyLoadImage
        className='w-[150px]'
        src={khla}
        alt="Khla"
      />
      <div className='flex'>
        <LazyLoadImage
          className='w-[150px]'
          src={khlouk}
          alt="Khlouk"
        />
        <LazyLoadImage
          className='w-[150px]'
          src={man}
          alt="Man"
        />
      </div>
    </div>
  )
}

export default Display