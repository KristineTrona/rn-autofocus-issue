import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function OnboardingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Go to Login screen</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'pink',
    marginTop: 20,
    padding: 16,
  },
});
