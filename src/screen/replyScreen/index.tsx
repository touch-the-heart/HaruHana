import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Line from '../../components/line';
import {Circle, Typography} from '@shimeuisuk/simicocobab';
import {globalStyles} from '../../assets/globalStyles';
import LeftImageCard from '../../components/imageCard/leftImageCard';
import RightImageCard from '../../components/imageCard/rightImageCard';
import {useNavigation} from '@react-navigation/native';

const ReplyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        left={<Icon name="arrow-back-ios" size={20} color={'#000000'} />}
        leftOnpress={() => navigation.goBack()}
        title={'꽃'}
        right={<Iconn name="dots-vertical" size={20} color={'#000000'} />}
        border={true}
      />

      <KeyboardAvoidingView
        style={globalStyles.flexOne}
        behavior={Platform.select({ios: 'padding'})}>
        <ScrollView style={globalStyles.flexOne}>
          <View style={styles.middleContainer}>
            <View style={styles.imageContainer}>
              <LeftImageCard />
              <RightImageCard />
            </View>
          </View>

          <Line />

          <Pressable
            onPress={() => console.log('터치이')}
            style={{marginTop: 20, paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Circle backgroundColor={'#358AFF'} width={18} height={18} />
              <Typography
                fontSize={13}
                style={{fontWeight: '700', textAlign: 'center', marginLeft: 8}}>
                {'심의석'}
              </Typography>
              <Typography
                fontSize={13}
                color={'#B0B0B0'}
                style={{fontWeight: '400', textAlign: 'center', marginLeft: 8}}>
                {'2시간'}
              </Typography>
            </View>

            <Text
              fontSize={13}
              numberOfLines={2}
              style={{fontWeight: '400', marginTop: 8}}>
              {
                '안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕'
              }
            </Text>
          </Pressable>

          <View style={{marginTop: 20, paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Circle backgroundColor={'#358AFF'} width={18} height={18} />
              <Typography
                fontSize={13}
                style={{fontWeight: '700', textAlign: 'center', marginLeft: 8}}>
                {'심의석'}
              </Typography>
              <Typography
                fontSize={13}
                color={'#B0B0B0'}
                style={{fontWeight: '400', textAlign: 'center', marginLeft: 8}}>
                {'2시간'}
              </Typography>
            </View>

            <Text
              fontSize={13}
              numberOfLines={2}
              style={{fontWeight: '400', marginTop: 8}}>
              {
                '안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕'
              }
            </Text>
          </View>

          <View
            style={{marginTop: 20, marginBottom: 15, paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Circle backgroundColor={'#358AFF'} width={18} height={18} />
              <Typography
                fontSize={13}
                style={{fontWeight: '700', textAlign: 'center', marginLeft: 8}}>
                {'심의석'}
              </Typography>
              <Typography
                fontSize={13}
                color={'#B0B0B0'}
                style={{fontWeight: '400', textAlign: 'center', marginLeft: 8}}>
                {'2시간'}
              </Typography>
            </View>

            <Text
              fontSize={13}
              numberOfLines={2}
              style={{fontWeight: '400', marginTop: 8}}>
              {
                '안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕'
              }
            </Text>
          </View>
        </ScrollView>

        <View style={[styles.bottomContainer, globalStyles.topShadow]}>
          <TextInput
            style={styles.input}
            maxLength={52}
            placeholder={'댓글을 입력해주세요.'}
          />

          <Pressable style={styles.button}>
            <Typography
              fontSize={13}
              color={'#FFFFFF'}
              style={{fontWeight: '400', textAlign: 'center'}}>
              등록
            </Typography>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ReplyScreen;
