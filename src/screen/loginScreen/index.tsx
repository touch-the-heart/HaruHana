import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {text} from '../../assets/text';
import Introduction from '../../components/introduction';
import LoginButton from '../../components/buttons/loginButton';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Introduction />

      <View style={styles.buttonContainer}>
        {text.loginButton.map((content, index) => (
          <LoginButton
            key={index}
            content={content}
            style={index === 1 ? styles.bg_white : {}}
          />
        ))}
      </View>
    </View>
  );
};

export default LoginScreen;
