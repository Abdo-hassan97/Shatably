import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

// Import icons
const LeftArrow = require('../../assets/images/LeftArrow.png');
const Ellipse = require('../../assets/images/Ellipse.png');
const EditIcon = require('../../assets/images/EditImage.png');

// New icons
const Map = require('../../assets/images/Map.png');
const bubblechat = require('../../assets/images/bubble-chat.png');
const bubblechatt = require('../../assets/images/bubble-chatt.png');

// Old icons
const Complain = require('../../assets/images/Complain.png');
const Referral = require('../../assets/images/Referral.png');
const AboutUs = require('../../assets/images/AboutUs.png');
const Settings = require('../../assets/images/Settings.png');
const Support = require('../../assets/images/Support.png');
const Logout = require('../../assets/images/Logout.png');

const CustomDrawer = ({ closeDrawer }) => {
  return (
    <View style={drawerStyles.container}>
      {/* Header */}
      <View style={drawerStyles.header}>
        <TouchableOpacity onPress={closeDrawer} style={drawerStyles.backButton}>
          <Image source={LeftArrow} style={drawerStyles.arrowIcon} />
          <Text style={drawerStyles.backText}>الرجوع</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={drawerStyles.profileSection}>
        <View style={drawerStyles.avatarContainer}>
          <Image source={Ellipse} style={drawerStyles.avatar} />
          <TouchableOpacity style={drawerStyles.editButton}>
            <Image source={EditIcon} style={drawerStyles.editIcon} />
          </TouchableOpacity>
        </View>
        <Text style={drawerStyles.userName}>احمد محمد</Text>
        <Text style={drawerStyles.userEmail}>A.m.mohamed2@email.com</Text>
      </View>

      {/* Menu */}
      <View style={drawerStyles.menuContainer}>
        {/* New Items */}
        <MenuItem icon={Map} text="العنوان" />
        <MenuItem icon={bubblechat} text="الرسائل" />
        <MenuItem icon={bubblechatt} text="التقسيط" />

        {/* Old Items */}
        <MenuItem icon={Complain} text="قدم شكوي" />
        <MenuItem icon={Referral} text="الإحالة" />
        <MenuItem icon={AboutUs} text="معلومات عنا" />
        <MenuItem icon={Settings} text="الإعدادات" />
        <MenuItem icon={Support} text="المساعدة والدعم" />
        <MenuItem icon={Logout} text="تسجيل الخروج" />
      </View>
    </View>
  );
};

// Menu Item Component
const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={drawerStyles.menuItem}>
    <Image source={icon} style={drawerStyles.menuIcon} />
    <Text style={drawerStyles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    zIndex: 1000,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'flex-end',
  },
  backButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
  backText: {
    fontFamily: 'Alexandria',
    fontWeight: '400',
    fontSize: 16,
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  editIcon: {
    width: 14,
    height: 14,
  },
  userName: {
    fontFamily: 'Alexandria',
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: 'Alexandria',
    fontWeight: '400',
    fontSize: 12,
    color: '#666',
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    gap: 12,
  },
  menuText: {
    fontFamily: 'Alexandria',
    fontWeight: '500',
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
  menuIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});

export default CustomDrawer;
