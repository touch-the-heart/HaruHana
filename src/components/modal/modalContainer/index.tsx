import React, {SetStateAction} from 'react';
import {Modal, View, ViewStyle} from 'react-native';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  animationType?: 'slide' | 'none' | 'fade';
  style?: ViewStyle;
}

const ModalContainer = ({
  visible,
  setVisible,
  children,
  animationType = 'slide',
  style,
}: Props) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType={animationType}
      transparent={true}>
      <View style={style}>{children}</View>
    </Modal>
  );
};

export default ModalContainer;
