import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongkong from "../images/bongkong.png"
import man from "../images/man.png"
import dish from "../images/dish.png"
import cover from "../images/platecover.png"

const Display = () => {
  const [shake, setShake] = useState(false);
  const [optionSelected, setOptionSelected] = useState('op1')
  const [selectedAmount, setSelectedAmount] = useState('១០០')
  return (
    <div>
      <input type="text" id='selectedAmount' value={selectedAmount} className='hidden' />
      <div id='selectAmount' className='absolute left-0 sm:left-16 top-6 flex 
      flex-col rounded-lg text-white font-extrabold
      bg-gradient-to-r from-sky-400 to-blue-500'>
        <p id='op1'
          className={`rounded-t-lg ${optionSelected === 'op1' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op1')
            setSelectedAmount(document.getElementById('op1').innerHTML)
          }}
        >១០០៛</p>
        <p id='op2'
          className={`${optionSelected === 'op2' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op2')
            setSelectedAmount(document.getElementById('op2').innerHTML)
          }}
        >៥០០៛</p>
        <p id='op3'
          className={`${optionSelected === 'op3' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op3')
            setSelectedAmount(document.getElementById('op3').innerHTML)
          }}
        >១,០០០៛</p>
        <p id='op4'
          className={`${optionSelected === 'op4' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op4')
            setSelectedAmount(document.getElementById('op4').innerHTML)
          }}
        >៥,០០០៛</p>
        <p id='op5'
          className={`rounded-b-lg ${optionSelected === 'op5' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op5')
            setSelectedAmount(document.getElementById('op5').innerHTML)
          }}
        >១០,០០០៛</p>
      </div>
      <div
        className={`p-16 flex flex-col items-center relative
    space-y-1 cursor-pointer ${shake ? 'animate-shake-items' : ''}`}>
        <LazyLoadImage
          onClick={() => {
            setShake(!shake)
          }}
          className={`${shake ? 'z-10' : ''} absolute top-0 w-[300px] rounded-md`}
          src={shake ? cover : dish}
          alt="Khla"
        />

        <LazyLoadImage
          className='w-[70px] bg-[#F4F6F8] rounded-md drop-shadow-lg shadow-lg'
          src={khla}
          alt="Khla"
        />
        <div className='flex space-x-1'>
          <LazyLoadImage
            className='w-[70px] bg-[#F4F6F8] rounded-md drop-shadow-lg shadow-lg'
            src={khlouk}
            alt="Khlouk"
          />
          <LazyLoadImage
            className='w-[70px] bg-[#F4F6F8] rounded-md drop-shadow-lg shadow-lg'
            src={man}
            alt="Man"
          />
        </div>
      </div>
    </div>

  )
}

export default Display