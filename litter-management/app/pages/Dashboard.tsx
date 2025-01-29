import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, Router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const data = [
  { id: "1", title: "CCTV Monitoring", icon: <FontAwesome name="video-camera" size={24} color="#227CF5" />, screen: 'CCTVMonitoring' },
  { id: "2", title: "Recorded Footage", icon: <AntDesign name="play" size={24} color="#227CF5" />, screen: "RecordedFootage" },
  { id: "3", title: "Offended Vehicles", icon: <AntDesign name="car" size={24} color="#227CF5" />, screen: "OffendedVehicles" },
  { id: "4", title: "Violators List", icon: <Ionicons name="people" size={24} color="#227CF5" />, screen: "ViolatorsList" },
  { id: "5", title: "Repeat Violators", icon: <FontAwesome6 name="user-tie" size={24} color="#227CF5" />, screen: "RepeatViolators" },
  { id: "6", title: "Penalty Management", icon: <MaterialCommunityIcons name="card-account-details-star" size={24} color="#227CF5" />, screen: "PenaltyManagement" },
];


const Dashboard: React.FC = () => {
  const handleRoutes = (screen: string) => {
    switch (screen){
      case 'CCTVMonitoring':
        router.push('../pages/CCTVMonitoring');
        break;
      case 'PenaltyManagement':
        router.push('../pages/Penalty')
        break;
      case 'ViolatorsList':
        router.push('../pages/ViolatorsList')
        break;
      case 'RepeatViolators':
        router.push('../pages/RepeatViolators')
        break;
      case 'OffendedVehicles':
        router.push('../pages/OffendedVehicles')
        break;
      case 'RecordedFootage':
        router.push('../pages/Recorded')
        break;
      default :
        Toast.show({
          type : 'info',
          text1 : 'This Page is in Construction'
        })
    }
  }

  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleRoutes(item.screen)}
    >
      <View style={styles.iconContainer}>
        {item.icon}
      </View>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.text}>Dashboard</Text>
        <MaterialIcons name="logout" size={24} color="black" />
    </View>
      <View style={{marginBlock : width < 400 ? 40 : 50}}>
        <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
              contentContainerStyle={styles.flatListContent}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: width < 400 ? 20 : 0,
    height: '100%'
  },
  title: {
    fontSize: width < 400 ? 30 : 36,
    fontWeight: "bold",
    textAlign: "center",
    margin: 60,
    color: "#000",
  },
  flatListContent: {
    justifyContent: "center",
    paddingTop : width < 400 ? 20 : 30,
    gap: width < 400 ? 30 : 40,
  },
  row: {
    justifyContent: "space-evenly", 
    marginBottom: 10,
  },
  card: {
    width: width < 400 ? '40%' : '40%',
    paddingBlock: width < 400 ? 30 : 40,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: '0px 0px 5px 0px #00000040',
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#227CF5",
  },
  HeaderContainer:{
    backgroundColor: '#fff',
    display : 'flex',
    flexDirection : 'row',
    gap : 15,
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingBlock : 10,
    paddingTop: 16,
    paddingInline : 30,
    borderBottomWidth : 3,
    borderColor : '#227CF5'
},
text: {
    fontSize: 20,
    fontWeight : 'bold',
    color: '#000',
},
});

export default Dashboard;