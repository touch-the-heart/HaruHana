import React from 'react';
import {View, ViewStyle} from 'react-native';

interface Props {
  height?: number;
  color?: string;
  style?: ViewStyle;
}

const Line = ({height = 1, color = '#F3F3F3', style}: Props) => {
  return <View style={[{borderWidth: height, borderColor: color}, style]} />;
};

export default Line;
