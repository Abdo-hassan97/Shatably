import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import BottomTabs from '../../navigation/BottomTabs';

const LeftArrow = require('../../assets/images/LeftArrow.png');
const serv1 = require('../../assets/images/prop1.png');
const serv2 = require('../../assets/images/prop2.png');
const serv3 = require('../../assets/images/prop3.png');
const serv4 = require('../../assets/images/prop4.png');
const serv5 = require('../../assets/images/prop5.png');
const serv6 = require('../../assets/images/prop6.png');
const serv7 = require('../../assets/images/prop7.png');
const serv8 = require('../../assets/images/prop8.png');

const { width } = Dimensions.get('window');

const services = [
  { id: 1, name: 'دوبليكس', image: serv4 },
  { id: 2, name: 'فيلا', image: serv3 },
  { id: 3, name: 'شقه سكنية', image: serv2 },
  { id: 4, name: ' شاليه', image: serv1 },
  { id: 5, name: 'ستوديو  ', image: serv5 },
  { id: 6, name: ' البنتهاوس', image: serv7 },
  { id: 7, name: 'التربلكس', image: serv8 },
  { id: 8, name: ' توين هاوس', image: serv6 },
];

export default function HomeDetailsScreen({ navigation }) {
  const handleCardPress = (item) => {
    navigation?.navigate?.('MapScreen', { service: item });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>نوع الوحده</Text>
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={() => navigation.goBack?.()}
            activeOpacity={0.7}
          >
            <Image source={LeftArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Services Grid */}
        <View style={styles.cardsContainer}>
          {services.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleCardPress(item)}
              activeOpacity={0.8}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabsContainer}>
        <BottomTabs />
      </View>
    </View>
  );
}

// 4 cards per row
const CARD_WIDTH = (width - 60) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 120,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginBottom: 20,
    position: 'relative',
  },
  headerText: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    color: '#000',
    textAlign: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    right: 15,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 6,
  },
  cardImage: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Alexandria' : 'sans-serif',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 4,
  },
  bottomTabsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
