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
  } from "react-native";
import Header from '../components/Header';
import Penaltycard from '../components/Penaltycard';
import { router } from 'expo-router';
import Addpenalty from '../components/Addpenalty';

const Penalty = () => {
  const handleRoutes = () => {
    router.push('../components/Addpenalty')
  }
  return (
    <View style={styles.container}>
        <Header title='Penalty Management'/>
        <View style={{alignItems : 'flex-end',paddingBlock: 10, paddingRight : 10}}>
            <TouchableOpacity style={styles.penaltyButton}>
                <Text style={styles.penaltyText} onPress={() => handleRoutes()}>Add Penalty</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.cards}>
            <Penaltycard
                id= {1}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='To be Paid'
            />
            <Penaltycard
                id= {2}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='Paid'
            />
            <Penaltycard
                id= {3}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='Paid'
            />
            <Penaltycard
                id= {4}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='To be Paid'
            />
            <Penaltycard
                id= {5}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='Paid'
            />
            <Penaltycard
                id= {6}
                title='Littering in Public Spaces'
                amount='₹500/-'
                date='25-01-2025'
                payment='Paid'
            />
        </ScrollView>
    </View>
  )
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: width < 400 ? 20 : 10,
      height: '100%',
      paddingBottom : 20,
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
    cards:{
        display: 'flex',
        flexDirection : 'column',
        paddingBottom : 10
    },
    penaltyButton:{
        paddingBlock : 10,
        backgroundColor : '#227CF5',
        width: '40%',
        borderRadius :6,
        alignItems : 'center'
    },
    penaltyText:{
        color: '#fff',
        fontWeight : 'bold'
    }
  });

export default Penalty
