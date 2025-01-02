import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IMAGES from '../../assets/images';
import { hp, wp } from '../../utility/ResponseUI';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../assets/fonts';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View>
      <Image source={IMAGES.Logo} style={styles.logoView} />
       <View>
       <TouchableOpacity style={styles.signUpButton} onPress={() => {
        navigation.navigate('SplashScreen');
      }}>
        <Text style={styles.signUpButtonText}>Log Out</Text>
      </TouchableOpacity>
       </View>
       </View>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      logoView: {
        width: wp((195 / 430) * 100),
        height: hp((171 / 932) * 100),
      },
      signUpButton: {
        backgroundColor: 'red',
        height: hp((56 / 932) * 100),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop : hp((32/932)*100)
      },
      signUpButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: Fonts.normal,
      },
})