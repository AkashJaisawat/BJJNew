import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SignupForm from './components/SignupForm';
import IMAGES from '../../assets/images';
import Colors from '../../theme/color';
import {Fonts} from '../../assets/fonts';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={IMAGES.SignupBack}
        style={{height: '100%', width: '100%'}}>
        <SignupForm />
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  
});
