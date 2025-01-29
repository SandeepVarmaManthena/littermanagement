import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../Header';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import RepeatVCard from './RepeatVCard';

type RouteParams = {
    city: string;
  };

  const cities = ['Hyderguda', 'Masab Tank', 'Gachibowli', 'Attapur', 'Kondapur', 'KPHB', 'Madhapur'];

const RList = () => {

     const [filterText, setFilterText] = useState('');
                    
        const filteredCities = cities.filter(city => city.toLowerCase().includes(filterText.toLowerCase()));
                
        const route = useRoute();
        const {city}  = route.params as RouteParams;


  return (
    
    <View style={styles.container}>
        <Header title={city}/>
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
        <ScrollView>
            <RepeatVCard/>
            <RepeatVCard/>
            <RepeatVCard/>
            <RepeatVCard/>
            <RepeatVCard/>
        </ScrollView>
    </View>

  )
}


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
})

export default RList