import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import Slide from '../../components/slide';
import {styles} from './styles';
import {Typography} from '@shimeuisuk/simicocobab';
import ProfileColorCircles from '../../components/profileColorCircles';

const OnboardingScreen = () => {
  const [nickName, setNickName] = useState<string>('');

  return (
    <View style={{height: '100%'}}>
      <Slide
        dotStyle={styles.dotStyle}
        loop={false}
        paginationStyle={{
          top: 25,
          bottom: 0,
          alignItems: 'flex-start',
        }}>
        <View style={{marginTop: 86, alignItems: 'center'}}>
          <Typography
            fontSize={20}
            style={{textAlign: 'center', fontWeight: '700'}}>
            사용할 닉네임을 입력하세요.
          </Typography>

          <TextInput
            maxLength={7}
            placeholder={'닉네임 입력'}
            value={nickName}
            onChangeText={setNickName}
            style={{marginTop: 55, fontSize: 24, fontWeight: '700'}}
          />
        </View>

        <View style={{marginTop: 86, alignItems: 'center'}}>
          <Typography
            fontSize={20}
            style={{textAlign: 'center', fontWeight: '700'}}>
            나를 나타내는 색상을 선택하세요.
          </Typography>
          <Typography
            fontSize={14}
            color={'#858585'}
            style={{textAlign: 'center', fontWeight: '400', marginTop: 10}}>
            프로필 사진 대신 사용됩니다.
          </Typography>

          <View style={{marginTop: 62}}>
            {/* <View
              style={{flexDirection: 'row', justifyContent: 'center', gap: 14}}>
              <Circle width={52} height={52} backgroundColor={'#FFDE30'} />
              <Circle width={52} height={52} backgroundColor={'#FF9635'} />
              <Circle width={52} height={52} backgroundColor={'#FF4444'} />
              <Circle width={52} height={52} backgroundColor={'#FF767E'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 14,
                marginTop: 16,
              }}>
              <Circle width={52} height={52} backgroundColor={'#00C489'} />
              <Circle width={52} height={52} backgroundColor={'#358AFF'} />
              <Circle width={52} height={52} backgroundColor={'#7451FF'} />
              <Circle width={52} height={52} backgroundColor={'#313131'} />
              <Circle width={52} height={52} backgroundColor={'#CBCBCB'} />
            </View> */}
            <ProfileColorCircles />
          </View>
        </View>

        <View style={{width: 100, height: 100}} />
      </Slide>

      <View style={{backgroundColor: '#1E1E1E', paddingVertical: 16}}>
        <Button title={'다음'} color={'#FFFFFF'}></Button>
      </View>
    </View>
  );
};

export default OnboardingScreen;
