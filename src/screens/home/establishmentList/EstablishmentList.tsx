import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../../theme/color';
import {CustomStatusbar, Header} from '../../../components/componentsIndex';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';

const EstablishmentList = () => {
  const {userData} = useAppSelector((state: RootState) => state.UserData);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [selectedEstablishment, setSelectedEstablishment] = useState<any>(null);

  useEffect(() => {
    getDetails();
  }, []);

  //** start get api call getDetails */
  const getDetails = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant.establishmentList}/${userData?.id}`,
      );
      if (data) {
        setDataList(data?.data);
      }
    } catch (error) {
      Log('Error error :', error);
    }
  };
  //** end get api call getDetails */

  const handleApiDelete = async () => {
    try {
      await axiosInstance.delete(
        `${constant.baseURL}qr-code/${selectedEstablishment?.id}`,
      );
      setDeleteModalVisible(false);
      setSelectedEstablishment(null);
      getDetails(); // Refresh list
    } catch (error) {
      Log('Delete Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <Header
        lable="Establishment List"
        showBackIcon
        containerStyle={styles.headerStyle}
      />
      {dataList?.map((establishment: any) => (
        <View style={styles.card}>
          <View style={styles.imageCard}>
            <Image source={{uri: establishment.logo}} style={styles.banner} />
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.title}>{establishment.name}</Text>
            <Text style={styles.generatedBy}>
              Rating: {establishment.business_rating}⭐
            </Text>
            <Text style={styles.emaiStyle}>{establishment.email}</Text>
            <Text style={styles.location}>
              Location: {establishment.location}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedEstablishment(establishment);
                  setModalVisible(true);
                }}
                style={styles.iconButton}>
                <Icon name="eye-outline" size={24} color="#007BFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedEstablishment(establishment);
                  setDeleteModalVisible(true);
                }}
                style={styles.iconButton}>
                <Icon name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      {/* View Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={styles.title}>Establishment Details</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
            {selectedEstablishment && (
              <>
                <View style={{alignSelf: 'flex-start'}}>
                  <Text style={styles.info}>
                    Name: {selectedEstablishment.name}
                  </Text>
                  <Text style={styles.info}>
                    Rating: {selectedEstablishment.business_rating}
                  </Text>
                  <Text style={styles.info}>
                    Email: {selectedEstablishment.email}
                  </Text>
                </View>
                <Image
                  source={{uri: selectedEstablishment.logo}}
                  style={styles.modalBanner}
                />
                <View style={{alignSelf: 'flex-start'}}>
                  <Text style={styles.info}>
                    Location:{' '}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(selectedEstablishment.url)
                      }>
                      View on Google Maps
                    </Text>
                  </Text>
                  <Text style={styles.info}>
                    Date:{' '}
                    {new Date(selectedEstablishment.created_at).toDateString()}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Delete Modal */}
      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDeleteModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalContent, {width: '80%', alignItems: 'center'}]}>
            <Text style={styles.titleDelete}>Confirm Deletion</Text>
            <Text style={[styles.generatedBy, , {textAlign: 'center'}]}>
              Are you sure you want to delete this{'\n'} establishment?
            </Text>
            <View style={styles.modalActions}>
              <Button
                title="Cancel"
                onPress={() => setDeleteModalVisible(false)}
              />
              <Button title="Delete" onPress={handleApiDelete} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerStyle: {
    paddingLeft: 18,
    backgroundColor: color.secondaryBG,
    marginBottom: 0,
    paddingTop: 4,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: color.white,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 20,
  },
  imageCard: {
    backgroundColor: color.white,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSection: {flex: 1, justifyContent: 'center', marginLeft: 15},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    color: color.primaryText,
  },
  emaiStyle: {fontSize: 14, lineHeight: 18, color: '#555'},
  generatedBy: {
    fontSize: 14,
    lineHeight: 18,
    color: '#555',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    lineHeight: 18,
    color: '#777',
    marginTop: 4,
  },
  actionButtons: {flexDirection: 'row', marginTop: 10, gap: 12},
  iconButton: {padding: 4},
  banner: {width: 100, height: 100, borderRadius: 8},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start',
    width: '90%',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 15,
    alignSelf: 'center',
  },
  modalBanner: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  link: {color: '#007BFF', textDecorationLine: 'underline'},
  titleDelete: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    color: color.secondaryTexts,
    textAlign: 'center',
  },
  info: {
    fontSize: 15,
    marginVertical: 2,
    color: '#333',
  },
});

export default EstablishmentList;
