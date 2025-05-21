// import React, {FC} from 'react';
// import {FlatList, Image, TouchableOpacity, View} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {
//   CustomStatusbar,
//   SearchBar,
//   TextCustom,
// } from '../../../components/componentsIndex';
// import color from '../../../theme/color';
// import styles from './myAds.style';
// import useDashBord from './useMyAds';
// import imageIndex from '../../../assets/imageIndex';
// import {adsListdata} from './myAds.const';

// const MyAds: FC = () => {
//   const {dashState, updateState, userData, navigation, selectLocation} =
//     useDashBord();

//   return (
//     <View style={styles.container}>
//       <CustomStatusbar
//         backgroundColor={color.pacificBlue}
//         barStyle="light-content"
//       />
//       <View style={styles.stepHeader}>
//         <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
//           <View style={styles.backButtonViewLocation}>
//             <Image style={styles.userLogo} source={imageIndex.teamwork} />
//           </View>
//         </Animatable.View>
//         <Animatable.Text
//           animation="fadeInDown"
//           duration={800}
//           delay={300}
//           allowFontScaling={false}
//           style={styles.stepTitle}>
//           {`Welcome ${userData?.fullName ?? 'Customer'}`}
//         </Animatable.Text>
//       </View>
//       <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
//         <SearchBar
//           placeholder={`Search My Ads`}
//           placeholderTextColor={color.darkGreen}
//           containerStyle={styles.searchContainerStyle}
//           selectionColor={color.pacificBlue}
//         />
//       </Animatable.View>
//       <Animatable.View
//         animation="fadeInUp"
//         duration={1000}
//         delay={400}
//         style={styles.filetrRowStyle}>
//         <TextCustom label={`Features Ads`} style={styles.headingText} />
//         <Icon name="filter-outline" size={34} color={color.pacificBlue} />
//       </Animatable.View>
//       <Animatable.View
//         animation="fadeInLeft"
//         duration={800}
//         delay={100}
//         style={styles.flatAnimation}>
//         <FlatList
//           data={adsListdata}
//           renderItem={({item, index}: any) => (
//             <View key={index} style={styles.card}>
//               <Image source={{uri: item.image}} style={styles.image} />
//               <View style={styles.infoContainer}>
//                 <TextCustom label={item?.title} style={styles.title} />
//                 <TextCustom
//                   label={item?.decription}
//                   style={styles.description}
//                 />
//                 <View style={styles.footer}>
//                   <TextCustom label={'22 Feb 2022'} style={styles.date} />
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     style={styles.callButton}>
//                     <TextCustom label={'CALL NOW'} style={styles.callText} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           )}
//           keyExtractor={(_, index) => `${index}`}
//           contentContainerStyle={styles.flatStyle}
//           showsVerticalScrollIndicator={false}
//           ListFooterComponent={() => <View style={{marginBottom: '20%'}} />}
//         />
//       </Animatable.View>
//     </View>
//   );
// };

// export default MyAds;
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {CustomStatusbar} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import CustomProgressBar from '../../../components/common/customProgressBar/CustomProgressBar';
// import { Ionicons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import useMyAds from './useMyAds';

const reviews = [
  {
    email: 'rehamn@gmail.com',
    date: '5/15/2025',
    feedback: 'Excellent services',
    rating: 5,
  },
  {email: 'rehamn@gmail.com', date: '5/15/2025', feedback: '', rating: 5},
  {
    email: 'rehan@gmail.com',
    date: '5/15/2025',
    feedback: 'Good staff but location is not ideal',
    rating: 4,
  },
];

const ReviewManagementScreen = () => {
  const {userData, navigation, selectLocation} = useMyAds();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const filtered = reviews.filter(
    r =>
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      r.feedback.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / reviewsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="light-content"
      />
      <LinearGradient
        style={styles.container}
        colors={color.linerCollor}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.stepHeader}>
          <Animatable.Text
            animation="fadeInDown"
            duration={800}
            delay={300}
            allowFontScaling={false}
            style={styles.stepTitle}>
            {`Welcome ${userData?.name}`}
          </Animatable.Text>
        </View>
      </LinearGradient>
      <ScrollView
        style={styles.containerSchroll}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.screenTitle}>Review Management</Text>
        {/* Overview Section */}
        <View style={styles.card}>
          {/* <Text style={styles.title}>Overview</Text> */}
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '500',
            }}>
            {/* Total Reviews : <Text style={styles.bold}>{reviews.length}</Text> */}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '500',
            }}>
            Average Rating :{' '}
            <Text style={styles.bold}>{avgRating.toFixed(1)}</Text> ⭐
          </Text>
          <Text style={styles.subheading}>Rating Distribution:</Text>
          {[5, 4, 3, 2, 1].map(rate => {
            const percent =
              (reviews.filter(r => r.rating === rate).length / reviews.length) *
              100;
            return (
              <View key={rate} style={styles.barRow}>
                <Text>{rate}</Text>
                <View style={styles.barWrapper}>
                  <CustomProgressBar
                    progress={0.72}
                    fillColor={color.secondaryBG}
                    height={12}
                  />
                </View>
                <Text style={styles.percent}>{Math.round(percent)}%</Text>
              </View>
            );
          })}
        </View>

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={color.black}
          value={search}
          onChangeText={setSearch}
        />

        {paginated.map((item, idx) => (
          <View key={idx} style={styles.reviewCard}>
            <View style={styles.cardTop}>
              {/* <Ionicons name="person-circle-outline" size={30} color="#555" /> */}
              <View>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.feedback}>
              {item.feedback ? (
                item.feedback
              ) : (
                <Text style={styles.noFeedback}>No Feedback Provided</Text>
              )}
            </Text>
            <View style={styles.stars}>
              {/* {Array.from({ length: item.rating }).map((_, i) => (
              // <Ionicons key={i} name="star" size={18} color="#FFD700" />
            ))} */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ReviewManagementScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#f6f8fa'},
  containerSchroll: {paddingHorizontal: 20},
  screenTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginVertical: 12,
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: color.whiteLight,
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {fontSize: 20, fontWeight: '600', color: 'gray', marginBottom: 6},
  bold: {fontWeight: '500', fontSize: 14, color: 'black', marginLeft: 5},
  subheading: {
    marginTop: 10,
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '600',
    color: 'black',
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  barRow: {flexDirection: 'row', alignItems: 'center', marginVertical: 4},
  barWrapper: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
  barFill: {
    height: 8,
    backgroundColor: '#4caf50',
    borderRadius: 6,
  },
  percent: {width: 40, color: color.activeTab},

  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    color: 'black',
    fontSize: 15,
  },

  reviewCard: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderColor: color.activeTab,
    borderWidth: 1,
  },
  cardTop: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  email: {fontWeight: '600', fontSize: 17, color: 'black'},
  date: {
    color: '#777',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 3,
    marginBottom: 5,
  },
  feedback: {marginBottom: 8, fontSize: 14},
  noFeedback: {color: '#999', fontStyle: 'italic'},
  stars: {flexDirection: 'row'},

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  page: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pageText: {color: '#333'},
  activePage: {
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
  },
  activePageText: {color: '#fff', fontWeight: 'bold'},
});
