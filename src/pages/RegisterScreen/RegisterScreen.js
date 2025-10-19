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

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = () => {
    console.log('Register with:', formData);
    // Handle registration logic here
    navigation?.navigate?.('Login');
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
    // Handle Google sign up logic here
  };

  const handleAppleSignUp = () => {
    console.log('Sign up with Apple');
    // Handle Apple sign up logic here
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
          <Text style={styles.header}>أنشئ حسابك</Text>
          
          {/* Subheader */}
          <Text style={styles.subHeader}>مرحبًا بك في حل التشطيب السهل الخاص بك</Text>

          {/* Form */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="أدخل بريدك الإلكتروني"
                placeholderTextColor="#999"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                textAlign="right"
              />
            </View>

            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="أدخل رقم هاتفك"
                placeholderTextColor="#999"
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                keyboardType="phone-pad"
                textAlign="right"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="أدخل كلمة المرور"
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

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="أكد كلمة المرور"
                  placeholderTextColor="#999"
                  value={formData.confirmPassword}
                  onChangeText={(text) => handleInputChange('confirmPassword', text)}
                  secureTextEntry={!showConfirmPassword}
                  textAlign="right"
                />
                <TouchableOpacity
                  style={styles.eyeIconButton}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Image source={eye} style={styles.eyeIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Register Button */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>إنشاء حساب جديد</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>أو</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Sign Up Button */}
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
              <Text style={styles.googleButtonText}>التسجيل باستخدام جوجل</Text>
            </TouchableOpacity>

            {/* Apple Sign Up Button */}
            <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignUp}>
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
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
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
    fontWeight: '700',
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
  label: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'right',
    color: '#333',
    marginBottom: 8,
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
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8BADB1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  registerButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontSize: 14,
    color: '#666',
    marginHorizontal: 16,
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