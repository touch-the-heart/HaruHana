import React from 'react';
import {Image, ImageProps, View} from 'react-native';
import {sytyles} from './styles';

interface Props {
  url?: ImageProps;
}

const RightImageCard = ({url}: Props) => {
  return (
    <View style={sytyles.constainer}>
      <Image source={url} />
    </View>
  );
};

export default RightImageCard;
