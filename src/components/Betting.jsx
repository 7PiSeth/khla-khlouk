import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongkong from "../images/bongkong.png"
import man from "../images/man.png"

var khmerNumberArr = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
function convertLatinNumToKhNum(latinNumbers) {
  latinNumbers = latinNumbers + ''; // convert to string
  var khNumbers = '';
  for (var i = 0; i < latinNumbers.length; i++) {
    if (latinNumbers[i] === '.') {
      khNumbers += '.';
      continue;
    }
    khNumbers += khmerNumberArr[latinNumbers[i]];
  }
  return khNumbers;
}

function convertKhNumToLatinNum(khNumbers) {
  var latinNumbers = '';
  for (var i = 0; i < khNumbers.length; i++) {
    for (var j = 0; j < khmerNumberArr.length; j++) {
      if (khNumbers[i] === '៛') break;
      if (khNumbers[i] === '.') {
        latinNumbers += '.';
        break;
      }
      if (khNumbers[i] === khmerNumberArr[j]) {
        latinNumbers += j;
        break;
      }
    }
  }
  return latinNumbers;
}

function increaseAmount(id) {
  var selectedAmount = parseInt(document.getElementById("selectedAmount").value);
  var shake = document.getElementById("shake").value;
  var bettingObj = document.getElementById(id);
  var userMoneyObj = document.getElementById('userMoney');
  var userMoneyKh = userMoneyObj.innerHTML;
  var latinNums = convertKhNumToLatinNum(bettingObj.innerHTML);
  if ((parseInt(convertKhNumToLatinNum(userMoneyKh)) - selectedAmount) < 0 || shake==='false') return;
  bettingObj.innerHTML = convertLatinNumToKhNum(parseInt(latinNums) + selectedAmount);
  userMoneyObj.innerHTML = convertLatinNumToKhNum((parseInt(convertKhNumToLatinNum(userMoneyKh)) - selectedAmount))+'៛';
}
function decreaseAmount(id) {
  var selectedAmount = parseInt(document.getElementById("selectedAmount").value);
  var shake = document.getElementById("shake").value;
  var bettingObj = document.getElementById(id);
  var userMoneyObj = document.getElementById('userMoney');
  var userMoneyKh = userMoneyObj.innerHTML;
  var latinNums = convertKhNumToLatinNum(bettingObj.innerHTML);
  if (parseInt(latinNums) - selectedAmount < 0 || shake==='false') return;
  bettingObj.innerHTML = convertLatinNumToKhNum(parseInt(latinNums) - selectedAmount);
  userMoneyObj.innerHTML = convertLatinNumToKhNum((parseInt(convertKhNumToLatinNum(userMoneyKh)) + selectedAmount))+'៛';
}

const Betting = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={khla} alt="khla.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betKhla')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betKhla')
              }}>-</button>
              <p id='betKhla'>០</p>
              <button onClick={() => {
                increaseAmount('betKhla')
              }}>+</button>
            </div>
          </td>
          <td>
            <img src={khlouk} alt="khlouk.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betKhlouk')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betKhlouk')
              }}>-</button>
              <p id='betKhlouk'>០</p>
              <button onClick={() => {
                increaseAmount('betKhlouk')
              }}>+</button>
            </div>
          </td>
          <td>
            <img src={man} alt="man.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betMan')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betMan')
              }}>-</button>
              <p id='betMan'>០</p>
              <button onClick={() => {
                increaseAmount('betMan')
              }}>+</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img src={bongkong} alt="bongkong.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betBongKong')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betBongKong')
              }}>-</button>
              <p id='betBongKong'>០</p>
              <button onClick={() => {
                increaseAmount('betBongKong')
              }}>+</button>
            </div>
          </td>
          <td>
            <img src={trey} alt="trey.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betTrey')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betTrey')
              }}>-</button>
              <p id='betTrey'>០</p>
              <button onClick={() => {
                increaseAmount('betTrey')
              }}>+</button>
            </div>
          </td>
          <td>
            <img src={kdam} alt="kdam.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={() => {
                increaseAmount('betKdam')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betKdam')
              }}>-</button>
              <p id='betKdam'>០</p>
              <button onClick={() => {
                increaseAmount('betKdam')
              }}>+</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Betting