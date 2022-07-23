import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default Login;
