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
    <div>
      <table>
        <tr>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={khla}
              alt="Khla"
            />
          </td>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={khlouk}
              alt="Khlouk"
            />
          </td>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={man}
              alt="Man"
            />
          </td>
        </tr>  <tr>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={bongkong}
              alt="BongKong"
            />
          </td>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={trey}
              alt="Trey"
            />
          </td>
          <td>
            <LazyLoadImage
              className="md:w-[300px] p-2 w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
              src={kdam}
              alt="Kdam"
            />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Display