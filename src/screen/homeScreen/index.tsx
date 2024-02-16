import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import Header from '../../components/header';
import {Typography} from '@shimeuisuk/simicocobab';
import LeftImageCard from '../../components/imageCard/leftImageCard';
import RightImageCard from '../../components/imageCard/rightImageCard';
import TiltleBox from '../../components/titleBox';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [frameModalVisible, setFrameModalVisible] = useState<boolean>(false);

  const navigation = useNavigation();

  const headerDate = (
    <Typography fontSize={13} style={styles.headerDate}>
      {'2218일째'}
    </Typography>
  );

  return (
    <ScrollView style={styles.container}>
      <Header title={'의석 ❤️ 교석'} right={headerDate} />

      <TiltleBox title={title} setTitle={setTitle} />

      <View style={styles.imageContainer}>
        <LeftImageCard />
        <RightImageCard />
      </View>

      <View style={styles.bottomContainer}>
        <Pressable onPress={() => setFrameModalVisible(!frameModalVisible)}>
          <IconC name={'collage'} color={'#969696'} size={25} />
        </Pressable>

        <Pressable
          style={styles.replyButton}
          onPress={() => navigation.navigate('Reply')}>
          <Typography fontSize={13} style={styles.replyText} color={'#969696'}>
            {'댓글'}
          </Typography>
          <Icon name={'chevron-right'} color={'#969696'} size={15} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
