import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../../assets/images';
import Colors from '../../../theme/color';
import {hp, wp} from '../../../utility/ResponseUI';
import {Fonts} from '../../../assets/fonts';
import LinearGradient from 'react-native-linear-gradient';

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  

  return (
      <View style={styles.container}>
        <View style={styles.formlogoView}>
          <Image source={IMAGES.Logo} style={styles.logoView} />
          <View
            style={{
              height: hp((156 / 932) * 100),
              width: '100%',
              justifyContent: 'space-between',
              marginTop : hp((50/932*100)),
            }}>
            <TextInput
              // containerStyle={styles.inputContainer}
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
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
            <TouchableOpacity>
              <Text style={styles.forgetPasswordText}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUpButton} onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
            <Text style={styles.signUpButtonText}>Login Now</Text>
          </TouchableOpacity>
          <View
            style={{
              height: hp((172 / 932) * 100),
              justifyContent: 'space-between',
              width: '100%',
              marginTop : hp((30/932*100)),
            }}>
            <View>
              <Text style={styles.orText}>------------or------------</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={IMAGES.Google} />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={IMAGES.Apple} />
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: hp((98 / 932) * 100)}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.loginText}>
              Don't have account? <Text style={styles.loginLink}>SignUp</Text>
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
    opacity : '50%'
  },
  gradientBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  formlogoView: {
    width: wp((327 / 430) * 100),
    height: hp((749 / 932) * 100),
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop : hp((70/932)*100),
  },
  logoView: {
    width: wp((195 / 430) * 100),
    height: hp((171 / 932) * 100),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  input: {
    height: hp((56 / 932) * 100),
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    width: '100%',
    fontFamily : Fonts.normal
  },
  forgetPasswordText: {
    color: Colors.white,
    textAlign: 'right',
    fontFamily : Fonts.normal
  },
  signUpButton: {
    backgroundColor: Colors.red,
    height: hp((56 / 932) * 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    marginTop : hp((32/932)*100)
  },
  signUpButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.normal,
  },
  orText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily : Fonts.normal
  },
  socialButton: {
    backgroundColor: Colors.white,
    height: hp((56 / 932) * 100),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    marginVertical: hp((7 / 932) * 100),
  },
  socialButtonText: {
    fontFamily: Fonts.normal,
    fontSize: 16,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  loginLink: {
    color: '#FF3D00',
    fontWeight: Fonts.normal,
  },
  inputWithIcon: {
    flex: 1,
    height: hp((56 / 919) * 100),
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
});

export default LoginForm;
