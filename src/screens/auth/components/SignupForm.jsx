import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../../assets/images';
import Colors from '../../../theme/color';
import {hp, wp} from '../../../utility/ResponseUI';
import {Fonts} from '../../../assets/fonts';

const SignUpForm = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[ styles.formlogoView]}>
        <Image source={IMAGES.Logo} style={styles.logoView} />
        <View style={styles.formView}>
          <View style={styles.inputView}>
            <TextInput
              containerStyle={styles.inputContainer}
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="gray"
              value={fullName}
              onChangeText={setFullName}
            />

            <TextInput
              containerStyle={styles.inputContainer}
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Password"
                placeholderTextColor="gray"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image
                  source={passwordVisible ? IMAGES.OpenEye : IMAGES.CloseEye}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Confirm Password"
                placeholderTextColor="gray"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!confirmPasswordVisible}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }>
                <Image
                  source={
                    confirmPasswordVisible ? IMAGES.OpenEye : IMAGES.CloseEye
                  }
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>
            Already have account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formlogoView: {
    width: wp((328 / 430) * 100),
    height: hp((711 / 919) * 100),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems : 'center',
  },
  logoView: {
    width: wp((195 / 430) * 100),
    height: hp((171 / 919) * 100),
  },
  formView: {
    width: '100%',
    height: hp((352 / 919) * 100),
  },
  inputView: {
    height: hp((272 / 919) * 100),   
    justifyContent : 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  inputWithIcon: {
    flex: 1,
    height: hp((56 / 919) * 100),
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  input: {
    height: hp((56 / 919) * 100),
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  signUpButton: {
    backgroundColor: Colors.red,
    height: hp((56 / 919) * 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop : hp((20/919) * 100) 
  },
  signUpButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.normal,
  },
  loginLink: {
    color: Colors.red,
    fontFamily: Fonts.normal,
  },
  loginText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.normal,
  },
});

export default SignUpForm;
