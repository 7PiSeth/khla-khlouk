import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongkong from "../images/bongkong.png"
import man from "../images/man.png"
var khmerNumbers = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'];
function convertKhmerNumberToLatinNumber(khNumbers) {
  var latinNumber = '';
  for( var i = 0;i<khNumbers.length; i++) {
    latinNumber+= khToLatinNum(khNumbers[i])
  }
  return latinNumber;
}

function khToLatinNum( khNum ) {

  if( khNum.includes('៛') || khNum.includes(',') ) return '';

  for( var i =0 ; i<khmerNumbers.length; i++) {
    if(khNum ===khmerNumbers[i])
    return i;
  }
}

var selectedMoney = '';

const increaseAmount = (id) => {
  selectedMoney = convertKhmerNumberToLatinNumber( document.getElementById("selectedAmount").value)
  var object = document.getElementById(id);
  var betValue = object.innerHTML;
  object.innerHTML = parseInt(betValue) + parseInt(selectedMoney);
}

const decreaseAmount = (id) => {
  selectedMoney = convertKhmerNumberToLatinNumber( document.getElementById("selectedAmount").value)
  var object = document.getElementById(id);
  var betValue = object.innerHTML;
  if (betValue === '0') return;
  object.innerHTML = parseInt(betValue) - parseInt(selectedMoney);
}

const Betting = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={khla} alt="khla.png"
              className="h-28 object-contain cursor-pointer active:scale-150 duration-300"
              onClick={()=>{
                increaseAmount('betKhla')
              }}
            />
            <div className='betting flex justify-between'>
              <button onClick={() => {
                decreaseAmount('betKhla')
              }}>-</button>
              <p id='betKhla'>0</p>
              <button onClick={() => {
                increaseAmount('betKhla')
              }}>+</button>
            </div>
          </td>
          <td>
            <img src={khlouk} alt="khlouk.png"
              className="h-28 object-contain"
            />
            <p className='betting'>0</p>
          </td>
          <td>
            <img src={man} alt="man.png"
              className="h-28 object-contain"
            />
            <p className='betting'>0</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={bongkong} alt="bongkong.png"
              className="h-28 object-contain"
            />
            <p className='betting'>0</p>
          </td>
          <td>
            <img src={trey} alt="trey.png"
              className="h-28 object-contain"
            />
            <p className='betting'>0</p>
          </td>
          <td>
            <img src={kdam} alt="kdam.png"
              className="h-28 object-contain"
            />
            <p className='betting'>0</p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Betting