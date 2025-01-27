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
import Header from './Header';

const Addpenalty = () => {
  return (
    <View style={styles.container}>
        <Header title='Add Penalty'/>
        <ScrollView>
            
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
})

export default Addpenalty
