import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '@shimeuisuk/simicocobab';
import {styles} from './styles';

const RoleSelectScreen = () => {
  const selectContents = [
    {number: 1, explanation: '코드를 이미 공유 받았어요!'},
    {number: 2, explanation: '코드를 발급 받고 싶어요!'},
  ];

  return (
    <View style={styles.container}>
      <Typography fontSize={20} style={styles.mainText}>
        코드를 공유받으셨나요?
      </Typography>
      <Typography fontSize={16} color={'#858585'} style={styles.subText}>
        {
          '코드를 공유 받은 경우 1번을, 새로 코드를 발급 받으시려면\n 2번을 선택하세요.'
        }
      </Typography>

      <View style={styles.selectContainer}>
        {selectContents.map((content, index) => (
          <>
            <TouchableOpacity activeOpacity={0.7} style={styles.selection}>
              <Typography
                fontSize={30}
                color={'#FFFFFF'}
                style={styles.numberText}>
                {content.number}
              </Typography>

              <Typography fontSize={15} color={'#FFFFFF'}>
                {content.explanation}
              </Typography>
            </TouchableOpacity>

            {index === 0 && <View style={styles.gapLine} />}
          </>
        ))}
      </View>
    </View>
  );
};

export default RoleSelectScreen;
