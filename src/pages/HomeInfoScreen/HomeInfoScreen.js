import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';

const HomeInfoScreen = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [showRoomsDropdown, setShowRoomsDropdown] = useState(false);
  const [showBathroomsDropdown, setShowBathroomsDropdown] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [image, setImage] = useState(null);

  const ArrowRight = require('../../assets/images/LeftArrow.png');
  const totalSteps = 4;
  const progressPercent = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // ✅ Fixed Image Picker
  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <>
          <Text style={styles.title}>تفاصيل العقار</Text>
          <TextInput
            style={styles.input}
            placeholder="المساحة (بالمتر)*"
            placeholderTextColor="#999"
            textAlign="right"
          />
        </>
      );
    }

    if (step === 2) {
      const rooms = ['1', '2', '3', '4', '5'];
      return (
        <>
          <Text style={styles.title}>تفاصيل العقار</Text>
          <Text style={styles.subtitle}>عدد الغرف</Text>

          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setShowRoomsDropdown(!showRoomsDropdown)}
          >
            <Text style={styles.dropdownHeaderText}>
              {selectedRoom ? `عدد الغرف: ${selectedRoom}` : 'اختر عدد الغرف'}
            </Text>
          </TouchableOpacity>

          {showRoomsDropdown && (
            <View style={styles.dropdownContainer}>
              <FlatList
                data={rooms}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedRoom(item);
                      setShowRoomsDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </>
      );
    }

    if (step === 3) {
      const bathrooms = ['1', '2', '3', '4', '5'];
      return (
        <>
          <Text style={styles.title}>تفاصيل العقار</Text>
          <Text style={styles.subtitle}>عدد الحمامات</Text>

          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setShowBathroomsDropdown(!showBathroomsDropdown)}
          >
            <Text style={styles.dropdownHeaderText}>
              {selectedBathroom
                ? `عدد الحمامات: ${selectedBathroom}`
                : 'اختر عدد الحمامات'}
            </Text>
          </TouchableOpacity>

          {showBathroomsDropdown && (
            <View style={styles.dropdownContainer}>
              <FlatList
                data={bathrooms}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedBathroom(item);
                      setShowBathroomsDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </>
      );
    }

if (step === 4) {
  return (
    <>
      <Text style={styles.title}>تفاصيل العقار</Text>

      {/* 📝 Text Area for Detailed Address */}
<Text style={styles.subtitle}>معلومات اضافية</Text>
            <TextInput
              placeholder="ادخل العنوان بالتفصيل"
              placeholderTextColor="#777"
              style={styles.textArea2}
              multiline
              numberOfLines={16}
            />

      {/* 🖼️ Add Image Section */}
      <Text style={styles.subtitle}>اضف صور</Text>

      <TouchableOpacity style={styles.imageUploadBox} onPress={handleImagePick}>
        {image ? (
          <Image source={{ uri: image }} style={styles.previewImage} />
        ) : (
          <Text style={styles.plusSign}>＋</Text>
        )}
      </TouchableOpacity>


    </>
  );
}
  };

  // 💡 Dynamic colors per step
  let progressColor = '#D30000';
  let progressBgColor = '#F2CACA';
  if (step === 2) {
    progressColor = '#E68314';
    progressBgColor = '#FFE4C7';
  } else if (step === 3) {
    progressColor = '#8BADB1';
    progressBgColor = '#CDEAEE';
  }
   else if (step === 4) {
    progressColor = '#8BADB1';
    progressBgColor = '#CDEAEE';
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {step}/{totalSteps}
          </Text>
          <View
            style={[styles.progressBar, { backgroundColor: progressBgColor }]}
          >
            <View
              style={[
                styles.progressFill,
                { width: `${progressPercent}%`, backgroundColor: progressColor },
              ]}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.arrowButton} onPress={handleBack}>
          <Image source={ArrowRight} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.formContainer}>
          {renderStepContent()}

          {step <= 4 && (
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.nextButton, { backgroundColor: '#8BADB1' }]}
                onPress={handleNext}
              >
                <Text style={styles.nextButtonText}>التالي</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.skipButtonText}>تخطي</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeInfoScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  dotsContainer: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#333' },
  progressContainer: { alignItems: 'center', flex: 1, marginHorizontal: 20, marginTop: 20 },
  progressText: { fontSize: 16, fontWeight: '700', color: '#333', marginBottom: 8 },
  progressBar: { width: 300, height: 18, borderRadius: 50 },
  progressFill: { height: '100%', borderRadius: 50 },
  arrowButton: { padding: 5 },
  arrowIcon: { width: 24, height: 24, resizeMode: 'contain' },
  content: { flex: 1, padding: 10 },
  formContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: { fontWeight: '700', fontSize: 24, textAlign: 'right', color: '#000', marginBottom: 30 },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 10, textAlign: 'right' },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    textAlign: 'right',
    marginBottom: 20,
  },
  dropdownHeader: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dropdownHeaderText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
  dropdownContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    fontWeight: '600',
  },
  textArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    textAlignVertical: 'top',
    marginBottom: 4,
  },
    textArea2: {
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 12,
  height: 100,
  fontSize: 14,
  fontWeight: "bold",
  color: "#000",
  textAlignVertical: "top",
  marginBottom: 12,
},
  imageUploadBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    alignSelf: 'flex-end',
  },
  plusSign: { fontSize: 36, color: '#999' },
  previewImage: { width: '100%', height: '100%', borderRadius: 1 },
  buttonsContainer: { gap: 12, marginTop: 'auto' },
  nextButton: { borderRadius: 16, paddingVertical: 16, alignItems: 'center', justifyContent: 'center' },
  nextButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  skipButton: { backgroundColor: '#FFE4C7', borderRadius: 16, paddingVertical: 16, alignItems: 'center', justifyContent: 'center' },
  skipButtonText: { color: '#333', fontSize: 16, fontWeight: '700' },
});
