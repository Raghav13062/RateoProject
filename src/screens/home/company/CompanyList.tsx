import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Switch, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomStatusbar, Header} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getDetails();
  }, [companies]);

  const toggleSwitch = async (id: any, status: any) => {
    const statusData = {
      status: status == '0' ? '1' : '0',
    };
    try {
      const {data} = await axiosInstance.post(
        `${constant?.statusUpdate}${id}`,
        statusData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (data) {
        Log('update status', data);
      }
    } catch (error: any) {
      console.log(error.response.data, 'error');
    } finally {
      getDetails();
    }
  };

  //** start get api call getDetails */
  const getDetails = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant.getAllCompany}`);
      if (data) {
        setCompanies(data?.data);
      }
    } catch (error) {
      Log('Error company :-', error);
    }
  };
  //** end get api call getDetails */

  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzktZWxlbWVudC0yNS0zOTMucG5n.png',
        }}
        style={styles.logo}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item?.business_name}</Text>
        <Text style={styles.email}>{item?.email}</Text>
        <View style={styles.statusContainer}>
          <Icon
            name={item.status != '0' ? 'check-circle' : 'times-circle'}
            size={16}
            color={item.status != '0' ? '#28a745' : '#dc3545'}
            style={{marginRight: 5}}
          />
          <Text style={{color: item.status != '0' ? '#28a745' : '#dc3545'}}>
            {item.status != '0' ? 'Active' : 'Inactive'}
          </Text>
        </View>
      </View>
      <Switch
        value={item?.status == '1' ? true : false}
        onValueChange={() => toggleSwitch(item?.id, item?.status)}
        trackColor={{false: '#ccc', true: '#34D399'}}
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
          marginHorizontal: 20,
          marginTop: 15,
        }}
        data={companies}
        keyExtractor={(_, index) => `${index}`}
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
    shadowOffset: {width: 0, height: 1},
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
