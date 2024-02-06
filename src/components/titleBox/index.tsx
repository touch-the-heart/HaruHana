import React, {SetStateAction, useState} from 'react';
import {TextInput, View} from 'react-native';
import {globalStyles} from '../../assets/globalStyles';
import {Typography} from '@shimeuisuk/simicocobab';
import {styles} from './styles';

interface Props {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
}

const TiltleBox = ({title, setTitle}: Props) => {
  const [isInputTouched, setIsInputTouched] = useState<boolean>(false);

  const date = new Date();
  const todayDate = date.getDate();
  const todayMonth = date.getMonth() + 1;

  return (
    <View style={[styles.container, globalStyles.shadow]}>
      <Typography fontSize={12} color={'#858585'} style={styles.date}>
        {`${todayMonth}월 ${todayDate}일`}
      </Typography>

      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder={isInputTouched ? '' : 'Today is?'}
        style={styles.title}
        maxLength={11}
        onFocus={() => setIsInputTouched(true)}
        onBlur={() => setIsInputTouched(false)}
      />
    </View>
  );
};

export default TiltleBox;
