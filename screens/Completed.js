import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const data = [
  {id: '1', name: 'Doctor XYZ', time: '08:10PM', status: 'Completed'},
  {id: '2', name: 'Doctor ABC', time: '09:10PM', status: 'Completed'},
  {id: '3', name: 'Doctor PQR', time: '10:10PM', status: 'Completed'},
  {id: '4', name: 'Doctor LMN', time: '11:10PM', status: 'Completed'},
  {id: '5', name: 'Doctor XYZ', time: '08:10PM', status: 'Completed'},
  {id: '6', name: 'Doctor ABC', time: '09:10PM', status: 'Completed'}
];

const Completed = () => {
  const navigationBack = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        icon={require('../assets/images/back.png')}
        title={'Completed Appointments'}
        onPress={() => navigationBack.goBack()}
      />
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../assets/images/doctor.png')}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timing}>{item.time}</Text>
                </View>
                <Text style={styles.status}>{item.status}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    padding: 5,
    color: 'green',
  },
});
