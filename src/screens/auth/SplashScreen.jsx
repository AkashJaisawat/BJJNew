import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../assets/images';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'AuthStack'}],
      });
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.FirstPic} style={styles.image}>
        <Animated.View style={[styles.overlayImage, {opacity: fadeAnim}]}>
          <Image source={IMAGES.Logo} style={styles.logo} />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  overlayImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // marginLeft: -75,
    // marginTop: -75,
    transform: [{translateX: -75}, {translateY: -75}],
  },
  logo: {
    width: width * 225/430,
    height: height  * 197/923,
  },
});

export default SplashScreen;
