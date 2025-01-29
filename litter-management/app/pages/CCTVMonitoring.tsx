import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { router } from 'expo-router';
import CCTVArea from '../components/cctv/CCTVArea';

const cities = ['Hyderabad', 'Warangal', 'Medak', 'Khammam', 'Nizamabad', 'Karimnagar', 'Mahabubnagar'];

const CCTVMonitoring = () => {
  const [filterText, setFilterText] = useState('');

  const filteredCities = cities.filter(city => city.toLowerCase().includes(filterText.toLowerCase()));
  const handleRoute = (city: string) => {
    router.push({
      pathname: '../components/cctv/CCTVArea',
      params: { city },
    });
  }

  return (
    <View style={styles.container}>
      <Header title='CCTV Monitoring'/>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by city"
            value={filterText}
            onChangeText={setFilterText}
          />
        </View>
      </View>
      <ScrollView style={{paddingBlock : 10,marginBlock : 10}}>
        {filteredCities.map((city, index) => (
          <TouchableOpacity key={index} style={styles.cityButton} onPress={() => handleRoute(city)}>
            <Text style={styles.cityText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.homeButton}>
        {/* <Ionicons name="ios-home" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: width < 400 ? 30 : 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  searchContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingInline: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingInline: 15,
    gap: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    width: '80%',
    paddingBlock: width < 400 ? 10 : 10,
  },
  cityButton: {
    backgroundColor: '#fff',
    paddingBlock: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    boxShadow: '0px 0px 5px 0px #00000040',
    width: '80%',
    margin: 'auto',
  },
  cityText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -25 }],
    padding: 15,
    borderRadius: 50,
  },
});

export default CCTVMonitoring;
