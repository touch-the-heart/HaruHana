import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Slide from '../../components/slide';

const LoginScreen = () => {
  const textContents = [
    '하루에 하나 만큼 늘어나는 우리',
    '매일 새로운 키워드',
    '한눈에 확인할 수 있는 달력',
  ];

  return (
    <View style={styles.container}>
      <Slide dotStyle={styles.dotStyle}>
        {/* 밑에 컴포넌트로 빼기 - 추상화를 위해서 */}
        {textContents.map((content, index) => (
          <View key={index} testID={`${index}`} style={styles.middleContainer}>
            <View style={styles.middleImage} />
            <Text style={styles.middleText}>{content}</Text>
          </View>
        ))}
      </Slide>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Kakao로 계속하기</Text>
        </View>
        <View style={[styles.button, {backgroundColor: 'white'}]}>
          <Text style={styles.buttonText}>Google로 계속하기</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
