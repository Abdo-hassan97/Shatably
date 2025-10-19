import React, { useState,useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';

// Import styles from the separate file
import { styles } from './HomepageScreen.styles';
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import BottomTabs from '../../navigation/BottomTabs';

// Note: You'll need to replace these with your actual image imports
const HomeBG = require('../../assets/images/HomeBG.png');
const Notifications = require('../../assets/images/Notifications.png');
const Burger = require('../../assets/images/Burger.png');
const Search = require('../../assets/images/Search.png');
const building = require('../../assets/images/building-4.png');
const sofa = require('../../assets/images/sofa.png');
const brush = require('../../assets/images/brush.png');
const judge = require('../../assets/images/judge.png');
const house = require('../../assets/images/house.png');
const category = require('../../assets/images/category.png');
const ProjectImage = require('../../assets/images/Image.png');
const clock = require('../../assets/images/clock.png');
const arrowLeft = require('../../assets/images/IconArrow.png');
const image2 = require('../../assets/images/image2.png');
const iconsDots = require('../../assets/images/iconsDots.png');
const GoldStart = require('../../assets/images/GoldStart.png');
const whiteStart = require('../../assets/images/whiteStart.png');
const ImageCard = require('../../assets/images/ImageCard.png');
const Rectangle = require('../../assets/images/Rectangle.png');
const Rectanglee = require('../../assets/images/Rectanglee.png');
const Wishlist = require('../../assets/images/Wishlist.png');
const Group = require('../../assets/images/Group.png');
const b7r = require('../../assets/images/b7r.png');

const HomepageScreen = () => {
  const drawerRef = useRef(null);
   const [activeTab, setActiveTab] = useState('Homepage');
  // Service data
  const services = [
    { icon: category, title: 'عرض الكل', bgColor: '#8BADB1' },
    { icon: house, title: 'تصميم داخلي' },
    { icon: judge, title: 'صيانة وإصلاحات' },
    { icon: brush, title: 'خدمات فردية' },
    { icon: sofa, title: 'باقات الأثاث' },
    { icon: building, title: 'تشطيبات كاملة' },
  ];

  // Projects data
  const projects = [
    { 
      title: 'شقتي في التجمع', 
      stage: 'المرحلة الحالية: الدهان',
      progress: 65,
      image: ProjectImage,
      status: 'تفحص'
    },
    { 
      title: 'شقتي في مراسي', 
      stage: 'المرحلة الحالية: الدهان',
      progress: 45,
      image: ProjectImage,
      status: 'تفحص'
    }
  ];

  // Featured companies data
  const featuredCompanies = [
    {
      id: 1,
      image: image2,
      title: 'شركة إيليت للأثاث',
      category: 'أثاث',
      rating: 4.5,
      reviews: '6.5K',
      description: 'أثاث فاخر لغرف المعيشة'
    },
    {
      id: 2,
      image: image2,
      title: 'شركة ديكورات',
      category: 'ديكور',
      rating: 4.2,
      reviews: '3.2K',
      description: 'أفضل الديكورات المنزلية'
    },
    {
      id: 3,
      image: image2,
      title: 'شركة تشطيبات',
      category: 'تشطيب',
      rating: 4.8,
      reviews: '8.1K',
      description: 'تشطيبات كاملة وشاملة'
    }
  ];

  // Finishing supplies data
  const finishingSupplies = [
    {
      id: 1,
      image: Rectangle,
      title: 'خلاط حوض 3 فتحة عالي اللور ذهبي مطفي جروهي',
      price: '1,620.25',
      rating: 4.6
    },
    {
      id: 2,
      image: Rectanglee,
      title: 'خلاط حوض 3 فتحة عالي اللور ذهبي مطفي جروهي',
      price: '1,620.25',
      rating: 4.6
    },
    {
      id: 3,
      image: Rectangle,
      title: 'خلاط حوض 3 فتحة عالي اللور ذهبي مطفي جروهي',
      price: '1,620.25',
      rating: 4.6
    },
    {
      id: 4,
      image: Rectanglee,
      title: 'خلاط حوض 3 فتحة عالي اللور ذهبي مطفي جروهي',
      price: '1,620.25',
      rating: 4.6
    }
  ];

  // Open drawer function
  const openDrawer = () => {
    console.log('Opening drawer...');
    drawerRef.current?.openDrawer();
  };

  // Close drawer function
  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Image key={i} source={GoldStart} style={styles.starIcon} resizeMode="contain" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Image key={i} source={whiteStart} style={styles.starIcon} resizeMode="contain" />
        );
      } else {
        stars.push(
          <Image key={i} source={whiteStart} style={styles.starIcon} resizeMode="contain" />
        );
      }
    }
    
    return stars;
  };

  // Navigation view for the drawer
  const navigationView = () => (
    <CustomDrawer closeDrawer={closeDrawer} />
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
      drawerBackgroundColor="transparent"

       
    >
      
      <ScrollView style={styles.container}>
        {/* Background Section */}
        <ImageBackground source={HomeBG} style={styles.backgroundImage}>
          {/* Status Bar Background */}
          <View style={styles.statusBarBackground} />
          
          {/* Top Icons */}
          <View style={styles.topIconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image 
                source={Notifications} 
                style={styles.iconImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
<TouchableOpacity style={styles.iconButton} onPress={() => openDrawer()}>
  <Image source={Burger} style={styles.iconImage} resizeMode="contain" />
</TouchableOpacity>

          </View>
          
          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              شطب شقتك بدون تعب - عروض خاصة قبل الصيف
            </Text>
          </View>
          
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="إبحث عن خدمة أو شركة..."
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={styles.searchIconContainer}>
                <Image 
                  source={Search} 
                  style={styles.searchIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Services Section */}
        <View style={styles.servicesContainer}>
          <View style={styles.servicesRow}>
            {services.map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <View 
                  style={[
                    styles.serviceIconContainer,
                    service.bgColor && { backgroundColor: service.bgColor }
                  ]}
                >
                  <Image 
                    source={service.icon} 
                    style={styles.serviceIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Current Projects Section */}
        <View style={styles.projectsContainer}>
          {/* Projects Header */}
          <View style={styles.projectsHeader}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Image 
                source={arrowLeft} 
                style={styles.arrowIcon}
                resizeMode="contain"
              />
              <Text style={styles.viewAllText}>عرض الكل</Text>
            </TouchableOpacity>
            <Text style={styles.projectsTitle}>مشاريعك الحالية</Text>
          </View>

          {/* Projects Cards */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.projectsScrollView}
          >
            {projects.map((project, index) => (
              <View key={index} style={styles.projectCard}>
                {/* Project Image */}
                <Image 
                  source={project.image} 
                  style={styles.projectImage}
                  resizeMode="cover"
                />
                
                {/* Project Title */}
                <Text style={styles.projectName}>{project.title}</Text>
                
                {/* Project Stage with Clock Icon */}
                <View style={styles.stageContainer}>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{project.status}</Text>
                  </View>
                  <View style={styles.stageTextContainer}>
                    <Text style={styles.stageText}>{project.stage}</Text>
                    <Image 
                      source={clock} 
                      style={styles.clockIcon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                
                {/* Progress Section */}
                <View style={styles.progressContainer}>
                  <View style={styles.progressTextContainer}>
                    <Text style={styles.progressText}>{project.progress}%</Text>
                  </View>
                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBackground}>
                      <View 
                        style={[
                          styles.progressFill, 
                          { width: `${project.progress}%` }
                        ]} 
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured Companies Section */}
        <View style={styles.companiesContainer}>
          {/* Companies Header */}
          <View style={styles.companiesHeader}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Image 
                source={arrowLeft} 
                style={styles.arrowIcon}
                resizeMode="contain"
              />
              <Text style={styles.viewAllText}>عرض الكل</Text>
            </TouchableOpacity>
            <Text style={styles.companiesTitle}>شركات مميزة</Text>
          </View>

          {/* Companies Cards */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.companiesScrollView}
          >
            {featuredCompanies.map((company) => (
              <View key={company.id} style={styles.companyCard}>
                {/* Company Image with Dots Icon */}
                <View style={styles.companyImageContainer}>
                  <Image 
                    source={company.image} 
                    style={styles.companyImage}
                    resizeMode="cover"
                  />
                  <TouchableOpacity style={styles.dotsIconContainer}>
                    <Image 
                      source={iconsDots} 
                      style={styles.dotsIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                
                {/* Company Info */}
                <View style={styles.companyInfo}>
                  {/* Title and Category */}
                  <View style={styles.titleContainer}>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{company.category}</Text>
                    </View>
                    <Text style={styles.companyTitle}>{company.title}</Text>
                  </View>
                  
                  {/* Description */}
                  <Text style={styles.companyDescription}>{company.description}</Text>
                  
                  {/* Rating and Reviews */}
                  <View style={styles.ratingContainer}>
                    <View style={styles.starsContainer}>
                      {renderStars(company.rating)}
                      <Text style={styles.ratingText}>{company.rating}</Text>
                    </View>
                    <Text style={styles.reviewsText}>({company.reviews})</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        
        {/* New Promotion Section */}
        <View style={styles.promotionContainer}>
          <View style={styles.gradientCard}>
            <Image 
              source={ImageCard} 
              style={styles.promotionImage}
              resizeMode="contain"
            />
            <View style={styles.promotionTextContainer}>
              <Text style={styles.promotionHeader}>شطب و قسط مع شطبلی</Text>
              <Text style={styles.promotionSubheader}>تشطيب فاخر في 45 يوم و بتقسیط مريح و بدون مقدم</Text>
              <TouchableOpacity>
                <Text style={styles.promotionLink}>شاهد المزيد</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Finishing Supplies Section */}
        <View style={styles.suppliesContainer}>
          {/* Supplies Header */}
          <View style={styles.suppliesHeader}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Image 
                source={arrowLeft} 
                style={styles.arrowIcon}
                resizeMode="contain"
              />
              <Text style={styles.viewAllText}>عرض الكل</Text>
            </TouchableOpacity>
            <Text style={styles.suppliesTitle}>مستلزمات التشطيب</Text>
          </View>

          {/* Supplies Cards */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suppliesScrollView}
          >
            {finishingSupplies.map((item) => (
              <View key={item.id} style={styles.supplyCard}>
                {/* Supply Image with Wishlist Icon */}
                <View style={styles.supplyImageContainer}>
                  <Image 
                    source={item.image} 
                    style={styles.supplyImage}
                    resizeMode="cover"
                  />
                  <TouchableOpacity style={styles.wishlistIconContainer}>
                    <Image 
                      source={Wishlist} 
                      style={styles.wishlistIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                
                {/* Supply Info */}
                <View style={styles.supplyInfo}>
                  {/* Title */}
                  <Text style={styles.supplyTitle}>{item.title}</Text>
                  
                  {/* Price and Rating */}
                  <View style={styles.priceRatingContainer}>
                    <View style={styles.singleRatingContainer}>
                      <Image 
                        source={GoldStart} 
                        style={styles.singleStarIcon}
                        resizeMode="contain"
                      />
                      <Text style={styles.singleRatingText}>{item.rating}</Text>
                    </View>
                  <Text style={styles.supplyPrice}>ج.م {item.price}</Text>
     
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        
        {/* Group Image Section - Full Width */}
        <View style={styles.groupImageContainer}>
          <Image 
            source={Group} 
            style={styles.groupImage}
            resizeMode="cover"
          />
        </View>
        
        <View style={{marginBottom:30}}>
          <ProjectsCarousel />
        </View>

      </ScrollView>
      <View style={{ paddingTop: 80 }}>
        <BottomTabs activeTab="Homepage" setActiveTab={() => {}} />
      </View>
    </DrawerLayoutAndroid>
    
  );
};

export default HomepageScreen;
