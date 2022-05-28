import Toast from 'react-native-toast-message';
export const blankValidator = (validators, key) => {
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
     
 } 
  catch (error) {
     console.log("Error in validation", error)
}
};

export const showMessage = (error, message) => {
    Toast.show({
      type: error,
      text2: message,
    });
  };