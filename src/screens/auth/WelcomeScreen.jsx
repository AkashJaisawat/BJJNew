import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import IMAGES from '../../assets/images';
import Colors from '../../theme/color';
import {hp, wp} from '../../utility/ResponseUI';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../assets/fonts';
import {normalize} from '../../utility/Helper';

const slides = [
  {
    id: '1',
    title: `Master the Art\nAnytime, Anywhere`,
    description: `From White Belt to Black Belt, We've Got You Covered`,
    image: IMAGES.Pic1,
    btnText: 'Next',
  },
  {
    id: '2',
    title: `Connecting\nPractitioners Worldwide`,
    description: 'Built for the BJJ Community',
    image: IMAGES.Pic2,
    btnText: 'Next',
  },
  {
    id: '3',
    title: `Your Path to\nExcellence Begins Here`,
    description: 'Stay Sharp, Stay Connected.',
    image: IMAGES.Pic3,
    btnText: 'Get Start Now',
  },
];

const WelcomeScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const flatListRef = React.useRef();
  

  const animatedSteppers = React.useRef(
    slides.map(() => new Animated.Value(1)) // Initialize all steppers with scale 1
  ).current;


  const onBtnHandler = () => {
    if (activeIndex < slides.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    } else {
      navigation.replace('SignupScreen');
    }
  };

  useEffect(() => {
    animatedSteppers.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: index === activeIndex ? 1.5 : 1,
        duration: 500, 
        useNativeDriver: true,
      }).start();
    });
  }, [activeIndex]);


  const renderSlide = ({item, index}) => {
    return (
      <View>
        <ImageBackground source={IMAGES.RacBack1} style={styles.image}>
          {index === 2 && (
            <LinearGradient
              colors={[Colors.black, 'transparent']}
              locations={[0, 1]}
              style={styles.topGradient}
            />
          )}

          <Image source={item.image} style={styles.image} />

          <LinearGradient
            colors={['transparent', Colors.black]}
            locations={[0, 1]}
            style={styles.bottomGradient}
          />

          <Image source={IMAGES.RacBack} style={styles.bottomImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.button} onPress={onBtnHandler}>
              <Text style={styles.buttonText}>{item.btnText}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const handleScroll = event => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / wp(100));
    setActiveIndex(pageIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
      />
      <View style={styles.stepContainer}>
              {slides.map((_, stepIndex) => (
                <Animated.View
                  key={stepIndex}
                  style={
                    [
                      styles.stepper , 
                      stepIndex === activeIndex && styles.activeStepper,
                      {
                        transform: [{scale: animatedSteppers[stepIndex]}],
                      },
                    ]
                  }
                />
              ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent : 'center',
    alignItems : 'center',
  },
  image: {
    width: wp(100),
    height: hp((619 / 923) * 100),
    zIndex: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: hp((38 / 923) * 100),
    fontFamily: Fonts.medium,
    color: Colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    // fontWeight : '500'
    marginBottom: hp((4 / 923) * 100),
    lineHeight : hp((40 / 923) * 100)
  },
  description: {
    fontSize: hp((14 / 923) * 100),
    fontFamily: Fonts.thin,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: hp((38 / 923) * 100),
  },
  textContainer: {
    width: wp(100 * (374 / 428)),
    height: hp(100 * (238 / 923)),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  button: {
    // marginTop : '10px',
    backgroundColor: Colors.red,
    // padding: hp(1.2),
    borderRadius: wp(2),
    width: '100%',
    height: hp((56 / 923) * 100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: Fonts.thin,
    color: Colors.white,
    alignSelf: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(100 * (40 / 923)),
    height: hp(100 * (36 / 923)),
  },
  stepper: {
    width: wp(2),
    height: wp(2),
    borderRadius: 100,
    backgroundColor: Colors.white,
    marginHorizontal: wp(0.5),
  },
  activeStepper: {
    width: wp(10),
    height: wp(2),
    borderRadius: 100,
    backgroundColor: Colors.red,
    transform : '',
    marginHorizontal : wp(2.5),
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%',
    height: hp((178/923) * 100),
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp((224/923) *100),
    zIndex: 2,
  },
  bottomImage: {
    width: '100%',
    height: hp(10),
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
});

export default WelcomeScreen;

