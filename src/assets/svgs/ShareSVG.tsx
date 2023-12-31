import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShareSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 22 22"
      fill="none"
      {...props}>
      <Path
        d="M9.611 12.4l1.207 6.135c.228 1.159 1.785 1.39 2.338.347l5.865-11.04c.227-.426.18-.898-.047-1.258M9.61 12.4L5.226 8.155C4.416 7.371 4.972 6 6.1 6h11.814c.463 0 .844.24 1.06.584M9.612 12.4l9.363-5.816m.081-.05l-.081.05"
        stroke={props?.background ?? '#fff'}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default ShareSVG;
