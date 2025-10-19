import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomTabs from '../../navigation/BottomTabs';
import { useNavigation, useRoute } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const LeftArrow = require('../../assets/images/LeftArrow.png');
const calender = require('../../assets/images/calender.png');
const girl4 = require('../../assets/images/girl4.png');
const Icon = require('../../assets/images/Icon.png');


function TasksScreen() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();

  const days = [
    { day: 'Sun', date: '8', isActive: false },
    { day: 'Sat', date: '7', isActive: false },
    { day: 'Fri', date: '6', isActive: false },
    { day: 'Thu', date: '5', isActive: false },
    { day: 'Wed', date: '4', isActive: false },
    { day: 'Tue', date: '3', isActive: false },
    { day: 'Mon', date: '2', isActive: true },
  ];

  const cards = [
    {
      id: 1,
      header: 'تظيف ما بعد البناء',
      date: 'انتهت في 21 ابريل 2026',
      paragraph:
        'عملنا علي تنظيف وحدتك من اثار البناء ... عملنا علي تنظيف وحدتك من اثار البناء ... عملنا علي تنظيف وحدتك من اثار البناء',
      status: 'completed',
    },
    {
      id: 2,
      header: 'الدهان',
      date: 'انتهت في 22 ابريل 2026',
      paragraph:
        'عملنا علي دهان وحدتك ... عملنا علي دهان وحدتك ... عملنا علي دهان وحدتك ... عملنا علي دهان وحدتك ',
      status: 'completed',
    },
    {
      id: 3,
      header: 'تركيب الأثاث',
      date: 'تنتهي في 23 ابريل 2026',
      paragraph:
        'عملنا علي تركيب اثاث وحدتك ... عملنا علي تركيب اثاث وحدتك ... عملنا علي تركيب اثاث وحدتك ',
      status: 'ongoing',
    },
    {
      id: 4,
      header: 'تركيب الأرضيات',
      date: 'تنتهي في 24 ابريل 2026',
      paragraph:
        'عملنا علي تركيب ارضيات وحدتك ... عملنا علي تركيب ارضيات وحدتك ... عملنا علي تركيب ارضيات وحدتك ',
      status: 'pending',
    },
  ];

  const handleCardPress = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const renderBullet = (status) => {
    switch (status) {
      case 'completed':
        return (
          <View style={[styles.bullet, styles.completed]}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        );
      case 'ongoing':
        return (
          <View style={[styles.bullet, styles.ongoing]}>
            <View style={styles.dotInside} />
          </View>
        );
      case 'pending':
        return <View style={[styles.bullet, styles.pending]} />;
      default:
        return <View style={styles.bullet} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Div */}
      <View style={styles.topDiv}>
        <View style={styles.topRow}>
          <Image source={LeftArrow} style={styles.arrowIcon} />
          <Text style={styles.title}>شقتي في مراسي – تشطيب كامل</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.dateRow}>
          <Text style={styles.dateText}>الأحد, 31 مايو 2025</Text>
        </View>

        <View style={styles.daysContainer}>
          {days.map((item, index) => (
            <View key={index} style={styles.dayItem}>
              <Text
                style={[
                  styles.dayText,
                  item.isActive ? styles.dayTextActive : styles.dayTextInactive,
                ]}>
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateNumber,
                  item.isActive
                    ? styles.dateNumberActive
                    : styles.dateNumberInactive,
                ]}>
                {item.date}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Cards Section with Timeline */}
      <View style={styles.cardsSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.timelineContainer}>
            {/* Timeline Line — Adjust height */}
            <View
              style={[
                styles.timelineLine,
                { height: cards.length * 150 - 150 }, // adjust to stop at last bullet
              ]}
            />

            {/* Cards */}
            <View style={styles.cardsList}>
              {cards.map((card, index) => (
                <View key={card.id} style={styles.cardWrapper}>
                  {/* Bullet */}
                  {renderBullet(card.status)}

                  {/* Card */}
                  <TouchableOpacity
                    style={[
                      styles.card,
                      selectedCard === card.id && styles.cardSelected,
                    ]}
                    onPress={() => handleCardPress(card.id)}
                    activeOpacity={0.7}>
                    <View style={styles.cardHeader}>
                      <Text
                        style={[
                          styles.cardHeaderText,
                          selectedCard === card.id &&
                            styles.cardHeaderTextSelected,
                        ]}>
                        {card.header}
                      </Text>
                      <View style={styles.dateContainer}>
                        <Image
                          source={calender}
                          style={[
                            styles.calendarIcon,
                            selectedCard === card.id &&
                              styles.calendarIconSelected,
                          ]}
                        />
                        <Text
                          style={[
                            styles.dateTextCard,
                            selectedCard === card.id &&
                              styles.dateTextCardSelected,
                          ]}>
                          {card.date}
                        </Text>
                      </View>
                    </View>

                    <Text
                      style={[
                        styles.paragraph,
                        selectedCard === card.id && styles.paragraphSelected,
                      ]}>
                      {card.paragraph}
                    </Text>

{selectedCard === card.id && (
  <View style={styles.selectedContent}>
    <View style={styles.imagesContainer}>
      <Image source={girl4} style={styles.girlImage} />
      <Image source={girl4} style={styles.girlImage} />
      <Image source={girl4} style={styles.girlImage} />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('SingleTaskScreen')}>
      <Image source={Icon} style={styles.iconImage} />
    </TouchableOpacity>
  </View>
)}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomTabsWrapper}>
        <BottomTabs activeTab="ProjectsScreen" setActiveTab={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topDiv: {
    width,
    height: 210,
    backgroundColor: '#8BADB1',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 15,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    flex: 1,
    marginRight: 15,
  },
  placeholder: { width: 40 },
  dateRow: { flexDirection: 'row-reverse', marginBottom: 25 },
  dateText: {
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginTop: 12,
  },
  daysContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayItem: { alignItems: 'center' },
  dayText: { fontWeight: '700', fontSize: 14, marginBottom: 5 },
  dayTextActive: { color: '#fff' },
  dayTextInactive: { color: 'rgba(255,255,255,0.6)' },
  dateNumber: { fontWeight: '700', fontSize: 14 },
  dateNumberActive: { color: '#fff' },
  dateNumberInactive: { color: 'rgba(255,255,255,0.6)' },

  cardsSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 80,
  },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 100 },
  timelineContainer: {
    flexDirection: 'row-reverse',
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    right: 17,
    top: 0,
    width: 3,
    backgroundColor: '#8BADB1',
    borderRadius: 2,
  },
  cardsList: {
    flex: 1,
    marginRight: 40,
  },
  cardWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: 30,
    position: 'relative',
  },
  bullet: {
    position: 'absolute',
    right: -32,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  completed: { backgroundColor: '#8BADB1', borderColor: '#8BADB1' },
  checkMark: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  ongoing: { borderColor: '#8BADB1' },
  dotInside: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8BADB1',
  },
  pending: { borderColor: '#8BADB1' },

  card: {
    backgroundColor: '#F1F3F5',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardSelected: { backgroundColor: '#8BADB1', borderColor: '#8BADB1' },
  cardHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardHeaderText: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'right',
    color: '#000',
    flex: 1,
  },
  cardHeaderTextSelected: { color: '#fff' },
  dateContainer: { flexDirection: 'row-reverse', alignItems: 'center' },
  calendarIcon: {
    width: 18,
    height: 18,
    marginLeft: 4,
    resizeMode: 'contain',
    tintColor: '#E68314',
  },
  calendarIconSelected: { tintColor: '#fff' },
  dateTextCard: { fontSize: 12, color: '#86888D' },
  dateTextCardSelected: { color: '#fff' },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
    color: '#77838F',
  },
  paragraphSelected: { color: '#fff' },
  selectedContent: { marginTop: 12 },
  imagesContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  girlImage: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginLeft: 8,
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginLeft: 8,
    marginTop: -30,
  },
  bottomTabsWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TasksScreen;
