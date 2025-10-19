import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import BottomTabs from '../../navigation/BottomTabs';
import { useNavigation } from '@react-navigation/native';

const AddProject = require('../../assets/images/AddProject.png');
const LeftArrow = require('../../assets/images/LeftArrow.png');
const humberger = require('../../assets/images/humberger.png');
const calender = require('../../assets/images/calender.png');
const s7 = require('../../assets/images/s7.png');
const circle = require('../../assets/images/circle.png');
const Imagen = require('../../assets/images/Imagen.png');
const star = require('../../assets/images/star.png');
const star2 = require('../../assets/images/star2.png');

const { width, height } = Dimensions.get('window');

// ✅ Circular progress component with lighter background ring
const CircularProgress = ({
  size = 70,
  strokeWidth = 6,
  progress = 65,
  color = '#E68314',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Lighter version of the main color (20% opacity)
  const lightColor = `${color}33`;

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg width={size} height={size} style={{ transform: [{ rotate: '-90deg' }] }}>
        {/* Background circle */}
        <Circle
          stroke={lightColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      {/* Percentage text */}
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const ProjectsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigation = useNavigation();

  const projects = [
    {
      id: 1,
      title: 'شقتي في مرسي - تشطيب كامل',
      subtitle: 'المرحلة الحالية: الدهانات',
      progress: 65,
      color: '#E68314',
      deliveryDate: '21 ابريل 2026',
      completedTasks: 22,
    },
    {
      id: 2,
      title: 'شقتي في جليم - تشطيب كامل',
      subtitle: 'المرحلة الحالية: تنظيف ما بعد البناء',
      progress: 100,
      color: '#00FF62',
      deliveryDate: '22 ابريل 2026',
      completedTasks: 22,
    },
    {
      id: 3,
      title: 'شقتي في التجمع الخامس - سباكة',
      subtitle: 'المرحلة الحالية: السباكة',
      progress: 25,
      color: '#D30000',
      deliveryDate: '23 ابريل 2026',
      completedTasks: 22,
    },
  ];

const handleCardPress = (project) => {
  if (project.progress === 100) {
    // Navigate directly to PaymentScreen
    navigation.navigate('PaymentScreen');
  } else {
    setSelectedProject(project);
    setModalVisible(true);
  }
};

  const handleTasksPress = () => {
    setModalVisible(false);
    // Navigate to TasksScreen after a small delay to allow modal to close smoothly
    setTimeout(() => {
      navigation.navigate('TasksScreen');
    }, 300);
  };

  const handleEditProjectPress = () => {
    setModalVisible(false);
    // Navigate to EditProjectScreen after a small delay to allow modal to close smoothly
    setTimeout(() => {
      navigation.navigate('EditProjectScreen');
    }, 300);
  };

  // Separate render function for modal card without hamburger icon
  const renderModalCard = (project) => (
    <View style={styles.modalCardContainer}>
      <View style={styles.cardLeft}>
        <CircularProgress progress={project.progress} color={project.color} />
      </View>

      <View style={styles.cardRight}>
        <View style={styles.modalCardHeader}>
          <Text style={styles.cardTitle}>{project.title}</Text>
          {/* Hamburger icon removed from modal card */}
        </View>
        <Text style={styles.cardSubtitle}>{project.subtitle}</Text>

        <Text style={styles.photosLabel}>الصور</Text>
        <View style={styles.photosRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={[styles.photoWrapper, i === 4 && styles.overlayWrapper]}>
              <Image source={circle} style={styles.circleImage} />
              {i === 4 && (
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>+</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.footerRow}>
          <Image source={calender} style={styles.calendarIcon} />
          <Text style={styles.footerText}>يسلم في {project.deliveryDate}</Text>
          <Image source={s7} style={styles.checkIcon} />
          <Text style={styles.footerText}>{project.completedTasks} مهمه تم انجازها</Text>
        </View>
      </View>
    </View>
  );

  const renderProjectCard = (project, index) => (
    <TouchableOpacity 
      key={index} 
      style={styles.card}
      onPress={() => handleCardPress(project)}
      activeOpacity={0.7}
    >
      <View style={styles.cardLeft}>
        <CircularProgress progress={project.progress} color={project.color} />
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{project.title}</Text>
          <Image source={humberger} style={styles.humberger} />
        </View>
        <Text style={styles.cardSubtitle}>{project.subtitle}</Text>

        <Text style={styles.photosLabel}>الصور</Text>
        <View style={styles.photosRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={[styles.photoWrapper, i === 4 && styles.overlayWrapper]}>
              <Image source={circle} style={styles.circleImage} />
              {i === 4 && (
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>+</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.footerRow}>
          <Image source={calender} style={styles.calendarIcon} />
          <Text style={styles.footerText}>يسلم في {project.deliveryDate}</Text>
          <Image source={s7} style={styles.checkIcon} />
          <Text style={styles.footerText}>{project.completedTasks} مهمه تم انجازها</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleWrapper}>
          <Text style={styles.headerTitle}>مشاريعك الحالية</Text>
          <Image source={LeftArrow} style={styles.leftArrow} />
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('HomeDetailsScreen'); }}>
        <Image source={AddProject} style={styles.addIcon}  />
        </TouchableOpacity>
      </View>

      {/* ScrollView for cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {projects.map(renderProjectCard)}
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Curved top border */}
                <View style={styles.modalCurve} />
                
                {/* Selected Project Card */}
                {selectedProject && (
                  <View style={styles.modalCard}>
                    {renderModalCard(selectedProject)}
                  </View>
                )}

                {/* Company Section */}
                <View style={styles.companySection}>
                  <Text style={styles.companyHeader}>الشركة المنفذه</Text>
                  
                  <View style={styles.companyInfo}>
                    <Image source={Imagen} style={styles.companyImage} />
                    <View style={styles.companyDetails}>
                      <Text style={styles.companyName}>شركة إيليت للأثاث</Text>
                      <View style={styles.ratingContainer}>
                        <View style={styles.starsContainer}>
                          {[1, 2, 3, 4].map((i) => (
                            <Image key={i} source={star} style={styles.star} />
                          ))}
                          <Image source={star2} style={styles.star} />
                        </View>
                       <Text style={styles.ratingText}>6.5K</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.companyDescription}>
شركة إيليت للأثاث هي إحدى الشركات المصرية المتخصصة في تصميم وتصنيع وتوريد الأثاث بمستويات عالية من الجودة، وتمتلك خبرة طويلة في تجهيز الوحدات السكنية والفيلات والمشاريع السياحية، وتتميز باستخدامها خامات عصرية وضمانها لخدماتها، إضافة إلى امتلاكها فريق من المصممين والمهندسين المتخصصين في أحدث اتجاهات التصميم الداخلي.
                  </Text>
                  <Text style={styles.companyDescription}>
                    ستقوم الشركة بتجهيز الوحدة الخاصة بك في الساحل الشمالي من خلال توريد وتنفيذ الأثاث اللازم لكل الغرف، بما في ذلك غرف النوم والمعيشة، وتنفيذ المطابخ المجهزة بالكامل، وتوريد أثاث خارجي للشرفات والتراسات، مع إمكانية تقديم حلول تصميم داخلي متكاملة وخدمات ما بعد البيع لضمان رضاك الكامل عن النتيجة النهائية.
                  </Text>

                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                      style={[styles.button, styles.tasksButton]}
                      onPress={handleTasksPress}
                    >
                      <Text style={styles.tasksButtonText}>عرض المهمات</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.button, styles.editButton]}
                      onPress={handleEditProjectPress}
                    >
                      <Text style={styles.editButtonText}>تعديل علي المشروع</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabsWrapper}>
        <BottomTabs activeTab="ProjectsScreen" setActiveTab={() => { }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  header: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  addIcon: { width: 30, height: 30, resizeMode: 'contain' },
  headerTitleWrapper: { flexDirection: 'row', alignItems: 'center' },
  headerTitle: {
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
    marginLeft: 10,
  },
  leftArrow: { width: 20, height: 20, resizeMode: 'contain', marginLeft: 8 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 120 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  modalCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardLeft: { justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  progressText: { position: 'absolute', fontWeight: '700', fontSize: 16, color: '#000' },
  cardRight: { flex: 1 },
  cardHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalCardHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
    flex: 1,
  },
  humberger: { width: 20, height: 20, resizeMode: 'contain', marginLeft: -70 },
  cardSubtitle: {
    textAlign: 'right',
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    marginBottom: 8,
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
  },
  photosLabel: { textAlign: 'right', fontWeight: '600', marginBottom: 4 },
  photosRow: { flexDirection: 'row-reverse', marginBottom: 8 },
  photoWrapper: { marginLeft: -10 },
  circleImage: { width: 35, height: 35, borderRadius: 17.5 },
  overlayWrapper: { position: 'relative' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footerRow: { flexDirection: 'row-reverse', alignItems: 'center', marginTop: 4 },
  calendarIcon: { width: 16, height: 18, marginLeft: 4 },
  footerText: {
    fontSize: 13,
    color: '#a8a5a5ff',
    marginLeft: 6,
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
  },
  checkIcon: { width: 16, height: 16 },
  bottomTabsWrapper: { position: 'absolute', bottom: 0, left: 0, right: 0 },
  
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: height * 0.85,
  },
  modalCurve: {
    width: 60,
    height: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalCard: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  companySection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  companyHeader: {
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'right',
    marginBottom: 16,
    color: '#000',
  },
  companyInfo: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 16,
  },
  companyImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginLeft: 12,
  },
  companyDetails: {
    flex: 1,
  },
  companyName: {
    fontFamily: 'Alexandria',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'right',
    marginBottom: 8,
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Alexandria',
    fontWeight: '700',
    fontSize: 12,
    marginLeft: 8,
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row-reverse',
  },
  star: {
    width: 12,
    height: 12,
    marginLeft: 2,
  },
  companyDescription: {
    fontFamily: 'Alexandria',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'right',
    color: '#000000ff',
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksButton: {
    backgroundColor: '#8BADB1',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#FFE4C7',
    marginRight: 8,
  },
  tasksButtonText: {
    color: '#fff',
    fontFamily: 'Alexandria',
    fontWeight: '700',
    fontSize: 14,
  },
  editButtonText: {
    color: '#E68314',
    fontFamily: 'Alexandria',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default ProjectsScreen;