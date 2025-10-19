import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BG from '../../assets/images/BG.png';

export default function WelcomeScreen({ onComplete }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BG} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>مرحباً بكم في حلول التشطيب السهلة</Text>
            <Text style={styles.subtitle}>
              دع المتخصصين الموثوقين يُنهون شقتك في الساحل الشمالي — بينما تستمتع بصيفك.
            </Text>
          </View>
          
          <View style={styles.buttonsContainer}>
            {/* زر لنبدأ */}
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => {
                if (onComplete) onComplete(); // نخزن ان دي مش أول مرة
                navigation.navigate('Register'); // نروح لصفحة Register
              }}
            >
              <Text style={styles.primaryButtonText}>لنبدأ</Text>
            </TouchableOpacity>
            
            {/* زر تسجيل الدخول */}
            <TouchableOpacity style={styles.secondaryButton}
              onPress={() => navigation.navigate('Login')}
            >
              
              <Text style={styles.secondaryButtonText}>تسجيل الدخول</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: width * 0.06,
    paddingBottom: height * 0.08,
  },
  textContainer: {
    marginBottom: height * 0.06,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: '800',
    fontSize: width > 768 ? 32 : 24,
    textAlign: 'right',
    color: '#000',
    marginBottom: height * 0.02,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: width > 768 ? 20 : 16,
    textAlign: 'right',
    color: '#000',
  },
  buttonsContainer: { width: '100%', alignItems: 'center' },
  primaryButton: {
    backgroundColor: '#8BADB1',
    width: '100%',
    paddingVertical: height * 0.02,
    borderRadius: 10,
    marginBottom: height * 0.015,
  },
  primaryButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: width > 768 ? 20 : 16,
  },
  secondaryButton: {
    backgroundColor: '#FFE4C7',
    width: '100%',
    paddingVertical: height * 0.02,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: '#E68314',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: width > 768 ? 20 : 16,
  },
});
