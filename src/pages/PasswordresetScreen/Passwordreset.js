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

export default function ResetPasswordScreen({ navigation }) {
  const [formData, setFormData] = useState({
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

  const handleResetPassword = () => {
    console.log('Reset password with:', formData);
    // Handle password reset logic here
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
          <Text style={styles.header}>من فضلك أعِد تعيين كلمة المرور</Text>
          
          {/* Subheader */}
          <Text style={styles.subHeader}>
            من فضلك أدخل كلمة المرور الجديدة في المربع التالي
          </Text>

          {/* Form */}
          <View style={styles.form}>
            {/* Password Input */}
            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="أدخل كلمة المرور الجديدة"
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
                  placeholder="أعد إدخال كلمة المرور الجديدة"
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
          </View>

          {/* Button at the end of the screen */}
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
              <Text style={styles.resetButtonText}>إعادة تعيين كلمة المرور</Text>
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
  inputLabel: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontSize: 14,
    color: '#000',
    textAlign: 'right',
    marginBottom: 8,
    fontWeight: '600',
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

  eyeIconButton: {
    position: 'absolute',
    left: 16,
    top: 14,
    zIndex: 1,
    padding: 4,
  },
  bottomButtonContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  resetButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8BADB1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  resetButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
});