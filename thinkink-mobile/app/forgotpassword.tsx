import React from 'react'
import { View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

function forgotpassword() {
  return (
  <View style={styles.container}>
    <Text>Forgot Password</Text>
    <TextInput
      label="Email"
      placeholder="Enter your email"
      autoCapitalize="none"
      keyboardType="email-address"
      mode="outlined"
    />
    <Button  style={styles.button}mode="contained" onPress={() => console.log('Reset Password')}>
      Reset Password
    </Button>
  </View>
  )
}

export default forgotpassword
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    padding: 16,
    justifyContent: 'center',
  },
  button:{
    marginTop: 16,
    backgroundColor: "#6366f1",
  }
});