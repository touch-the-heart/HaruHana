import React from 'react';
import Slide from '../slide';
import {styles} from './styles';
import {text} from '../../assets/text';
import {View} from 'react-native';
import {Typography} from '@shimeuisuk/simicocobab';

const Introduction = () => {
  return (
    <Slide dotStyle={styles.dotStyle}>
      {text.introduction.map((content, index) => (
        <View key={index} testID={`${index}`} style={styles.middleContainer}>
          <View style={styles.middleImage} />
          <Typography fontSize={22} style={styles.middleText}>
            {content}
          </Typography>
        </View>
      ))}
    </Slide>
  );
};

export default Introduction;
