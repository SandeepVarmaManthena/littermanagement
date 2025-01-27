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


const { width, height } = Dimensions.get("window");

const data = [
  { id: "1", title: "CCTV Monitoring", icon: <FontAwesome name="video-camera" size={24} color="#227CF5" />, screen: "CCTVMonitoring" },
  { id: "2", title: "Recorded Footage", icon: <AntDesign name="play" size={24} color="#227CF5" />, screen: "RecordedFootage" },
  { id: "3", title: "Offended Vehicles", icon: <AntDesign name="car" size={24} color="#227CF5" />, screen: "OffendedVehicles" },
  { id: "4", title: "Violators List", icon: <Ionicons name="people" size={24} color="#227CF5" />, screen: "ViolatorsList" },
  { id: "5", title: "Repeat Violators", icon: <FontAwesome6 name="user-tie" size={24} color="#227CF5" />, screen: "RepeatViolators" },
  { id: "6", title: "Penalty Management", icon: <MaterialCommunityIcons name="card-account-details-star" size={24} color="#227CF5" />, screen: "PenaltyManagement" },
];

const Dashboard: React.FC = () => {

  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <TouchableOpacity
      style={styles.card}
    >
      <View style={styles.iconContainer}>
        {item.icon}
      </View>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.flatListContent}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: width < 400 ? 30 : 60,
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
});

export default Dashboard;