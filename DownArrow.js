import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownArrow = ({ size = 16, color = '#000' }) => {
  return (
    <Svg width={size} height={size * 0.7} viewBox="0 0 16 12" fill="none">
      <Path
        d="M2 2L8 8L14 2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownArrow;
