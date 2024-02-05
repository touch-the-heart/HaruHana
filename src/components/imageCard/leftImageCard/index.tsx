import React from 'react';
import {Image, ImageProps, Pressable} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../../assets/globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  url?: ImageProps;
}

const LeftImageCard = ({url}: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        url ?? styles.emptyContainer,
        url ?? globalStyles.shadow,
      ]}>
      {url ? (
        <Image source={url} />
      ) : (
        <Icon name={'plus'} size={36} color={'#C9C9C9'} style={{zIndex: 2}} />
      )}
    </Pressable>
  );
};

export default LeftImageCard;
