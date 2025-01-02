import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LoginForm from './components/LoginForm';
import IMAGES from '../../assets/images';
import {Fonts} from '../../assets/fonts';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={IMAGES.LoginBack}
        style={{height: '100%', width: '100%'}}>
        <LoginForm />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
});
