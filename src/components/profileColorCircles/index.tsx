import React, {useState} from 'react';
import {View} from 'react-native';
import ColorCircle from './colorCircle';

const ProfileColorCircles = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const topColors = [
    {color: 'yellow', colorCode: '#FFDE30'},
    {color: 'orange', colorCode: '#FF9635'},
    {color: 'red', colorCode: '#E84444'},
    {color: 'pink', colorCode: '#FF767E'},
  ];
  const bottomColors = [
    {color: 'green', colorCode: '#00C489'},
    {color: 'blue', colorCode: '#358AFF'},
    {color: 'purple', colorCode: '#7451FF'},
    {color: 'black', colorCode: '#313131'},
    {color: 'gray', colorCode: '#CBCBCB'},
  ];

  const selectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 14,
        }}>
        {topColors.map((color, index) => (
          <ColorCircle
            key={index}
            color={color.colorCode}
            onPress={() => selectColor(color.colorCode)}
            selectedColor={selectedColor}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 14,
          marginTop: 16,
        }}>
        {bottomColors.map((color, index) => (
          <ColorCircle
            key={index}
            color={color.colorCode}
            onPress={() => selectColor(color.colorCode)}
            selectedColor={selectedColor}
          />
        ))}
      </View>
    </>
  );
};

export default ProfileColorCircles;
