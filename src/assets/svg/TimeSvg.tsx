import React from 'react';
import Svg, {Path, SvgProps} from "react-native-svg";

export const TimeSvg = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 4.5V8h3.5"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)