import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Splash from './components/Splash';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import RegisterScreen from './pages/RegisterScreen/RegisterScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import ForgetPasswordScreen from './pages/ForgetpasswordScreen/Forgetpassword';
import ResetPasswordScreen from './pages/PasswordresetScreen/Passwordreset';
import HomepageScreen from './pages/HomeScreen/HomepageScreen';
import ProjectsCarousel from './pages/ProjectsCarousel/ProjectsCarousel';
import ProjectsScreen from './pages/ProjectsScreen/ProjectsScreen';
import TasksScreen from './pages/TasksScreen/TasksScreen';
import SingleTaskScreen from './pages/SingleTaskScreen/SingleTaskScreen';
import EditProjectScreen from './pages/EditProjectScreen/EditProjectScreen';
import PaymentScreen from './pages/PaymentScreen/PaymentScreen';
import HomeDetailsScreen from './pages/HomeDetailsScreen/HomeDetailsScreen';
import HomeDetailsScreen2 from './pages/HomeDetailsScreen2/HomeDetailsScreen2';
import MapScreen from './pages/MapScreen/MapScreen';
import HomeInfoScreen from './pages/HomeInfoScreen/HomeInfoScreen';
import CompaniesScreen from './pages/CompaniesScreen/CompaniesScreen';
import SingleCompanyScreen from './pages/SingleCompanyScreen/SingleCompanyScreen';


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const hasOpened = await AsyncStorage.getItem('hasOpened');
        if (hasOpened === null) {
          setFirstTime(true);
          await AsyncStorage.setItem('hasOpened', 'true');
        }
      } catch (error) {
        console.log('Error checking first time:', error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    checkFirstTime();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstTime ? (
          <Stack.Screen name="Welcome">
            {props => <WelcomeScreen {...props} onComplete={() => setFirstTime(false)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}

        {/* Screens available always */}
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="PasswordReset" component={ResetPasswordScreen} />
        <Stack.Screen name="Homepage" component={HomepageScreen} />
        <Stack.Screen name="ProjectsCarousel" component={ProjectsCarousel} />
        <Stack.Screen name="ProjectsScreen" component={ProjectsScreen} />
        <Stack.Screen name="TasksScreen" component={TasksScreen} />
        <Stack.Screen name="SingleTaskScreen" component={SingleTaskScreen} />
        <Stack.Screen name="EditProjectScreen" component={EditProjectScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="HomeDetailsScreen" component={HomeDetailsScreen} />
        <Stack.Screen name="HomeDetailsScreen2" component={HomeDetailsScreen2} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="HomeInfoScreen" component={HomeInfoScreen} />
        <Stack.Screen name="CompaniesScreen" component={CompaniesScreen} />
        <Stack.Screen name="SingleCompanyScreen" component={SingleCompanyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Simple HomeScreen Component
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
