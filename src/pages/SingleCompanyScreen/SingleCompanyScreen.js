import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomTabs from "../../navigation/BottomTabs";

const LeftArrow = require("../../assets/images/LeftArrow.png");

const SingleCompanyScreen = ({ navigation, route }) => {
  const { company } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>تفاصيل الشركة</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.companyName}>{company.title}</Text>
          <Text style={styles.companyCategory}>{company.category}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>عن الشركة</Text>
          <Text style={styles.sectionText}>{company.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>التقييم</Text>
          <Text style={styles.sectionText}>{company.rating} من 5 نجوم</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>الخدمات المقدمة</Text>
          <Text style={styles.sectionText}>
            تقديم أفضل الحلول والخدمات في مجال {company.category} مع ضمان الجودة والكفاءة.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>معلومات الاتصال</Text>
          <Text style={styles.sectionText}>
            الهاتف: +966 123 456 789{"\n"}
            البريد الإلكتروني: info@company.com{"\n"}
            الموقع: الرياض، المملكة العربية السعودية
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabsWrapper}>
        <BottomTabs activeTab="Companies" setActiveTab={() => {}} />
      </View>
    </View>
  );
};

export default SingleCompanyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  headerRight: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: "#000",
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 100,
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  companyName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
    marginBottom: 5,
  },
  companyCategory: {
    fontSize: 16,
    color: "#8BADB1",
    textAlign: "right",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    textAlign: "right",
    lineHeight: 24,
  },
  bottomTabsWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});