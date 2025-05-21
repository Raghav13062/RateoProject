import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Switch,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomStatusbar, Header } from '../../../components/componentsIndex';
import color from '../../../theme/color';

const companiesData = [
  {
    id: '1',
    name: 'White Technology',
    email: 'company@gmail.com',
    logo: 'https://img.freepik.com/premium-photo/white-bearded-man-png-sticker-transparent-background_53876-943032.jpg?semt=ais_hybrid&w=740',
    active: true,
  },
  {
    id: '2',
    name: 'Glimmers',
    email: 'ktech@gmail.com',
    logo: 'https://via.placeholder.com/50',
    active: true,
  },
  {
    id: '3',
    name: 'White Tech',
    email: 'saklenkhan000@gmail.com',
    logo: 'https://via.placeholder.com/50',
    active: true,
  },
  {
    id: '4',
    name: 'ApexHealth',
    email: 'joshi@apexhealth.com',
    logo: 'https://via.placeholder.com/50',
    active: true,
  },
  {
    id: '5',
    name: 'ApexHealth',
    email: 'joshi15@apexhealth.com',
    logo: 'https://via.placeholder.com/50',
    active: true,
  },
];

export default function CompanyList() {
  const [companies, setCompanies] = useState(companiesData);

  const toggleSwitch = (id) => {
    const updated = companies.map(company =>
      company.id === id ? { ...company, active: !company.active } : company
    );
    setCompanies(updated);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzktZWxlbWVudC0yNS0zOTMucG5n.png" }} style={styles.logo} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <View style={styles.statusContainer}>
          <Icon
            name={item.active ? 'check-circle' : 'times-circle'}
            size={16}
            color={item.active ? '#28a745' : '#dc3545'}
            style={{ marginRight: 5 }}
          />
          <Text style={{ color: item.active ? '#28a745' : '#dc3545' }}>
            {item.active ? 'Active' : 'Inactive'}
          </Text>
        </View>
      </View>

      <Switch
        value={item.active}
        onValueChange={() => toggleSwitch(item.id)}
        trackColor={{ false: '#ccc', true: '#34D399' }}
        thumbColor={item.active ? '#10B981' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
           <CustomStatusbar
                      backgroundColor={color.secondaryBG}
                      barStyle="dark-content"
                    />
                    <Header
                      lable="Company"
                      showBackIcon
                      containerStyle={styles.headerStyle}
                    />
      <FlatList 
      style={{
        marginHorizontal:20,
        marginTop:15
      }}
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#f2f2f2',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#222',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  headerStyle: {
        paddingLeft: 18,
        backgroundColor: color.secondaryBG,
        marginBottom: 0,
        paddingTop: 4,
      },
});
