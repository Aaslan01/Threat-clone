import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      width="20"
      height="20"
      viewBox="0 0 22 22"
      data-name="Flat Line"
      className="icon flat-line"
      {...props}
    >
      <Path
        d="M14 6H4a1 1 0 00-1 1v10a1 1 0 001 1h2"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M10 18h10a1 1 0 001-1V7a1 1 0 00-1-1h-2"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M12 4L14 6 12 8"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        data-name="primary"
        d="M12 20L10 18 12 16"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgComponent
