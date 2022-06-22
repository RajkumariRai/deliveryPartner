import Toast from 'react-native-toast-message';
export const blankValidator = validators => {
  try {
    if (
      validators === undefined ||
      validators === '' ||
      validators === null ||
      validators == {} ||
      validators == -1
    ) {
      return false;
    }
    return true;
  } catch (error) {
    console.log('Error in validation', error);
  }
};

export const emailValidator = email => {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(regEx)) {
    return false;
  }
  return true;
};
export const nameValidation = name => {
  const regEx = '[a-zA-Z]+\\.?';
  if (!name.match(regEx)) {
    return false;
  }
  return true;
};
export const showMessage = (error, message) => {
  Toast.show({
    type: error,
    text2: message,
  });
};
