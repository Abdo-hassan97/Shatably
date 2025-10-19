import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
  FlatList,
  PanResponder,
} from "react-native";
import BottomTabs from "../../navigation/BottomTabs";

const { width, height } = Dimensions.get("window");

const LeftArrow = require("../../assets/images/LeftArrow.png");
const IconSearch = require("../../assets/images/Iconsearch.png");
const Filter = require("../../assets/images/filter.png");
const company1 = require("../../assets/images/company1.png");
const company2 = require("../../assets/images/company2.png");
const company3 = require("../../assets/images/company3.png");
const GoldStar = require("../../assets/images/GoldStart.png");

const CompaniesScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  
  // New states for dropdowns
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [ratingDropdown, setRatingDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("الإلكترونيات");
  const [selectedSort, setSelectedSort] = useState("الاحدث");
  const [selectedRating, setSelectedRating] = useState("5");
  const [hasBusinessFile, setHasBusinessFile] = useState(null);

  const categories = [
    { name: "الكل", color: "#8BADB1" },
    { name: "الإلكترونيات", color: "#8BADB1" },
    { name: "الأثاث", color: "#8BADB1" },
    { name: "التشطيبات", color: "#8BADB1" },
  ];

  const searchOptions = [
    "ديكورات",
    "أرضيات وسيراميك",
    "إضاءة",
    "أثاث",
    "أنظمة تكييف",
    "معدات الحدائق",
    "أنظمة أمان وكاميرات",
  ];

  const companies = [
    {
      id: 1,
      image: company1,
      title: "شركة أركيتك للتصميم",
      category: "التشطيبات",
      description:
        "حلول متكاملة للتشطيبات الداخلية بأسلوب عصري ومودرن يواكب أحدث الصيحات.",
      rating: 5,
      color: "#3E9C7E",
      bg: "#E9F7EF",
    },
    {
      id: 2,
      image: company2,
      title: "شركة سمارت لايت",
      category: "الإلكترونيات",
      description:
        "تحكم كامل في إضاءة منزلك عبر تقنيات ذكية توفر الراحة وتقلل استهلاك الطاقة.",
      rating: 5,
      color: "#2979FF",
      bg: "#E3F2FD",
    },
    {
      id: 3,
      image: company3,
      title: "شركة إيليت للأثاث",
      category: "الأثاث",
      description:
        "تصميم وصناعة أثاث خشبي عالي الجودة يمنح منزلك لمسة فخامة وأناقة تدوم.",
      rating: 5,
      color: "#8E24AA",
      bg: "#F3E5F5",
    },
  ];

  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  // Dropdown options
  const categoryOptions = ["الإلكترونيات", "الأثاث", "التشطيبات", "الكل"];
  const sortOptions = ["الاحدث", "الأعلى تقييماً", "الأكثر شيوعاً", "الأقل سعراً"];
  const ratingOptions = ["5", "4", "3", "2", "1"];

  // PanResponder for swipe down to close
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dy > 50) {
        setFilterVisible(false);
      }
    },
  });

  const handleSearchConfirm = () => {
    if (selectedItem === "أثاث") {
      setFilteredCompanies(companies.filter((c) => c.category === "الأثاث"));
      setActiveCategory("الأثاث");
    } else if (selectedItem === "الإلكترونيات" || selectedItem === "إضاءة") {
      setFilteredCompanies(
        companies.filter((c) => c.category === "الإلكترونيات")
      );
      setActiveCategory("الإلكترونيات");
    } else if (
      selectedItem === "تشطيبات" ||
      selectedItem === "ديكورات" ||
      selectedItem === "أرضيات وسيراميك"
    ) {
      setFilteredCompanies(
        companies.filter((c) => c.category === "التشطيبات")
      );
      setActiveCategory("التشطيبات");
    } else {
      setFilteredCompanies(companies);
      setActiveCategory("الكل");
    }
    setSearchVisible(false);
  };

  const handleCategoryPress = (name) => {
    setActiveCategory(name);
    if (name === "الكل") {
      setFilteredCompanies(companies);
    } else {
      setFilteredCompanies(companies.filter((c) => c.category === name));
    }
  };

  const handleCompanyPress = (company) => {
    navigation.navigate('SingleCompanyScreen', { company });
  };

  const renderStars = (count) => (
    <View style={{ flexDirection: "row-reverse", marginTop: 5 }}>
      {[...Array(count)].map((_, i) => (
        <Image
          key={i}
          source={GoldStar}
          style={{ width: 16, height: 16, marginHorizontal: 1 }}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={LeftArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>الشركات</Text>
        </View>

        <View style={styles.leftIcons}>
          <TouchableOpacity
            style={{ marginStart: 15 }}
            onPress={() => setSearchVisible(true)}
          >
            <Image source={IconSearch} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginStart: 15 }}
            onPress={() => setFilterVisible(true)}
          >
            <Image source={Filter} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Scroll */}
      <View style={{ marginTop: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            paddingHorizontal: 10,
          }}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={[
                styles.categoryButton,
                activeCategory === cat.name && {
                  backgroundColor: cat.color,
                  borderColor: cat.color,
                },
              ]}
              onPress={() => handleCategoryPress(cat.name)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === cat.name && styles.categoryTextActive,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Companies List */}
      <ScrollView
        style={{ marginTop: 15, marginBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {filteredCompanies.map((company) => (
          <TouchableOpacity 
            key={company.id} 
            style={styles.card}
            onPress={() => handleCompanyPress(company)}
          >
            <Image source={company.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <View style={styles.titleRow}>
                <Text style={styles.cardTitle}>{company.title}</Text>
                <View
                  style={[
                    styles.badgeInline,
                    { backgroundColor: company.bg, borderColor: "#fff" },
                  ]}
                >
                  <Text style={[styles.badgeText, { color: company.color }]}>
                    {company.category}
                  </Text>
                </View>
              </View>
              <Text style={styles.cardDesc}>{company.description}</Text>
              {renderStars(company.rating)}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Modal */}
      <Modal 
        visible={searchVisible} 
        animationType="fade" 
        transparent
        onRequestClose={() => setSearchVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSearchVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <View style={styles.searchBar}>
              <Image source={IconSearch} style={styles.modalSearchIcon} />
              <TextInput
                placeholder="بحث"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
                textAlign="right"
              />
            </View>

            {/* Options */}
            <FlatList
              data={searchOptions.filter((item) =>
                item.includes(searchQuery.trim())
              )}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => setSelectedItem(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                  {selectedItem === item && (
                    <Text style={styles.checkIcon}>✓</Text>
                  )}
                </TouchableOpacity>
              )}
            />

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.searchBtn]}
                onPress={handleSearchConfirm}
              >
                <Text style={styles.searchText}>بحث</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={() => setSearchVisible(false)}
              >
                <Text style={styles.cancelText}>إلغاء</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Filter Modal */}
      <Modal 
        visible={filterVisible} 
        animationType="slide" 
        transparent
        onRequestClose={() => setFilterVisible(false)}
      >
        <TouchableOpacity 
          style={styles.filterOverlay}
          activeOpacity={1}
          onPress={() => setFilterVisible(false)}
        >
          <View 
            style={styles.filterContainer}
            {...panResponder.panHandlers}
          >
            <View style={styles.dragHandle} />
            
            {/* Category Dropdown */}
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>الفئة</Text>
              <View style={styles.dropdownContainer}>
                <TouchableOpacity 
                  style={styles.dropdown}
                  onPress={() => setCategoryDropdown(!categoryDropdown)}
                >
                  <Text style={styles.dropdownText}>{selectedCategory}</Text>
                  <Text style={styles.dropdownArrow}>{categoryDropdown ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {categoryDropdown && (
                  <View style={[styles.dropdownList, styles.dropdownListTop]}>
                    {categoryOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setSelectedCategory(option);
                          setCategoryDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>

            {/* Sort Dropdown */}
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>الترتيب حسب</Text>
              <View style={styles.dropdownContainer}>
                <TouchableOpacity 
                  style={styles.dropdown}
                  onPress={() => setSortDropdown(!sortDropdown)}
                >
                  <Text style={styles.dropdownText}>{selectedSort}</Text>
                  <Text style={styles.dropdownArrow}>{sortDropdown ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {sortDropdown && (
                  <View style={[styles.dropdownList, styles.dropdownListTop]}>
                    {sortOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setSelectedSort(option);
                          setSortDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>

            {/* Supplier Type */}
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>نوع المورد</Text>
              <View style={styles.rowButtons}>
                <TouchableOpacity style={styles.filterBtn}>
                  <Text>موزع</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                  <Text>الشركة المصنعة</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                  <Text>مقاول</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Rating Dropdown */}
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>تقييم</Text>
              <View style={styles.dropdownContainer}>
                <TouchableOpacity 
                  style={styles.dropdown}
                  onPress={() => setRatingDropdown(!ratingDropdown)}
                >
                  <Text style={styles.dropdownText}>{selectedRating} نجوم</Text>
                  <Text style={styles.dropdownArrow}>{ratingDropdown ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {ratingDropdown && (
                  <View style={[styles.dropdownList, styles.dropdownListBottom]}>
                    {ratingOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setSelectedRating(option);
                          setRatingDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{option} نجوم</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>

            {/* Business File Upload */}
            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>تم رفع ملف الأعمال</Text>
              <View style={styles.rowButtons}>
                <TouchableOpacity 
                  style={[
                    styles.businessFileBtn,
                    hasBusinessFile === true && styles.businessFileBtnActive
                  ]}
                  onPress={() => setHasBusinessFile(true)}
                >
                  <Text style={[
                    styles.businessFileText,
                    hasBusinessFile === true && styles.businessFileTextActive
                  ]}>
                    نعم {hasBusinessFile === true && '✓'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[
                    styles.businessFileBtn,
                    hasBusinessFile === false && styles.businessFileBtnActive
                  ]}
                  onPress={() => setHasBusinessFile(false)}
                >
                  <Text style={[
                    styles.businessFileText,
                    hasBusinessFile === false && styles.businessFileTextActive
                  ]}>
                    لا {hasBusinessFile === false && '✓'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.applyBtn]}
                onPress={() => setFilterVisible(false)}
              >
                <Text style={styles.searchText}>تطبيق الفلتر</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, styles.resetBtn]}
                onPress={() => {
                  setSelectedCategory("الإلكترونيات");
                  setSelectedSort("الاحدث");
                  setSelectedRating("5");
                  setHasBusinessFile(null);
                }}
              >
                <Text style={styles.cancelText}>إعادة ضبط</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabsWrapper}>
        <BottomTabs activeTab="Companies" setActiveTab={() => {}} />
      </View>
    </View>
  );
};

export default CompaniesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
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
  leftIcons: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: "#000",
  },
  smallIcon: {
    width: 22,
    height: 22,
    tintColor: "#000",
  },
  categoryButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: width * 0.45,
  },
  cardInfo: {
    padding: 12,
    alignItems: "flex-end",
  },
  titleRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  badgeInline: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
    flex: 1,
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    lineHeight: 20,
    textAlign: "right",
    width: "100%",
  },
  // ===== Search Modal =====
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchBar: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalSearchIcon: {
    width: 24,
    height: 24,
    tintColor: "#999",
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  optionItem: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  checkIcon: {
    color: "#3E9C7E",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#FEEAD2",
    marginRight: 10,
  },
  cancelText: {
    color: "#E3912B",
    fontWeight: "600",
  },
  searchBtn: {
    backgroundColor: "#8BADB1",
  },
  searchText: {
    color: "#fff",
    fontWeight: "600",
  },
  // ===== Filter Modal =====
  filterOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  filterContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
    maxHeight: height * 0.85,
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 3,
    marginBottom: 10,
  },
  filterSection: {
    marginBottom: 15,
  },
  filterLabel: { 
    textAlign: "right", 
    fontWeight: "600", 
    marginBottom: 8,
    fontSize: 14,
    color: "#333",
  },
  dropdownContainer: {
    position: "relative",
    zIndex: 1000,
  },
  dropdown: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dropdownText: { 
    color: "#555",
    fontSize: 14,
  },
  dropdownArrow: {
    color: "#555",
    fontSize: 12,
    marginLeft: 8,
  },
  dropdownList: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 1001,
  },
  dropdownListTop: {
    top: "100%",
    marginTop: 2,
  },
  dropdownListBottom: {
    bottom: "100%",
    marginBottom: 2,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  dropdownItemText: {
    textAlign: "right",
    color: "#555",
    fontSize: 14,
  },
  rowButtons: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  businessFileBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  businessFileBtnActive: {
    backgroundColor: "#8BADB1",
    borderColor: "#8BADB1",
  },
  businessFileText: {
    color: "#555",
    fontSize: 14,
  },
  businessFileTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  applyBtn: { 
    backgroundColor: "#8BADB1", 
    marginLeft: 10 
  },
  resetBtn: { 
    backgroundColor: "#FEEAD2" 
  },
  bottomTabsWrapper: {
    position: "fixed",
    bottom: 0,
    width: "101%",
  },
});