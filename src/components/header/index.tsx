import {Typography} from '@shimeuisuk/simicocobab';
import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import Line from '../line';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  left?: JSX.Element;
  leftOnpress?: () => void;
  title?: string;
  titleFontSize?: number;
  right?: JSX.Element;
  rightOnpress?: () => void;
  border?: boolean;
}

const Header = ({
  left,
  leftOnpress,
  title,
  titleFontSize = 16,
  right,
  rightOnpress,
  border = false,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, {marginTop: insets.top}]}>
        {left && <Pressable onPress={leftOnpress}>{left}</Pressable>}
        {title && (
          <Typography fontSize={titleFontSize} style={styles.title}>
            {title}
          </Typography>
        )}
        {right && <Pressable onPress={rightOnpress}>{right}</Pressable>}
      </View>

      {border && <Line />}
    </>
  );
};

export default Header;
