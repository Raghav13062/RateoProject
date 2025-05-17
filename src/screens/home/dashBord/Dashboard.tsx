// import React, {FC} from 'react';
// import {Image, TouchableOpacity, View} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import {
//   CustomStatusbar,
//   SearchBar,
//   TextCustom,
// } from '../../../components/componentsIndex';
// import color from '../../../theme/color';
// import styles from './dashBord.style';
// import useDashBord from './useDashBord';
// import imageIndex from '../../../assets/imageIndex';
// import {adsListdata, bannerData, categoryList} from './dashboard.const';
// import {ScrollView} from 'react-native';
// import CategoryCard from '../../../components/card/categoryCard/CategoryCard';
// import {AdsCard} from '../../../components/cardIndex';
// import {FlatList} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Dashboard: FC = () => {
//   const {
//     dashState,
//     updateState,
//     userData,
//     flatListRef,
//     currentIndexRef,
//     onScroll,
//     screenWidth,
//     navigationToPostAds,
//   } = useDashBord();

//   const Card = ({item}: any) => (
//     <TouchableOpacity style={styles.card} activeOpacity={0.9}>
//       <Image style={styles.imageCardStyle} source={item?.image} />
//     </TouchableOpacity>
//   );

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
//         <TouchableOpacity onPress={navigationToPostAds} activeOpacity={0.8}>
//           <Animatable.View
//             animation="pulse"
//             iterationCount="infinite"
//             duration={1000}>
//             <Icon
//               name="add-circle-outline"
//               size={34}
//               color={color.secondaryBG}
//             />
//           </Animatable.View>
//         </TouchableOpacity>
//       </View>
//       <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
//         <SearchBar
//           placeholder={`Search Category`}
//           placeholderTextColor={color.darkGreen}
//           containerStyle={styles.searchContainerStyle}
//           selectionColor={color.pacificBlue}
//         />
//       </Animatable.View>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={styles.flatListBorderViewStyle}>
//         <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
//           <FlatList
//             ref={flatListRef}
//             data={bannerData}
//             renderItem={Card}
//             style={styles.flatStyle}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             onScroll={onScroll}
//             scrollEnabled={true}
//             keyExtractor={(_, index) => `${index}`}
//             scrollEventThrottle={16}
//             onMomentumScrollEnd={event => {
//               const offsetX = event?.nativeEvent?.contentOffset.x;
//               const newIndex = Math.round(offsetX / screenWidth);
//               if (newIndex < bannerData?.length) {
//                 // setCurrentIndex(newIndex);
//               }
//             }}
//           />
//         </Animatable.View>
//         <Animatable.View animation="fadeInUp" duration={1000} delay={400}>
//           <TextCustom label={`Features Ads`} style={styles.headingText} />
//         </Animatable.View>
//         <Animatable.View
//           animation="fadeInUp"
//           duration={1000}
//           delay={400}
//           style={styles.flatListBorderViewStyle}>
//           <FlatList
//             style={styles.categoryFlatList}
//             showsHorizontalScrollIndicator={false}
//             data={adsListdata}
//             renderItem={({item, index}: any) => (
//               <AdsCard index={index} item={item} />
//             )}
//             keyExtractor={(_, index) => `${index}`}
//             horizontal={true}
//             ListFooterComponent={() => <View style={{marginBottom: 10}} />}
//           />
//         </Animatable.View>
//         <Animatable.View animation="fadeInUp" duration={1000} delay={400}>
//           <TextCustom label={`Latest Ads`} style={styles.headingText} />
//         </Animatable.View>
//         <Animatable.View
//           animation="fadeInUp"
//           duration={1000}
//           delay={400}
//           style={styles.flatListBorderViewStyle}>
//           <FlatList
//             style={styles.categoryFlatList}
//             showsHorizontalScrollIndicator={false}
//             data={adsListdata}
//             renderItem={({item, index}: any) => (
//               <AdsCard index={index} item={item} />
//             )}
//             keyExtractor={(_, index) => `${index}`}
//             horizontal={true}
//             ListFooterComponent={() => <View style={{marginBottom: 10}} />}
//           />
//         </Animatable.View>
//         <Animatable.View animation="fadeInUp" duration={1000} delay={400}>
//           <TextCustom label={`Category`} style={styles.headingText} />
//         </Animatable.View>
//         <Animatable.View
//           animation="fadeInUp"
//           duration={1000}
//           delay={400}
//           style={styles.categoryFlatStyle}>
//           <FlatList
//             style={styles.categoryFlatList}
//             data={dashState?.categoriesList}
//             renderItem={({item, index}: any) => (
//               <CategoryCard index={index} item={item} />
//             )}
//             keyExtractor={(_, index) => `${index}`}
//             numColumns={3}
//             ListFooterComponent={() => <View style={{marginBottom: 10}} />}
//           />
//         </Animatable.View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Dashboard;
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import CustomProgressBar from '../../../components/common/customProgressBar/CustomProgressBar';
import { CustomStatusbar } from '../../../components/componentsIndex';
import color from '../../../theme/color';
 import * as Animatable from 'react-native-animatable';
