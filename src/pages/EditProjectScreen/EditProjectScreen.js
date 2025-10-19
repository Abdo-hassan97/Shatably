/* eslint-disable no-dupe-keys */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from '../../navigation/BottomTabs';

const LeftArrow = require('../../assets/images/LeftArrow.png');
const img1 = require('../../assets/images/img1.png');
const img2 = require('../../assets/images/img2.png');
const img3 = require('../../assets/images/img3.png');
const img4 = require('../../assets/images/img4.png');
const img5 = require('../../assets/images/img5.png');

export default function EditProjectScreen() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('إضافة خدمة جديدة');

  const options = [
    'إضافة خدمة جديدة',
    'تعديل في نطاق العمل',
    'تمديد مدة التنفيذ',
    'تقليل بعض الأعمال المتفق عليها',
    'أخر',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>تعديل المشروع - جار التنفيذ</Text>
          <View style={{ width: 28 }} />
        </View>
      </View>

{/* Project Info */}
<View style={styles.projectInfo}>
  {/* اسم المشروع */}
  <View style={styles.infoCard}>
    <Image source={img1} style={styles.infoIcon} />
    <View style={styles.infoTextBox}>
      <Text style={styles.infoLabel}>اسم المشروع</Text>
      <Text style={styles.infoText}>شقتي في مارسي - تشطيب كامل</Text>
    </View>
  </View>

  {/* رقم المشروع */}
  <View style={styles.infoCard}>
    <Image source={img2} style={styles.infoIcon} />
    <View style={styles.infoTextBox}>
      <Text style={styles.infoLabel}>رقم المشروع</Text>
      <Text style={styles.infoText}>#12458</Text>
    </View>
  </View>

  {/* تاريخ البداية */}
  <View style={styles.infoCard}>
    <Image source={img3} style={styles.infoIcon} />
    <View style={styles.infoTextBox}>
      <Text style={styles.infoLabel}>تاريخ البداية</Text>
      <Text style={styles.infoText}>3 مايو 2025</Text>
    </View>
  </View>

  {/* تاريخ النهاية */}
  <View style={styles.infoCard}>
    <Image source={img4} style={styles.infoIcon} />
    <View style={styles.infoTextBox}>
      <Text style={styles.infoLabel}>تاريخ النهاية</Text>
      <Text style={styles.infoText}>21 أبريل 2026</Text>
    </View>
  </View>
</View>


      {/* Content */}
      <View style={styles.curvedContent}>
        <ScrollView
          style={styles.scrollContent}
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Type of modification */}
          <Text style={styles.sectionTitle}>نوع التعديل</Text>
          {options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              style={styles.optionRow}
              onPress={() => setSelectedOption(opt)}
            >
              <View
                style={[
                  styles.radioOuter,
                  selectedOption === opt && styles.radioOuterActive,
                ]}
              >
                {selectedOption === opt && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}

          {/* Description */}
          <TextInput
            placeholder="وصف التعديل المطلوب بالتفصيل"
            placeholderTextColor="#121714"
            style={styles.textArea}
            multiline
          />

          {/* التأثير المتوقع */}
<View style={styles.infoRowBetween}>
  <Text style={styles.label}>تكلفة</Text>
  <Text style={styles.value}>+500$</Text>
</View>
<View style={styles.hr} />

<View style={styles.infoRowBetween}>
  <Text style={styles.label}>مدة</Text>
  <Text style={styles.value}>+2 أسابيع</Text>
</View>
<View style={styles.hr} />

          <Text style={styles.note}>
            ملاحظة: "التعديلات ستُراجع من الشركة قبل اعتمادها بشكل نهائي."
          </Text>

          {/* Chat button */}
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatText}>محادثة مباشرة مع مدير المشروع</Text>
                        <Image source={img5} style={styles.chatIcon} />

          </TouchableOpacity>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn}>
              <Text style={styles.cancelText}>إلغاء الطلب</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendBtn}>
              <Text style={styles.sendText}>إرسال طلب التعديل</Text>
            </TouchableOpacity>
          </View>

          {/* History */}
{/* History */}
<Text style={styles.sectionTitle}>سجل التعديلات</Text>
<View style={styles.timeline}>
  {[
    { title: 'إضافة إضافات جديدة', date: '2024-02-20' },
    { title: 'تمديد المدة', date: '2024-01-25' },
    { title: 'تغيير أرضيات', date: '2024-01-20' },
  ].map((item, index, arr) => (
    <View key={index} style={styles.timelineItem}>
      {/* الخط */}
      {index < arr.length - 1 && <View style={styles.timelineLine} />}
      
      {/* علامة الصح */}
      <View style={styles.timelineCheck}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>

      {/* المحتوى */}
      <View style={styles.timelineTextBox}>
        <Text style={styles.historyTitle}>{item.title}</Text>
        <Text style={styles.historySub}>موافق عليه | {item.date}</Text>
      </View>
    </View>
  ))}
