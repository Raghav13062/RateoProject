import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomStatusbar, Header } from '../../../components/componentsIndex';
import color from '../../../theme/color';

const plans = [
  {
    title: 'Basic Plan',
    price: '$199.99',
    duration: 'Per Year',
    trial: '10',
    reports: '3',
    establishments: '5',
    features: ['AI Review Insights', 'Rating: 5/5', 'Shareable Review: Yes', 'QR Banner Design Tool', 'Monthly Reports', 'Custom Branding', 'Priority Support'],
  },
  {
    title: 'Pro Plan',
    price: '$499.99',
    duration: 'Per Year',
    trial: '14',
    reports: '6',
    establishments: '10',
    features: ['AI Review Insights', 'Rating: 5/5', 'Shareable Review: Yes', 'QR Banner Design Tool', 'Monthly Reports', 'Custom Branding', 'Priority Support'],
  },
  {
    title: 'Growth Plan',
    price: '$799.00',
    duration: 'Per Year',
    trial: '14',
    reports: '9',
    establishments: '20',
    features: ['AI Review Insights', 'Rating: 5/5', 'Shareable Review: Yes', 'QR Banner Design Tool', 'Monthly Reports', 'Custom Branding', 'Priority Support'],
  },
];

const PricingPlans = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
          <CustomStatusbar
                      backgroundColor={color.secondaryBG}
                      barStyle="dark-content"
                    />
                    <Header
                      lable="Plans"
                      showBackIcon
                      containerStyle={styles.headerStyle}
                    />
      {plans.map((plan, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.price}>{plan.price} <Text style={styles.perYear}>/{plan.duration}</Text></Text>
          <Text style={styles.trial}>Free Trial Days: {plan.trial}</Text>
          <View style={styles.divider} />
          <Text style={styles.detail}>✅ {plan.reports} Month Reports</Text>
          <Text style={styles.detail}>✅ {plan.establishments} Establishments</Text>
          <Text style={styles.detail}>✅ {plan.trial} Trial Days</Text>
          <Text style={styles.detail}>✅ {plan.price} Price</Text>
          {/* {plan.features.map((feature, i) => (
            <Text key={i} style={styles.detail}>✅ {feature}</Text>
          ))} */}
        </View>
      ))}
    </ScrollView>
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
     marginHorizontal:20,
    marginTop:14,
    borderWidth:1,
    borderColor:color.secondaryBG
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
