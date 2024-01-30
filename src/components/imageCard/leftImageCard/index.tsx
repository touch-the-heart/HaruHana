import React from 'react';
import {Image, ImageProps, View} from 'react-native';
import {sytyles} from './styles';

interface Props {
  url?: ImageProps;
}

const LeftImageCard = ({url}: Props) => {
  return (
    <View style={sytyles.container}>
      <Image source={url} />
    </View>
  );
};

export default LeftImageCard;
