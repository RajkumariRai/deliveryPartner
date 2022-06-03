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

const MessagePop = props => {
  console.log('props=====', props);
  const {open, close} = props;
  return (
    <Provider>
      <Portal>
        <Dialog
          visible={open}
          onDismiss={() => {
            close(!open);
          }}>
          <Dialog.Content>
            <Text>fsdfsdfsdf</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default MessagePop;

const styles = StyleSheet.create({});
