import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#6B6B6B"
      stroke="#6B6B6B"
      {...props}>
      <Path
        d="M11.386 1.21a1 1 0 011.228 0l9 7A1 1 0 0122 9v11.5a1.5 1.5 0 01-1.5 1.5H15v-8a1 1 0 00-1-1h-4a1 1 0 00-1 1v8H3.5A1.5 1.5 0 012 20.5V9a1 1 0 01.386-.79l9-7z"
        fill={props?.background ?? '#1C1C1C'}
      />
    </Svg>
  );
}

export default HomeSVG;
