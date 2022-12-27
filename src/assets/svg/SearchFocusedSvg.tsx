import React from 'react';
import Svg, {Ellipse, Path, SvgProps} from "react-native-svg";

export const SearchFocusedSvg = (props: SvgProps) => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      cx={10.789}
      cy={11.767}
      rx={8.142}
      ry={8.989}
      stroke="#0296E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.451 18.485 19.643 22"
      stroke="#0296E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)