import imageIndex from '../../../assets/imageIndex';
import { Icon } from 'react-native-vector-icons/Icon';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = () => {
  const recentReviews = [
    { name: 'John Doe', review: 'Great service and friendly staff!' },
   
  ];

const keywords = [
    { keyword: 'Service', progress: 0.9,color:color.secondaryBG },
    { keyword: 'Food', progress: 0.5 ,color:color.viridianGreen},
    { keyword: 'Food', progress: 0.1 ,color:color.pacificBlue},
   ];

  return (
    <SafeAreaView  style={styles.container}>
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
         {/* <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
           <View style={styles.backButtonViewLocation}>
             <Image style={styles.userLogo} source={imageIndex.teamwork} />
           </View>
         </Animatable.View> */}
         <Animatable.Text
           animation="fadeInDown"           duration={800}
          delay={300}
          allowFontScaling={false}
          style={styles.stepTitle}>
          {`Welcome Customer`}
        </Animatable.Text>
        <TouchableOpacity   activeOpacity={0.8}>
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={1000}>
            {/* <Icon
              name="add-circle-outline"
              size={34}
              color={color.secondaryBG}
            /> */}
          </Animatable.View>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    <ScrollView style={{
      marginBottom:135
    }} showsVerticalScrollIndicator={false}>
    
      <View style={{
        marginHorizontal:20,
        marginTop:15,
        marginBottom:15
      }}>
      <View style={styles.row}>
  <View style={[styles.card, styles.equalCard]}>
    <Text style={styles.title}>Average Rating</Text>
    <Text style={styles.value}>4.2</Text>
    <Text style={styles.subValue}>12%</Text>
  </View>

  <View style={[styles.card, styles.equalCard]}>
    <Text style={styles.title}>Total Reviews</Text>
    <Text style={styles.value}>120</Text>
    <Text style={styles.subValue}>8%</Text>
  </View>
</View>


      <View style={styles.card}>
        <Text style={styles.title}>Sentiment Distribution</Text>
        <CustomProgressBar progress={0.72} fillColor={color.secondaryBG} height={12} />
        <Text style={styles.subText}>72% Positive</Text>
      </View>

      <Text style={styles.sectionHeader}>Recent Reviews</Text>
      {recentReviews.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.reviewName}>{item.name}</Text>
          <Text style={styles.reviewText}>{item.review}</Text>
        </View>
      ))}

      <Text style={styles.sectionHeader}>Top Keywords</Text>
      <View style={styles.card}>
        {keywords.map((item, index) => (
          <View key={index} style={{ marginBottom: 20,flex:1,paddingVertical:2,  }}>
            <Text style={styles.keyword}>{item.keyword}</Text>
            <View style={{
              marginTop:10
            }}>
            <CustomProgressBar progress={item.progress} fillColor={item?.color} />
            </View>
          </View>
        ))}
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#f5f6fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2f3542',
    textAlign: 'center',
  },
  row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 10, // Optional for spacing, or use marginRight
},
equalCard: {
  flex: 1,
  alignItems: 'center',       // center content horizontally
  justifyContent: 'center',   // center content vertically
  minHeight: 120,             // ensure both cards have same height
},
 
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
     elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
    stepHeader: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
       paddingVertical: 20,
    },
    stepTitle: {
      fontSize: 24,
      lineHeight: 29,
      fontWeight: '800',
      color: color.whiteLight,
       flex: 1,
    },
    flatStyle: {
      marginTop: 2,
    },
    backButtonViewLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
      backgroundColor: color.secondaryBG,
      borderRadius: 30,
      padding: 1.3,
    },
    userLogo: {
      height: 43,
      width: 43,
      resizeMode: 'contain',
    },
    searchContainerStyle: {
      marginTop: 10,
      paddingHorizontal: 20,
    },
  
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2f3542',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  subValue: {
    marginTop: 4,
    color: '#2ecc71',
    fontSize: 14,
  },
  subText: {
    marginTop: 6,
    fontSize: 14,
    color: '#2e7d32',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    color: '#34495e',
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#1e272e',
  },
  reviewText: {
    fontSize: 14,
    color: '#636e72',
  },
  keyword: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 4,
    color: 'black',
  },
});

export default Dashboard;
