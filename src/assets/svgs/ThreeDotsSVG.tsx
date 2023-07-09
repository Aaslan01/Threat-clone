import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ThreeDotsSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#fff"
      className="bi bi-three-dots"
      stroke="#fff"
      {...props}
    >
      <Path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  )
}

export default ThreeDotsSVG
