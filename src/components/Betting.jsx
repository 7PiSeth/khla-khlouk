import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import khla from "../images/khla.png"
import khlouk from "../images/khlouk.png"
import kdam from "../images/kdam.png"
import trey from "../images/trey.png"
import bongkong from "../images/bongkong.png"
import man from "../images/man.png"

const Betting = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <LazyLoadImage
              src={khla}
              alt="Khla"
            />
          </td>
          <td>
            <LazyLoadImage
              src={khlouk}
              alt="Khlouk"
            />
          </td>
          <td>
            <LazyLoadImage
              src={man}
              alt="Man"
            />
          </td>
        </tr>
        <tr>
          <td>
            <LazyLoadImage
              src={bongkong}
              alt="BongKong"
            />
          </td>
          <td>
            <LazyLoadImage
              src={trey}
              alt="Trey"
            />
          </td>
          <td>
            <LazyLoadImage
              src={kdam}
              alt="Kdam"
            />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Betting