import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WriteSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#bbb"
      width="24"
      height="24"
      viewBox="-0.5 -0.5 24 24"
      preserveAspectRatio="xMinYMin"
      className="jam jam-write-f"
      stroke="#bbb"
      {...props}
    >
      <Path d="M21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 01.045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 110 2h-4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4a1 1 0 012 0v4a4 4 0 01-4 4h-12a4 4 0 01-4-4v-12a4 4 0 014-4h4z" />
    </Svg>
  )
}

export default WriteSVG
