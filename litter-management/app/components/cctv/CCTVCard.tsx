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
    ImageComponent,
  } from "react-native";
  

const CCTVCard = (props: { title: string | null | undefined; image: any; }) => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={props?.image} style={{width: width < 400 ? 155 : 170, borderRadius:10}}/>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={styles.liveBtn}>
                <Text style={styles.liveTxt}>Live</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      boxShadow: '0px 0px 5px 0px #00000040',
      borderRadius:10,
      width: '46%',
      marginBlock :10
    },
    bottom:{
        paddingBlock: 10,
        paddingInline: 5,
        display : 'flex',
        flexDirection: 'column',
        gap:10,
        width: '100%'
    },
    title:{
        fontSize : width < 400 ? 16 : 18,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    liveBtn:{
        paddingBlock:6,
        backgroundColor : '#227CF5',
        textAlign:'center',
        borderRadius:10,
        width: '90%',
        margin : 'auto'
    },
    liveTxt:{
        textAlign:'center',
        fontSize : width < 400 ? 14 : 16,
        fontWeight : 'bold',
        color:'#fff'
    }
})

export default CCTVCard
