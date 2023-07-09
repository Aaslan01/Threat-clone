import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GlobeSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.252 10A8.015 8.015 0 004 12c0 .69.088 1.36.252 2h3.853A18.7 18.7 0 018 12c0-.706.038-1.373.105-2H4.252zm.818-2h3.371a14.431 14.431 0 011.167-3.252c.08-.16.161-.312.242-.456A8.018 8.018 0 005.07 8zM12 4.605c-.187.28-.397.628-.608 1.045a12.222 12.222 0 00-.89 2.35h2.995a12.222 12.222 0 00-.89-2.35c-.21-.417-.42-.765-.607-1.045zM13.882 10h-3.764A16.58 16.58 0 0010 12c0 .715.043 1.382.118 2h3.764A16.58 16.58 0 0014 12c0-.715-.043-1.382-.118-2zm2.013 4c.067-.627.105-1.294.105-2s-.038-1.373-.105-2h3.853c.165.64.252 1.31.252 2s-.087 1.36-.252 2h-3.853zm-2.398 2h-2.994c.254.945.574 1.726.89 2.35.21.417.42.765.607 1.045.187-.28.397-.628.608-1.045.315-.624.635-1.405.89-2.35zM9.85 19.708c-.08-.144-.162-.296-.242-.456A14.43 14.43 0 018.44 16h-3.37a8.019 8.019 0 004.779 3.708zm4.3 0c.08-.144.162-.296.242-.456.434-.857.862-1.94 1.167-3.252h3.37a8.018 8.018 0 01-4.778 3.708zM18.93 8h-3.371a14.435 14.435 0 00-1.167-3.252c-.08-.16-.161-.312-.242-.456A8.018 8.018 0 0118.93 8zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        fill="#0F1729"
      />
    </Svg>
  )
}

export default GlobeSVG
