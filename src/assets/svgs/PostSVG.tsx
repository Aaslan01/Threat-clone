import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PostSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#bbb"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      data-name="Flat Line"
      className="icon flat-line"
      stroke="#bbb"
      transform="matrix(0 -1 -1 0 0 0)"
      {...props}
    >
      <Path
        d="M6 14V9a6 6 0 0110.89-3.46"
        fill="none"
        stroke="#bbb"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M18 10v5a6 6 0 01-10.89 3.46"
        fill="none"
        stroke="#bbb"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M8 12L6 14 4 12"
        fill="none"
        stroke="#bbb"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M16 12L18 10 20 12"
        fill="none"
        stroke="#bbb"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default PostSVG
