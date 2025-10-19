import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomTabs from '../../navigation/BottomTabs';
import { useNavigation } from '@react-navigation/native';

const LeftArrow = require('../../assets/images/LeftArrow.png');
const calender = require('../../assets/images/Calendarrrr.png');
const furniture = require('../../assets/images/girl4.png'); // sample image

export default function SingleTaskScreen() {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([
    { id: 1, title: 'استلام المخطط النهائي للتصميم', done: true },
    { id: 2, title: 'تفريغ ونقل القطع', done: true },
    { id: 3, title: 'تجميع القطع الأساسية', done: true },
    { id: 4, title: 'تثبيت الأثاث في مكانه', done: false },
    { id: 5, title: 'التوصيلات الكهربائية والإكسسوارات', done: false },
    { id: 6, title: 'التشطيب النهائي والتنظيف', done: false },
    { id: 7, title: 'المراجعة والاستلام المبدئي', done: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>تركيب الأثاث</Text>
          <View style={{ width: 30 }} />
        </View>

        {/* Calendar Card */}
        <View style={styles.dateCard}>
          <Image source={calender} style={styles.calIcon} />
          <View>
            <Text style={styles.dateText}>
              من الاثنين 3 مايو 2025 إلى الاثنين 10 مايو 2025
            </Text>
            <Text style={styles.timeText}>10:00 - 11:00</Text>
          </View>
        </View>
      </View>

      {/* White curved content */}
      <View style={styles.curvedContent}>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Images */}
          <Text style={styles.sectionTitle}>الصور (6)</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imagesRow}
          >
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <Image key={i} source={furniture} style={styles.imageItem} />
            ))}
          </ScrollView>

          {/* Tasks */}
          <Text style={styles.sectionTitle}>المهمات</Text>
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={styles.taskRow}
              onPress={() => toggleTask(task.id)}
              activeOpacity={0.7}
            >
              <View
                style={[styles.checkbox, task.done && styles.checkboxChecked]}
              >
                {task.done && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text
                style={[
                  styles.taskText,
                  task.done && styles.taskTextChecked,
                ]}
              >
                {task.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabsWrapper}>
        <BottomTabs activeTab="ProjectsScreen" setActiveTab={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8BADB1' }, // make background blue

  header: {
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  dateCard: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },
  calIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  dateText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  timeText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'right',
  },

  curvedContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
  },

  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    marginVertical: 15,
  },
  imagesRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 10,
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },

  taskRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#8BADB1',
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#E68314',
    borderColor: '#E68314',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    textAlign: 'right',
    color: '#333',
    fontSize: 15,
  },
  taskTextChecked: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  bottomTabsWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
