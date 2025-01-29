import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/native';
type RouteParams = {
    date : string
}

const RecordFootage = () => {

    const route = useRoute();
        const { date }  = route.params as RouteParams;

  return (
    <View style={styles.container}>
        <Header title={date}/>
        <View >
            <View style={styles.cardWrap}>
                <Text style={styles.cardTitle}>Cam 1 Recordings</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnTxt}>Watch</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardWrap}>
                <Text style={styles.cardTitle}>Cam 2 Recordings</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnTxt}>Watch</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardWrap}>
                <Text style={styles.cardTitle}>Cam 3 Recordings</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnTxt}>Watch</Text>
                </TouchableOpacity>
            </View>
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
    cardWrap:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        width: '90%',
        boxShadow: '0px 0px 5px 0px #00000040',
        paddingBlock : 10,
        paddingInline : 10,
        margin :'auto',
        borderRadius : 8,
        marginBlock :10,
    },
    btnTxt:{
        fontWeight : 'bold',
        color: '#fff'
    },
    button:{
        backgroundColor: '#227CF5',
        paddingBlock : 5,
        paddingInline: 10,
        borderRadius : 5
    },
    cardTitle:{
        fontWeight  : 'bold'
    },
})

export default RecordFootage
