import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import BG from '../../assets/images/BG.png';
import eye from '../../assets/images/eye.png';
import arrowleft from '../../assets/images/arrowleft.png';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    console.log('Login with:', formData);
    // Handle login logic here
        navigation.navigate('Homepage');
        // navigation.navigate('ProjectsCarousel');
        //  navigation.replace('HomeDrawer');


  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Handle Google login logic here
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple');
    // Handle Apple login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
    // Handle forgot password navigation here
    navigation.navigate('ForgetPassword');
  };

  return (
    <ImageBackground source={BG} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation?.goBack?.()}
          >
            <Image source={arrowleft} style={styles.backIcon} />
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.header}>تسجيل الدخول</Text>
          
          {/* Subheader */}
          <Text style={styles.subHeader}>مرحبًا بك في حل التشطيب السهل الخاص بك</Text>

          {/* Form */}
          <View style={styles.form}>
            {/* Email or Phone Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="البريد الإلكتروني أو رقم الهاتف"
                placeholderTextColor="#999"
                value={formData.emailOrPhone}
                onChangeText={(text) => handleInputChange('emailOrPhone', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                textAlign="right"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="كلمة المرور"
                  placeholderTextColor="#999"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange('password', text)}
                  secureTextEntry={!showPassword}
                  textAlign="right"
                />
                <TouchableOpacity
                  style={styles.eyeIconButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image source={eye} style={styles.eyeIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity 
              style={styles.forgotPasswordContainer}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>هل نسيت كلمة المرور؟</Text>
            </TouchableOpacity>


          </View>

          {/* Buttons at the end of the screen */}
          <View style={styles.bottomButtonsContainer}>
                        {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>تسجيل الدخول</Text>
            </TouchableOpacity>
            {/* Google Login Button */}
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
              <Text style={styles.googleButtonText}>التسجيل باستخدام جوجل</Text>
            </TouchableOpacity>

            {/* Apple Login Button */}
            <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
              <Text style={styles.appleButtonText}>التسجيل باستخدام آبل</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    justifyContent: 'space-between',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '900',
    fontSize: width < 400 ? 22 : 24,
    textAlign: 'right',
    color: '#000',
    marginTop: 60,
    marginBottom: 8,
  },
  subHeader: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '800',
    fontSize: width < 400 ? 14 : 16,
    lineHeight: 24,
    textAlign: 'right',
    color: '#666',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 16,
    textAlign: 'right',
    backgroundColor: '#fff',
    fontSize: 14,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    // paddingRight: 50,
  },
  eyeIconButton: {
    position: 'absolute',
    left: 16,
    top: 14,
    zIndex: 1,
    padding: 4,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
    fontWeight: '800',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8BADB1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  bottomButtonsContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFE4C7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  googleButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '600',
    fontSize: 14,
    color: '#E68314',
  },
  appleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFE4C7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '600',
    fontSize: 14,
    color: '#E68314',
  },
});