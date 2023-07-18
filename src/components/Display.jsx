import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongKong from "../images/bongkong.png"
import man from "../images/man.png"
import dish from "../images/dish.png"
import cover from "../images/platecover.png"

var khmerNumberArr = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
function convertArabicNumToKhNum(ArabicNumbers) {
  ArabicNumbers = ArabicNumbers + ''; // convert to string
  var khNumbers = '';
  for (var i = 0; i < ArabicNumbers.length; i++) {
    if (ArabicNumbers[i] === '.') {
      khNumbers += '.';
      continue;
    }
    khNumbers += khmerNumberArr[ArabicNumbers[i]];
  }
  return khNumbers;
}

function convertKhNumToArabicNum(khNumbers) {
  var ArabicNumbers = '';
  for (var i = 0; i < khNumbers.length; i++) {
    for (var j = 0; j < khmerNumberArr.length; j++) {
      if (khNumbers[i] === '៛') break;
      if (khNumbers[i] === '.') {
        ArabicNumbers += '.';
        break;
      }
      if (khNumbers[i] === khmerNumberArr[j]) {
        ArabicNumbers += j;
        break;
      }
    }
  }
  return ArabicNumbers;
}

function settledBet() {
  var totalPayAmount = 0;
  var userMoneyObj = document.getElementById('userMoney');
  var userMoney = parseInt(convertKhNumToArabicNum(userMoneyObj.innerHTML));
  var betMoney0 = parseInt(convertKhNumToArabicNum(document.getElementById(bettingArr[resultArr[0]]).innerHTML))
  var betMoney1 = parseInt(convertKhNumToArabicNum(document.getElementById(bettingArr[resultArr[1]]).innerHTML))
  var betMoney2 = parseInt(convertKhNumToArabicNum(document.getElementById(bettingArr[resultArr[2]]).innerHTML))
  if (resultArr[0] === resultArr[1] === resultArr[2]) {
    totalPayAmount = betMoney0 * 4;
  } else if (resultArr[0] === resultArr[1]) {
    totalPayAmount = (betMoney0 * 3) + (betMoney2*2);
  } else if (resultArr[0] === resultArr[2]) {
    totalPayAmount = (betMoney0 * 3) + (betMoney1 *2);
  } else if (resultArr[1] === resultArr[2]) {
    totalPayAmount = (betMoney1 * 3) + (betMoney0 *2);
  } else {
    totalPayAmount = ( (betMoney0 + betMoney1 + betMoney2) * 2 );
  }
  userMoneyObj.innerHTML = convertArabicNumToKhNum( userMoney + totalPayAmount) + '៛';
}

function clearAllbettings() {
  for (var i = 0; i < bettingArr.length; i++) {
    document.getElementById(bettingArr[i]).innerHTML = '០';
  }
}

const itemArr = [
  khla,
  khlouk,
  man,
  bongKong,
  trey,
  kdam
]

const bettingArr = [
  'betKhla',
  'betKhlouk',
  'betMan',
  'betBongKong',
  'betTrey',
  'betKdam'
]
var resultArr = [
  1,
  1,
  1
]

const Display = () => {
  const [shake, setShake] = useState(false);
  const [optionSelected, setOptionSelected] = useState('op1')
  const [selectedAmount, setSelectedAmount] = useState(100)
  return (
    <div className='mt-3'>
      <input type="text" id='selectedAmount' value={selectedAmount} className='hidden' /> {/* use to store value as global */}
      <input type="text" id='shake' value={shake} className='hidden' /> {/* use to store value as global */}
      <div id='selectAmount' className='absolute left-0 sm:left-16 flex 
      flex-col rounded-lg text-white font-extrabold
      bg-gradient-to-r from-sky-400 to-blue-500'>
        <h1
          className='font-extralight rounded-t-lg p-2 text-center border-b'
        >ចាក់ម្តង</h1>
        <p id='op1'
          className={`${optionSelected === 'op1' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op1')
            setSelectedAmount(100)
          }}
        >១០០៛</p>
        <p id='op2'
          className={`${optionSelected === 'op2' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op2')
            setSelectedAmount(500)
          }}
        >៥០០៛</p>
        <p id='op3'
          className={`${optionSelected === 'op3' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op3')
            setSelectedAmount(1000)
          }}
        >១,០០០៛</p>
        <p id='op4'
          className={`${optionSelected === 'op4' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op4')
            setSelectedAmount(5000)
          }}
        >៥,០០០៛</p>
        <p id='op5'
          className={`rounded-b-lg ${optionSelected === 'op5' ? 'bg-[#95c2ee] text-black' : ''}`}
          onClick={() => {
            setOptionSelected('op5')
            setSelectedAmount(10000)
          }}
        >១០,០០០៛</p>
      </div>
      <div
        className={`p-16 flex flex-col items-center relative
          space-y-1 active:cursor-grabbing hover:cursor-grab ${shake ? 'animate-shake-items' : ''}`}>
        <LazyLoadImage
          onClick={() => {
            if (shake) {
              for (var i = 0; i < 3; i++) {
                resultArr[i] = Math.floor(Math.random() * 6)
              }
            } else {
              settledBet();
              clearAllbettings();
            }
            setShake(!shake)
          }}
          className={`${shake ? 'z-10' : ''} absolute top-0 w-[300px] rounded-md`}
          src={shake ? cover : dish}
          alt="Khla"
        />

        <LazyLoadImage
          className='w-[70px] bg-[#F4F6F8] -translate-y-4 rounded-md drop-shadow-lg shadow-lg'
          src={itemArr[resultArr[0]]}
          alt="result1"
        />
        <div className='flex space-x-1 -translate-y-3'>
          <LazyLoadImage
            className='w-[70px] bg-[#F4F6F8] rounded-md drop-shadow-lg shadow-lg'
            src={itemArr[resultArr[1]]}
            alt="result2"
          />
          <LazyLoadImage
            className='w-[70px] bg-[#F4F6F8] rounded-md drop-shadow-lg shadow-lg'
            src={itemArr[resultArr[2]]}
            alt="result3"
          />
        </div>
      </div>
    </div>

  )
}

export default Display