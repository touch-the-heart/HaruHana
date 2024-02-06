import {Typography} from '@shimeuisuk/simicocobab';
import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../../assets/globalStyles';

interface Props {
  content: string;
  shadow?: boolean;
  style?: ViewStyle;
}

const LoginButton = ({content, shadow = true, style}: Props) => {
  return (
    <Pressable
      style={[styles.button, shadow && globalStyles.shadow, style && style]}>
      <Typography fontSize={18} style={styles.buttonText}>
        {content}
      </Typography>
    </Pressable>
  );
};

export default LoginButton;
