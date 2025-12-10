import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const PlusIcon = ({ size = 20, color = '#0066ff' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2" fill="none" />
      <Path
        d="M12 7V17M7 12H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default PlusIcon;
