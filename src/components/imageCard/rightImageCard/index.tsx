import React from 'react';
import {Image, ImageProps, Pressable} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../../assets/globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  url?: ImageProps;
}

const RightImageCard = ({url}: Props) => {
  return (
    <Pressable
      style={[
        styles.constainer,
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

export default RightImageCard;
