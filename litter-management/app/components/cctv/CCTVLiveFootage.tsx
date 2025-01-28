import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Header';
import CCTVCard from './CCTVCard';
import { useRoute } from '@react-navigation/native';
import North from '../../../assets/images/Hyderguda-north.png'
import Market from '../../../assets/images/market.png'
import Park from '../../../assets/images/park.png'
import Street from '../../../assets/images/street.png'

type RouteParams = {
  city: string;
};

const cities = ['Hyderabad', 'Warangal', 'Medak', 'Khammam', 'Nizamabad', 'Karimnagar', 'Mahabubnagar'];

const citiess = [
  { id: 1, area: 'Hyderguda North', img : North},
  { id: 2, area: 'Main Street', img : Street },
  { id: 3, area: 'Park', img : Park },
  { id: 4, area: 'Market', img : Market },
  { id: 5, area: 'Nizamabad',img : North },
  { id: 6, area: 'Karimnagar', img : North },
  { id: 7, area: 'Mahabubnagar', img : North }
];

const CCTVLiveFootage: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const filteredCities = citiess.filter(city => city.id.toString().includes(filterText.toLowerCase()));

  const route = useRoute();
  const { city } = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Header title={city} />
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by CamID"
            value={filterText}
            onChangeText={setFilterText}
          />
        </View>
      </View>
      <FlatList
        data={filteredCities}
        renderItem={({ item }) => <CCTVCard title={item.area} image={item.img}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity style={styles.homeButton}>
        {/* Icon can be added here */}
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: width < 400 ? 30 : 10,
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    gap: 10,
  },
  searchInput: {
    width: '80%',
    paddingVertical: 10,
  },
  flatListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
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

export default CCTVLiveFootage;
