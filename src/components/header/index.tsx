import {Typography} from '@shimeuisuk/simicocobab';
import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import Line from '../line';

interface Props {
  left?: JSX.Element;
  title?: string;
  titleFontSize?: number;
  right?: JSX.Element;
  border?: boolean;
}

const Header = ({
  left,
  title,
  titleFontSize = 16,
  right,
  border = false,
}: Props) => {
  return (
    <>
      <View style={styles.container}>
        {left && <Pressable>{left}</Pressable>}
        {title && (
          <Typography fontSize={titleFontSize} style={styles.title}>
            {title}
          </Typography>
        )}
        {right && <Pressable>{right}</Pressable>}
      </View>

      {border && <Line />}
    </>
  );
};

export default Header;
