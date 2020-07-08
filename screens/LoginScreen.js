import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

export default function LoginScreen({navigation}) {
  /**
   * The issue is caused here, because we are calling the Keyboard.dismiss() before navigating
   * (otherwise the keyboard stays open, which is caused by adding the 'animationEnabled': false on the navigator)
   */
  const navigateToApp = () => {
    Keyboard.dismiss();
    navigation.navigate('App');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Login Screen</Text>
      <TextInput style={styles.textInputStyle} autoFocus />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigateToApp()}>
        <Text>Go To App</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    backgroundColor: 'lightgrey',
    width: 200,
    height: 40,
    padding: 12,
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: 'pink',
    marginTop: 20,
    padding: 16,
  },
});
