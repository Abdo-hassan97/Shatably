import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BottomTabs from '../../navigation/BottomTabs';
import { useNavigation } from '@react-navigation/native';

const dolar = require('../../assets/images/dolar.png');
const Rectangle65 = require('../../assets/images/Rectangle65.png');
const LeftArrow = require('../../assets/images/LeftArrow.png');

export default function PaymentScreen() {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState('cash');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>التسليم النهائي</Text>
          <View style={{ width: 30 }} />
        </View>

        {/* Payment Info */}
        <View style={styles.paymentInfo}>
                      <Image source={dolar} style={styles.dolarIcon} />

          <View style={{ flex: 1 }}>
            <Text style={styles.paymentLabel}>الدفع المتبقي</Text>
            <Text style={styles.paymentAmount}>المبلغ المتبقي: 25,000 ج.م</Text>
          </View>
        </View>
      </View>

      {/* Curved white section */}
      <View style={styles.curvedContent}>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Payment Options */}
          <Text style={styles.sectionTitle}>الدفع المتاح</Text>

{[
  { key: 'cash', label: 'نقدي' },
  { key: 'bank', label: 'تحويل بنكي' },
  { key: 'card', label: 'الدفع بالبطاقة' },
].map((option) => (
  <TouchableOpacity
    key={option.key}
    style={[
      styles.paymentOption,
      selectedPayment === option.key && styles.selectedOption,
    ]}
    onPress={() => setSelectedPayment(option.key)}
  >
    <View style={styles.radioRow}>
      <View
        style={[
          styles.radioOuter,
          selectedPayment === option.key && styles.radioOuterSelected,
        ]}
      >
        {selectedPayment === option.key && (
          <View style={styles.radioInner} />
        )}
      </View>
      <Text style={styles.paymentText}>{option.label}</Text>
    </View>
  </TouchableOpacity>
))}


          {/* Pay Button */}
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>ادفع الآن</Text>
          </TouchableOpacity>

          <Text style={styles.noteText}>
            لن يتم تفعيل الضمان إلا بعد إتمام عملية الدفع النهائي
          </Text>

          {/* Warranty Report */}
          <Text style={styles.warrantyTitle}>تقرير الضمان</Text>
          <View style={styles.warrantyContainer}>
                        <Image source={Rectangle65} style={styles.warrantyImage} />

            <View style={{ flex: 1 }}>
              <Text style={styles.contractNumber}>رقم العقد: 001-2024</Text>
              <Text style={styles.contractDetail}>تغطية: الصيانة والتركيبات</Text>
              <Text style={styles.contractDetail}>مدة الضمان: سنة واحدة</Text>

              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>تحميل تقرير الضمان</Text>
              </TouchableOpacity>
            </View>
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

  paymentInfo: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 15,
  },
  paymentLabel: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 16,
  },
  paymentAmount: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 14,
  },
  dolarIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
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
    marginBottom: 15,
  },

  paymentOption: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 15,
    color: '#000',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#E68314',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E68314',
  },
  selectedOption: {
    borderColor: '#E68314',
  },
  payButton: {
    backgroundColor: '#8BADB1',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  noteText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#666',
    marginTop: 10,
  },
  warrantyTitle: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
  },
  warrantyContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contractNumber: {
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'right',
  },
  contractDetail: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  downloadButton: {
    marginTop: 8,
    marginLeft: 135,
    backgroundColor: '#FFE4C7',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  downloadButtonText: {
    color: '#E68314',
    fontSize: 13,
    fontWeight: '700',
  },
  warrantyImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  bottomTabsWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  radioRow: {
  flexDirection: 'row-reverse',
  alignItems: 'center',
  gap: 8, // spacing between bullet and label
},

});
