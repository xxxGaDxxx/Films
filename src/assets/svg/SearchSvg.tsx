import React from 'react';
import Svg, {Ellipse, Path} from "react-native-svg";
import {CustomSvgProps} from "./index";


export const SearchSvg = ({customColor, ...restProps}: CustomSvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    {...restProps}
  >
    <Ellipse
      rx={7.664}
      ry={7.482}
      transform="matrix(-1 0 0 1 10.332 8.482)"
      stroke={customColor ? customColor : "#67686D"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.001 14.074 1.997 17"
      stroke={customColor ? customColor : "#67686D"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)