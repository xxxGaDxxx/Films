import React from 'react';
import Svg, {Ellipse, Path, SvgProps} from "react-native-svg";

export const SearchSvg = (props: SvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      rx={7.664}
      ry={7.482}
      transform="matrix(-1 0 0 1 10.332 8.482)"
      stroke="#67686D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.001 14.074 1.997 17"
      stroke="#67686D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)