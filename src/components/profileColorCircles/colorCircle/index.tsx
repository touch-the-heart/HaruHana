import React from 'react';
import {Pressable, View} from 'react-native';
import {Circle} from '@shimeuisuk/simicocobab';

interface Props {
  color: string;
  onPress: () => void;
  selectedColor: string;
}

const ColorCircle = ({color, onPress, selectedColor}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Circle width={52} height={52} backgroundColor={color}>
        {selectedColor === color && (
          <View
            style={{width: 10, height: 10, backgroundColor: 'white'}}></View>
        )}
      </Circle>
    </Pressable>
  );
};

export default ColorCircle;
