import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const house = require('../assets/images/house1.png');
const building = require('../assets/images/building.png');
const menu = require('../assets/images/Menu1.png');
const menu2 = require('../assets/images/Menu2.png');
const shoppingbag = require('../assets/images/shopping-bag.png');
const user = require('../assets/images/user.png');

export default function BottomTabs() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Account', label: 'الحساب', icon: user, screen: 'AccountScreen' },
    { name: 'Shop', label: 'المتجر', icon: shoppingbag, screen: 'ShopScreen' },
    {
      name: 'Projects',
      label: 'المشاريع',
      icon: menu,
      iconActive: menu2,
      screen: 'ProjectsScreen',
      isBig: true,
    },
    { name: 'Companies', label: 'الشركات', icon: building, screen: 'CompaniesScreen' },
    { name: 'Homepage', label: 'الرئيسية', icon: house, screen: 'Homepage' },
  ];

  // ✅ Dynamic background color
  const isProjectsActive = route.name === 'ProjectsScreen';
  const isTasksActive = route.name === 'TasksScreen';
  const isSingleTaskActive = route.name === 'SingleTaskScreen'; // Add this
  const tabBarBackgroundColor = isProjectsActive || isTasksActive || isSingleTaskActive ? '#FAFAFA' : '#FFFFFF';

  return (
    <View style={[styles.tabBar, { backgroundColor: tabBarBackgroundColor }]}>
      {tabs.map((tab, index) => {
        // Check if current screen is ProjectsScreen OR TasksScreen OR SingleTaskScreen for the Projects tab
        const focused = 
          route.name === tab.screen || 
          (tab.screen === 'ProjectsScreen' && (route.name === 'TasksScreen' || route.name === 'SingleTaskScreen'|| route.name === 'EditProjectScreen'|| route.name === 'PaymentScreen'));
        
        const iconSource = focused && tab.iconActive ? tab.iconActive : tab.icon;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.tabItem, tab.isBig && styles.projectsTabItem]}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Image
              source={iconSource}
              style={[
                styles.icon,
                tab.isBig && styles.projectsIcon,
                focused && !tab.isBig && styles.iconActive,
              ]}
            />
            <Text style={[styles.label, focused ? styles.labelActive : styles.labelInactive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectsTabItem: {
    top: -25,
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  projectsIcon: {
    width: 100,
    height: 100,
  },
  iconActive: {
    tintColor: '#F59E0B',
  },
  label: {
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
  },
  labelActive: {
    color: '#F59E0B',
  },
  labelInactive: {
    color: '#999',
  },
});