import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TextInput
  } from "react-native";
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';

const cities = ['Hyderabad', 'Warangal', 'Medak', 'Khammam', 'Nizamabad', 'Karimnagar', 'Mahabubnagar'];

const ViolatorsList = () => {
    const [filterText, setFilterText] = useState('');
    
      const filteredCities = cities.filter(city => city.toLowerCase().includes(filterText.toLowerCase()));
        const handleRoute = (city: string) => {
            router.push({
              pathname: '../components/VArea',
              params: { city },
            });
          }
  
      return (
    <View style={styles.container}>
        <Header title='Violators'/>
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
    </View>
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: width < 400 ? 30 : 10,
      height: '100%',
      paddingBottom : 20,
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
})

export default ViolatorsList

