import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  ImageBackground,
  Modal,
  TextInput,
  Animated,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const { width, height } = Dimensions.get("window");
const ArrowRight = require("../../assets/images/LeftArrow.png");
const MyLocationIcon = require("../../assets/images/location.png");
const MapBG = require("../../assets/images/MapBG.png");
const PlusIcon = require("../../assets/images/plus.png"); // لو عندك أيقونة +

export default function MapScreen({ navigation }) {
  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(height))[0];

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      Geolocation.requestAuthorization("whenInUse");
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentRegion = {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          setRegion(currentRegion);
          setMarker({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectLocation = (e) => {
    const coordinate = e.nativeEvent.coordinate;
    setMarker(coordinate);
    setRegion({
      ...region,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  const handleMyLocation = () => {
    requestLocationPermission();
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <ImageBackground source={MapBG} style={styles.bg}>
      <View style={styles.container}>
        {region && (
          <MapView style={styles.map} region={region} onPress={handleSelectLocation}>
            {marker && <Marker coordinate={marker} />}
          </MapView>
        )}

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={ArrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* My Location Button */}
        <TouchableOpacity
          style={styles.myLocationButton}
          onPress={handleMyLocation}
        >
          <Image source={MyLocationIcon} style={styles.myLocationIcon} />
        </TouchableOpacity>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("NextScreen", { marker })}
          >
            <Text style={styles.nextText}>التالي</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.manualButton} onPress={openModal}>
            <Text style={styles.manualText}>ادخل العنوان يدوياً</Text>
          </TouchableOpacity>
        </View>

        {/* Modal */}
        <Modal transparent visible={modalVisible} animationType="none">
          <View style={styles.modalOverlay}>
            <Animated.View
              style={[
                styles.modalContainer,
                { transform: [{ translateY: slideAnim }] },
              ]}
            >
              <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                <Text style={{ fontSize: 20 }}>×</Text>
              </TouchableOpacity>

              <Text style={styles.modalTitle}>ادخل العنوان</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="اسم القرية"
                  placeholderTextColor="#777"
                  style={styles.input}
                />
                <Image source={PlusIcon} style={styles.plusIcon} />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="رقم الوحدة"
                  placeholderTextColor="#777"
                  style={styles.input}
                />
                <Image source={PlusIcon} style={styles.plusIcon} />
              </View>
      <TextInput
        placeholder="ادخل العنوان بالتفصيل"
        placeholderTextColor="#777"
        style={styles.textArea}
        multiline
        numberOfLines={4}
      />



<TouchableOpacity
  style={styles.addButton}
  onPress={() => {
    closeModal(); // close the modal smoothly
    navigation.navigate('HomeInfoScreen'); // navigate after closing
  }}
>
  <Text style={styles.addButtonText}>أضف العنوان</Text>
</TouchableOpacity>

            </Animated.View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width, height },
  container: { flex: 1 },
  map: { width, height, opacity: 0.9 },

  header: {
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
  },
  arrowButton: {
    position: "absolute",
    right: 20,
    backgroundColor: "#99b9b7",
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: { width: 18, height: 18, tintColor: "#fff", resizeMode: "contain" },

  myLocationButton: {
    position: "absolute",
    bottom: 160,
    right: 20,
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  myLocationIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  nextButton: {
    width: width * 0.85,
    backgroundColor: "#99b9b7",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  nextText: { fontWeight: "bold", fontSize: 18, color: "#fff" },
  manualButton: {
    width: width * 0.85,
    backgroundColor: "#fde3c2",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  manualText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E68314",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingBottom: 40,
  },
  closeBtn: { position: "absolute", top: 15, right: 20, zIndex: 1 },
  modalTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000",
      fontWeight: "bold",

  },
  plusIcon: { width: 15, height: 15, tintColor: "#999", marginLeft: 8 },
  addButton: {
    backgroundColor: "#99b9b7",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 15,
  },
  textArea: {
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

  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
