import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Dialog,
  Portal,
  Provider,
  TextInput,
  Button,
  HelperText,
} from 'react-native-paper';
import {button} from '../CommonStyles/Index';

const RejectOrderDailog = props => {
  const {open, close} = props;
  const [rejectOrder, setRejectOrder] = useState('');
  const [rejectOrderError, setRejectOrderError] = useState(false);

  const orderRejectHandle = () => {
    if (!rejectOrder) {
      setRejectOrderError(true);
      return;
    }
  };
  return (
    <Provider>
      <Portal>
        <Dialog visible={open} onDismiss={close}>
          <Dialog.Content>
            <View>
              <Text style={styles.dailogTitleColor}>
                Write a specific reason to reject order
              </Text>
              <View>
                <TextInput
                  mode="Flat"
                  style={button.commonTextInput}
                  placeholder="Type something here"
                  placeholderTextColor="rgb(211, 211, 211)"
                  onChangeText={value => {
                    setRejectOrder(value.trim());
                    setRejectOrderError(false);
                  }}
                />
                {rejectOrderError && (
                  <HelperText type="error" visible={rejectOrderError}>
                    Enter Type Here
                  </HelperText>
                )}
              </View>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              mode={'contained'}
              style={button.commonButton}
              onPress={() => {
                orderRejectHandle();
              }}>
              send
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default RejectOrderDailog;

const styles = StyleSheet.create({
  dailogTitleColor: {
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
    paddingBottom: 20,
  },
});
