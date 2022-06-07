import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Dialog,
  Portal,
  Provider,
  TextInput,
  Button,
  HelperText,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';

const MessagePop = props => {
  const {open, close, title, content, type} = props;
  return (
    <Provider>
      <Portal>
        <Dialog
          visible={open}
          onDismiss={() => {
            close(!open);
          }}>
          <Dialog.Content>
            <View style={styles.centerSet}>
              <View style={[button.commonBackgroundColor, styles.iconBorder]}>
                <Icon name={'check'} size={25} color="#fff" />
              </View>
              <View>
                {title && <Text style={styles.titleColor}>{title}</Text>}
              </View>
              <View>
                <Text style={styles.contentColor}>{content}</Text>
              </View>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default MessagePop;

const styles = StyleSheet.create({
  centerSet: {
    alignItems: 'center',
  },
  iconBorder: {
    padding: 15,
    borderRadius: 50,
  },
  titleColor: {
    color: 'rgb(112,112,112)',
    textAlign: 'center',
    fontSize: 15,
  },
  contentColor: {
    color: '#333',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
