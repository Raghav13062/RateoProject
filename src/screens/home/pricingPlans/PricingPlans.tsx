import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomStatusbar, Header} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';

const features = [
  'AI Review Insights',
  'Rating: 5/5',
  'Shareable Review: Yes',
  'QR Banner Design Tool',
  'Monthly Reports',
  'Custom Branding',
  'Priority Support',
];

const PricingPlans = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  //** start get api call PlanList */
  const getDetails = async () => {
    try {
      const {data} = await axiosInstance.get(constant.planList);
      if (data) {
        setDataList(data?.data);
      }
    } catch (error) {
      Log('Error Plan List:', error);
    }
  };
  //** end get api call PlanList */
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <Header lable="Plans" showBackIcon containerStyle={styles.headerStyle} />
      <ScrollView contentContainerStyle={styles.container}>
      {dataList?.map((plan: any, index: number) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{plan?.plan_name}</Text>
          <Text style={styles.price}>
            {plan?.price} <Text style={styles.perYear}>/{'Per Year'}</Text>
          </Text>
          <Text style={styles.trial}>
            Free Trial Days: {plan?.free_trial_days}
          </Text>
          {/* <View style={styles.divider} /> */}
          <Text style={styles.detail}>
            ✅ {plan?.month_duration} Month Reports
          </Text>
          <Text style={styles.detail}>
            ✅ {plan?.num_establishments} Establishments
          </Text>
          <Text style={styles.detail}>
            ✅ {plan?.free_trial_days} Trial Days
          </Text>
          <Text style={styles.detail}>✅ {plan?.price} Price</Text>
          <View style={styles.divider} />
          {features.map((feature: any, i: number) => (
            <Text key={i} style={styles.detail}>
              ✅ {feature}
            </Text>
          ))}
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 14,
    borderWidth: 1,
    borderColor: color.secondaryBG,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2e86de',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  perYear: {
    fontSize: 14,
    color: '#666',
  },
  headerStyle: {
    paddingLeft: 18,
    backgroundColor: color.secondaryBG,
    marginBottom: 0,
    paddingTop: 4,
  },
  trial: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  detail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
});

export default PricingPlans;
