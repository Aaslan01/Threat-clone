import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props?.background != ''?props?.background:"#6B6B6B"}
      {...props}
    >
      <Path
        d="M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21c-.178 0-10-5.186-10-11.52C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={props?.background != ''?props?.background: '#1C1C1C'}
      />
    </Svg>
  )
}

export default HeartSVG
