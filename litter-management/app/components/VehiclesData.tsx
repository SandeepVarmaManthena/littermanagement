import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

interface Vehicle {
    id: string;
    type: string;
    registration: string;
    penalties: number;
}

type RouteParams = {
    city: string;
  };

const vehicles: Vehicle[] = [
    { id: '1', type: 'car', registration: 'TS08FV6634', penalties: 2 },
    { id: '2', type: 'bike', registration: 'TS00EA3298', penalties: 4 },
    { id: '3', type: 'bus', registration: 'TS04ED6284', penalties: 1 },
    { id: '4', type: 'truck', registration: 'TS18EG9924', penalties: 6 },
    { id: '5', type: 'car', registration: 'TS08FV6634', penalties: 2 },
    { id: '6', type: 'bus', registration: 'TS00EA3298', penalties: 4 },
    { id: '7', type: 'van', registration: 'TS04ED6284', penalties: 1 },
    { id: '8', type: 'bike', registration: 'TG08BK2233', penalties: 3 },
    { id: '9', type: 'van', registration: 'AP09VN4455', penalties: 1 },
    { id: '10', type: 'bus', registration: 'AP10BS6677', penalties: 5 },
    { id: '11', type: 'car', registration: 'AP11CR8899', penalties: 4 },
    { id: '12', type: 'truck', registration: 'TG12TR1010', penalties: 6 },
    { id: '13', type: 'bike', registration: 'OR13BK1234', penalties: 2 },
    { id: '14', type: 'van', registration: 'TS14VN5678', penalties: 1 },
    { id: '15', type: 'bus', registration: 'JH15BS9101', penalties: 3 },
    { id: '16', type: 'truck', registration: 'AS16TR1122', penalties: 4 },
    { id: '17', type: 'car', registration: 'CH17CR3344', penalties: 6 },
    { id: '18', type: 'bike', registration: 'TS18BK5566', penalties: 2 },
    { id: '19', type: 'van', registration: 'TS19VN7788', penalties: 3 },
    { id: '20', type: 'bus', registration: 'TS20BS9900', penalties: 1 },
    { id: '21', type: 'car', registration: 'TS21CR2233', penalties: 4 },
    { id: '22', type: 'bike', registration: 'TS22BK4455', penalties: 5 },
];

interface VehicleItemProps {
    type: string;
    registration: string;
    penalties: number;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ type, registration, penalties }) => {
    const renderIcon = () => {
        switch (type) {
            case 'car':
                return <AntDesign name="car" size={24} color="blue" />;
            case 'bike':
                return <MaterialCommunityIcons name="bike" size={24} color="blue" />;
            case 'bus':
                return <Fontisto name="bus" size={24} color="blue" />;
            case 'truck':
                return <FontAwesome5 name="truck-pickup" size={24} color="blue" />;
            case 'van':
                return <FontAwesome6 name="van-shuttle" size={24} color="blue" />;
            default:
                return null;
        }
    };
  
    return (
        <View style={styles.vehicleItem}>
            {renderIcon()}
            <View>
            <Text style={styles.vehicleRegistration}>{registration}</Text>
            <Text style={styles.vehiclePenalties}>Penalties: {penalties}</Text>
            </View>
        </View>
    );
  };
  const cities = ['Hyderabad', 'Warangal', 'Medak', 'Khammam', 'Nizamabad', 'Karimnagar', 'Mahabubnagar'];

  
const VehiclesData = () => {

    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleIconPress = (type: string) => {
        setSelectedType(type);
    };

    const route = useRoute();
    const {city}  = route.params as RouteParams;
const [filterText, setFilterText] = useState('');

  const filteredCities = cities.filter(city => city.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <View style={styles.container}>
            <Header title={city}/>
            <View style={styles.iconContainer}>
                <Ionicons name="search" size={24} color="black" />
                <TextInput
                            style={styles.searchInput}
                            placeholder="Search by city"
                            value={filterText}
                            onChangeText={setFilterText}
                          />
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity 
                    style={[styles.iconWrapper, selectedType === 'car' && styles.selectedIcon]}
                    onPress={() => handleIconPress('car')}> 
                    <AntDesign name="car" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.iconWrapper, selectedType === 'bike' && styles.selectedIcon]}
                    onPress={() => handleIconPress('bike')}
                >
                    <MaterialCommunityIcons name="bike" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.iconWrapper, selectedType === 'bus' && styles.selectedIcon]}
                    onPress={() => handleIconPress('bus')}
                >
                    <Fontisto name="bus" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.iconWrapper, selectedType === 'truck' && styles.selectedIcon]}
                    onPress={() => handleIconPress('truck')}
                >
                    <FontAwesome5 name="truck-pickup" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.iconWrapper, selectedType === 'van' && styles.selectedIcon]}
                    onPress={() => handleIconPress('van')}
                >
                    <FontAwesome6 name="van-shuttle" size={24} color="blue" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={vehicles.filter(vehicle => selectedType === null || vehicle.type === selectedType)}
                renderItem={({ item }) => (
                    <VehicleItem
                        type={item.type}
                        registration={item.registration}
                        penalties={item.penalties}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>

  )
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        paddingBlock: width < 400 ? 20 : 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 35,
    },
    // searchBar: {
    //     borderColor: '#ccc',
    //     borderRadius: 8,
    //     paddingHorizontal: 8,
    //     marginTop: 10,
    // },
    iconContainer: {
        flexDirection: 'row',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingBlock: 3,
        width:'90%',
        margin : 'auto',
        justifyContent:'space-between',
        marginTop: 15,
      },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    searchIcon: {
        marginRight: 10,
      },
iconWrapper: {
padding: 10,
borderRadius: 10,
borderWidth: 1,
borderColor: 'transparent',
},
selectedIcon: {
borderColor: 'blue',
},
// vehicleItem: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginTop: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
// },

vehicleType: {
fontSize: 18,
fontWeight: 'bold',
},
vehicleItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBlock: 10,
    flexDirection: 'row', // Change to column for vertical layout
    alignItems: 'center',
    gap:15,
    boxShadow: '0px 0px 5px 0px #00000040',
    width: '90%',
    margin: 'auto'
},
vehicleRegistration: {
    fontSize: 16,
    marginTop: 4, // Add margin to space out the text from the icon
},
vehiclePenalties: {
    fontSize: 14,
    marginTop: 4,
    color: '#888',
},
searchInput: {
    width: '80%',
    paddingBlock: width < 400 ? 10 : 10,
  },

});


export default VehiclesData