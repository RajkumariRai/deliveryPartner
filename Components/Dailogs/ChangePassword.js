import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
import MessagePop from './MessagePop';

const ChangePassword = props => {
  const {open, close} = props;
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [newPasswordVisible, setNewPasswordVisible] = useState(true);
  const [oldPassword, setoldPassword] = useState('');
  const [oldPasswordError, setoldPasswordError] = useState(false);
  const [newPassword, setnewPassword] = useState('');
  const [newPasswordError, setnewPasswordError] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [messageShow, setMessageShow] = useState(false);

  const savePasswordHandle = () => {
    try {
      if (!oldPassword) {
        setoldPasswordError(true);
        return;
      }
      if (!newPassword) {
        setnewPasswordError(true);
        return;
      }
      if (!confirmPassword || confirmPassword !== newPassword) {
        setconfirmPasswordError(true);
        return;
      }
      // close();
      setMessageShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Provider>
        <Portal>
          <Dialog
            style={{borderRadius: 20}}
            visible={open}
            onDismiss={() => {
              close(!open);
            }}>
            <Dialog.Content>
              <View>
                <Text
                  style={[
                    button.commonColor,
                    {fontSize: 14, fontWeight: '600', paddingBottom: 15},
                  ]}>
                  Change Password
                </Text>
                <View style={styles.paddingbottomInput}>
                  <Text style={button.commonLabalColor}>
                    Enter Old Password
                  </Text>
                  <TextInput
                    mode="outlined"
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
                    placeholder="Enter Old Password"
                    value={oldPassword}
                    onChangeText={text => {
                      setoldPassword(text);
                      setoldPasswordError(false);
                    }}
                  />
                  {oldPasswordError && (
                    <HelperText type="error" visible={oldPasswordError}>
                      Enter Old Password
                    </HelperText>
                  )}
                </View>
                <View style={styles.paddingbottomInput}>
                  <Text style={button.commonLabalColor}>
                    Enter New Password
                  </Text>
                  <TextInput
                    mode="outlined"
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
                    placeholder="Enter New Password"
                    secureTextEntry={newPasswordVisible}
                    right={
                      <TextInput.Icon
                        name={newPasswordVisible ? 'eye' : 'eye-off'}
                        onPress={() =>
                          setNewPasswordVisible(!newPasswordVisible)
                        }
                      />
                    }
                    value={newPassword}
                    onChangeText={text => {
                      setnewPassword(text);
                      setnewPasswordError(false);
                    }}
                  />
                  {newPasswordError && (
                    <HelperText type="error" visible={newPasswordError}>
                      Enter New Password
                    </HelperText>
                  )}
                </View>
                <View style={styles.paddingbottomInput}>
                  <Text style={button.commonLabalColor}>
                    Confirm New Password
                  </Text>
                  <TextInput
                    mode="outlined"
                    style={button.commonTextInput}
                    left={
                      <TextInput.Icon
                        name="key-variant"
                        color={button.commonColor.color}
                      />
                    }
                    theme={{roundness: 20}}
                    placeholder="Confirm New Password"
                    secureTextEntry={confirmPasswordVisible}
                    right={
                      <TextInput.Icon
                        name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                        onPress={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                      />
                    }
                    value={confirmPassword}
                    onChangeText={text => {
                      setconfirmPassword(text);
                      setconfirmPasswordError(false);
                    }}
                  />
                  {confirmPasswordError && (
                    <HelperText type="error" visible={confirmPasswordError}>
                      Password Mismatch
                    </HelperText>
                  )}
                </View>
                <View style={{paddingTop: 15}}>
                  <TouchableOpacity
                    onPress={() => {
                      savePasswordHandle();
                    }}>
                    <View style={button.commonActiveButtonHeight}>
                      <Text style={button.commonActiveTextDeco}>Save</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </Provider>
      {messageShow && (
        <MessagePop
          open={messageShow}
          close={setMessageShow}
          title={'Your password has been successfully changed'}
          content={''}
          type={'success'}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  saveButtonColor: {
    color: '#fff',
    borderRadius: 30,
    fontWeight: '700',
  },
  paddingbottomInput: {
    paddingBottom: 10,
  },
});
export default ChangePassword;
