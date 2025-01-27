import React from 'react'
import { Text, View,StyleSheet, Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = (props: { title: string}) => {

  return (
    <View style={styles.container}>
        <AntDesign name="back" size={28} color="#000" />
        <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

export default Header

const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display : 'flex',
        flexDirection : 'row',
        gap : 15,
        alignItems : 'center',
        paddingBlock : 10,
        paddingInline : 15,
        borderBottomWidth : 3,
        borderColor : '#227CF5'
    },
    text: {
        fontSize: 20,
        fontWeight : 'bold',
        color: '#000',
    },

  });