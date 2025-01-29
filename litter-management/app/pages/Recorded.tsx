import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { Calendar } from 'react-native-calendars';
import { router } from 'expo-router';

const Recorded = () => {

    const handleRoute = (date : string) => {
        router.push({
            pathname : '../components/RecordFootage',
            params : { date }
        })
    }
  return (
   <View style={styles.container}>
    <Header title='Recorded Footage'/>
    <View style={{width:'90%',margin:'auto'}}>
    <Calendar
      style={{
        height: 450
      }}
      // Callback that gets called when the user selects a day
      onDayPress={(day: any) => {
        handleRoute(day.dateString)
      }}
    />
    </View>
   </View>
  )
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: width < 400 ? 20 :10,
      height: '100%',
      paddingBottom : 20,
    },
})

export default Recorded
