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

  const savePasswordHandle = () => {
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
  };
  return (
    <Provider>
      <Portal>
        <Dialog visible={open} onDismiss={close}>
          <Dialog.Title style={styles.passwordTitle}>
            Change Password
          </Dialog.Title>
          <Dialog.Content>
            <View>
              <View>
                <TextInput
                  style={styles.textInput}
                  label="Enter Old Password"
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
              <View>
                <TextInput
                  style={styles.textInput}
                  label="Enter New Password"
                  secureTextEntry={newPasswordVisible}
                  right={
                    <TextInput.Icon
                      name={newPasswordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setNewPasswordVisible(!newPasswordVisible)}
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
              <View>
                <TextInput
                  style={styles.textInput}
                  label="Confirm New Password"
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
                <Button
                  mode="contained"
                  style={styles.saveButtonColor}
                  onPress={() => {
                    savePasswordHandle();
                  }}>
                  Save
                </Button>
              </View>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};
const styles = StyleSheet.create({
  passwordTitle: {
    color: '#26ae61',
    fontSize: 14,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    margin: 4,
    color: '#26ae61',
  },
  saveButtonColor: {
    backgroundColor: '#26ae61',
    color: '#fff',
    borderRadius: 30,
    fontWeight: '700',
  },
});
export default ChangePassword;
