import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props?.background??"#6B6B6B"}
      {...props}
    >
      <Path
        d="M20 20l-4.197-4.197M18 10.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchSVG
