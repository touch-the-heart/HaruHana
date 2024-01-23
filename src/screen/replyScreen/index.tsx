import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Line from '../../components/line';
import {Typography} from '@shimeuisuk/simicocobab';
import {globalStyles} from '../../assets/globalStyles';

const ReplyScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        left={<Icon name="arrow-back-ios" size={20} color={'#000000'} />}
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
              <View style={styles.leftImage} />
              <View style={styles.rightImage} />
            </View>
          </View>

          <Line />

          {/* <FlatList style={{height: 195, borderWidth: 10}} /> */}
        </ScrollView>

        <View style={[styles.bottomContainer, globalStyles.topShadow]}>
          <TextInput
            style={styles.input}
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
