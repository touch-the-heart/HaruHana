import React from 'react';
import {ViewStyle} from 'react-native';
import Swiper from 'react-native-swiper';

interface Props {
  children: React.ReactNode;
  wrapperStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  color?: {
    activeColor: string;
    staticColor: string;
  };
}

const defaultDotColor = {
  activeColor: '#1E1E1E',
  staticColor: '#D9D9D9',
};

const Slide = ({
  children,
  wrapperStyle,
  dotStyle,
  color = defaultDotColor,
}: Props) => (
  <Swiper
    style={wrapperStyle}
    loop={true}
    activeDotStyle={[dotStyle, {backgroundColor: color?.activeColor}]}
    dotStyle={[dotStyle, {backgroundColor: color?.staticColor}]}>
    {children}
  </Swiper>
);

export default Slide;