</View>

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
  container: { flex: 1, backgroundColor: '#8BADB1' },

  header: { paddingTop: 50, paddingHorizontal: 20 },
  headerRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  projectInfo: {
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    gap: 6,
    marginBottom: 15,
  },
  infoRow: { flexDirection: 'row-reverse', alignItems: 'center' },
  infoIcon: { width: 20, height: 20, marginLeft: 6, resizeMode: 'contain' },
  infoText: { color: '#fff', fontSize: 14 },

  curvedContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 25,
  },
  scrollContent: { paddingHorizontal: 20 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    marginBottom: 10,
    marginTop: 15,
  },

  optionRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: { borderColor: '#E68314' },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E68314',
  },
  optionText: { flex: 1, textAlign: 'right', fontSize: 14, color: '#333' },

  textArea: {
    borderRadius: 12,
    backgroundColor: '#F1F3F5',
    textAlignVertical: 'top',
    minHeight: 120,
    padding: 10,
    fontSize: 14,
    color: '#333',
  },

  infoRowBetween: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 15,
  },
  label: { fontWeight: 'bold', color: '#000' },
  value: { color: '#555', fontWeight: 'bold' },

  note: {
    textAlign: 'right',
    color: '#777',
    fontSize: 13,
    marginVertical: 10,
    fontWeight: '600'
  },

  chatButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F9F9',
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 10,
    marginBottom: 15,
  },
  chatIcon: { width: 18, height: 18, marginLeft: 8 },
  chatText: { color: '#333', fontSize: 14, fontWeight: '600' },

  buttonRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#8BADB1',
    paddingVertical: 14,
    borderRadius: 12,
    marginLeft: 10,
  },
  cancelText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  sendBtn: {
    flex: 1,
    backgroundColor: '#FFE5C9',
    paddingVertical: 14,
    borderRadius: 12,
  },
  sendText: { color: '#E68314', textAlign: 'center', fontWeight: 'bold' },

timeline: {
  marginTop: 10,
  alignItems: 'flex-end',
  paddingRight: 10,
},
timelineItem: {
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  position: 'relative',
  marginBottom: 20,
},
timelineCheck: {
  marginLeft: 10,
  marginTop: 2,
},


checkIcon: {
  color: '#999',
  fontSize: 16,
  fontWeight: 'bold',
},
  timelineContent: { alignItems: 'flex-end' },
timelineLine: {
  position: 'absolute',
  left: 332,
  top: 25,
  width: 1,
  height: 28,
  backgroundColor: '#ccc',
},
timelineTextBox: {
  alignItems: 'flex-end',
  flex: 1,
},
historyTitle: {
  fontSize: 14,
  color: '#333',
  fontWeight: 'bold',
  textAlign: 'right',
},
historySub: {
  fontSize: 12,
  color: '#888',
  marginTop: 3,
  textAlign: 'right',
},
  bottomTabsWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
infoColumn: {
  alignItems: 'flex-end',
  marginBottom: 8,
},

infoRowInner: {
  flexDirection: 'row-reverse',
  alignItems: 'center',
  marginTop: 4,
},

infoLabel: {
  color: '#ffffffff',
  fontSize: 12,
  textAlign: 'right',
},

infoIcon: {
  width: 40,
  height: 40,
  marginLeft: 6,
  resizeMode: 'contain',
},

infoText: {
  color: '#fff',
  fontSize: 14,
},
projectInfo: {
  paddingHorizontal: 20,
  gap: 10,
  marginBottom: 15,
},

infoCard: {
  flexDirection: 'row-reverse',
  alignItems: 'center',
  borderRadius: 12,
  paddingRight: 10,
},

infoIcon: {
  width: 30,
  height: 30,
  marginLeft: 10,
  resizeMode: 'contain',
},

infoTextBox: {
  flex: 1,
  alignItems: 'flex-end',
},

infoLabel: {
  color: '#ffffffff',
  fontSize: 12,
  textAlign: 'right',
  fontWeight: '600'
},

infoText: {
  color: '#fff',
  fontSize: 14,
  textAlign: 'right',
},
hr: {
  height: 1,
  backgroundColor: '#eee',
  marginVertical: 8,
},


});
