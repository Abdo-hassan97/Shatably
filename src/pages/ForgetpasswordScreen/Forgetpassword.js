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
import arrowleft from '../../assets/images/arrowleft.png';

const { width, height } = Dimensions.get('window');

export default function ForgetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleRecoverAccount = () => {
    console.log('Recover account with email:', email);
    // Handle account recovery logic here
    navigation.navigate('PasswordReset');
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
          <Text style={styles.header}>هل نسيت كلمة المرور؟</Text>
          
          {/* Subheader */}
          <Text style={styles.subHeader}>
            من فضلك قدم لنا عنوان البريد الإلكتروني المرتبط بحسابك. سوف نرسل لك بريدًا إلكترونيًا لمساعدتك في إعادة تعيين كلمة المرور.
          </Text>

          {/* Form */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="البريد الإلكتروني"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                textAlign="right"
              />
            </View>
          </View>

          {/* Button at the end of the screen */}
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.recoverButton} onPress={handleRecoverAccount}>
              <Text style={styles.recoverButtonText}>استرجاع الحساب</Text>
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
  bottomButtonContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 5,
  },
  recoverButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8BADB1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  recoverButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
});