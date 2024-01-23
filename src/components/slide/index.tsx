import React from 'react';
import {ViewStyle} from 'react-native';
import Swiper from 'react-native-swiper';

interface Props {
  children: React.ReactNode;
  wrapperStyle?: ViewStyle;
  loop?: boolean;
  dotStyle?: ViewStyle;
  dotColor?: {
    activeColor: string;
    staticColor: string;
  };
  paginationStyle?: ViewStyle;
}

const defaultDotColor = {
  activeColor: '#1E1E1E',
  staticColor: '#D9D9D9',
};

const Slide = ({
  children,
  wrapperStyle,
  loop = true,
  dotStyle,
  dotColor = defaultDotColor,
  paginationStyle,
}: Props) => (
  <Swiper
    paginationStyle={paginationStyle}
    style={wrapperStyle}
    loop={loop}
    activeDotStyle={[dotStyle, {backgroundColor: dotColor?.activeColor}]}
    dotStyle={[dotStyle, {backgroundColor: dotColor?.staticColor}]}>
    {children}
  </Swiper>
);

export default Slide;
