import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // عرض الكارت
const OVERLAP = 150; // مقدار التراكب

const b7r = require('../../assets/images/b7r.png');
const GoldStart = require('../../assets/images/GoldStart.png');
const whiteStart = require('../../assets/images/whiteStart.png');
const arrowLeft = require('../../assets/images/IconArrow.png');

const data = [
  {
    id: '1',
    image: b7r,
    title: 'تحويل فيلا من طوب احمر الي تشطيب فاخر في 45 يوم فقط',
    description: 'تنفيذ شركه اليبيت للاثاث و التشطيب',
    rating: 4,
  },
  {
    id: '2',
    image: b7r,
    title: 'مشروع اخر فاخر',
    description: 'تنفيذ شركه اليبيت للاثاث و التشطيب',
    rating: 5,
  },
  {
    id: '3',
    image: b7r,
    title: 'تشطيب فيلا حديثة',
    description: 'تنفيذ شركه اليبيت للاثاث و التشطيب',
    rating: 3,
  },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    const isActive = index === activeIndex;

    return (
      <View
        style={[
          styles.card,
          {
            marginLeft: index === 0 ? 0 : -OVERLAP,
            zIndex: isActive ? 10 : data.length - index, // الكارت النشط فوق
            transform: [{ scale: isActive ? 1 : 0.92 }], // تكبير بسيط للنشط
          },
        ]}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.row}>
            <Text style={styles.ratingText}>تقييم العميل</Text>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  source={star <= item.rating ? GoldStart : whiteStart}
                  style={styles.star}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* الهيدر */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>احدث المشاريع</Text>

        <View style={styles.viewAllContainer}>
          <Text style={styles.viewAll}>عرض الكل</Text>
          <Image
            source={arrowLeft}
            style={styles.arrowIcon}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* الكاروسيل */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH - OVERLAP}
        decelerationRate="fast"
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / (CARD_WIDTH - OVERLAP)
          );
          setActiveIndex(index);
        }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

      {/* المؤشر */}
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#f90' : '#ccc' },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30, // مسافة تحت الكاروسيل
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  viewAllContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    
  },
  viewAll: {
    color: '#f90',
    fontSize: 14,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginRight: 4, // مسافة بسيطة بين النص والسهم
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    textAlign: 'right',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginVertical: 6,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 6,
    color: '#333',
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    width: 18,
    height: 18,
    marginHorizontal: 2,
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16, // زودنا المسافة فوق النقاط كمان
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
