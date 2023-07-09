import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SettingSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 64 64"
      strokeWidth={3}
      stroke="#bbb"
      fill="none"
      {...props}
    >
      <Circle cx={32} cy={18.14} r={11.14} />
      <Path d="M54.55 56.85A22.55 22.55 0 0032 34.3h0A22.55 22.55 0 009.45 56.85z" />
    </Svg>
  )
}

export default SettingSVG

