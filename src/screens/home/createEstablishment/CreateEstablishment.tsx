import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CreateEstablishment = () => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [footer, setFooter] = useState('');
  const [offer, setOffer] = useState('');
  const [language, setLanguage] = useState('English');
  const [size, setSize] = useState('Medium');
  const [rating, setRating] = useState(4);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    const data = {businessName, location, footer, offer, language, rating};
    setQrValue(JSON.stringify(data));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Establishment Management</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Business Name"
        onChangeText={setBusinessName}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Footer"
        onChangeText={setFooter}
      />
      <TextInput
        style={styles.input}
        placeholder="Offer (Optional)"
        onChangeText={setOffer}
      />

      <View style={styles.imageSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBanner('https://via.placeholder.com/300x100')}>
          <Text>Upload Banner</Text>
        </TouchableOpacity>
        {banner && <Image source={{uri: banner}} style={styles.imagePreview} />}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setLogo('https://via.placeholder.com/100')}>
          <Text>Upload Logo</Text>
        </TouchableOpacity>
        {logo && <Image source={{uri: logo}} style={styles.imagePreview} />}
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={generateQRCode}>
        <Text style={styles.buttonText}>Generate QR</Text>
      </TouchableOpacity>

      {qrValue ? (
        <View style={styles.qrContainer}>
          <Text>Your QR Code Preview:</Text>
          <QRCode
            value={qrValue}
            size={200}
            backgroundColor="#FFFFFF"
            color="#000000"
          />
        </View>
      ) : null}
    </ScrollView>
  );
};
export default CreateEstablishment;
const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#F5F5F5'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 15},
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#FFF', fontWeight: 'bold'},
  imagePreview: {width: 100, height: 100, borderRadius: 5, marginTop: 10},
  qrContainer: {alignItems: 'center', marginTop: 20},
});
