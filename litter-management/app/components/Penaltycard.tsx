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

const Penaltycard = (props: { id: number ; title: string | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; payment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return (
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.id}>Violation {props.id}</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.title}>Violation : <Text style={{fontWeight :'normal', fontSize : width < 400 ? 13 : 14}}>{props.title}</Text></Text>
                    <Text style={styles.amount}>Penalty Amount : <Text style={{fontWeight :'normal', fontSize : width < 400 ? 13 : 14}}>{props.amount}</Text></Text>
                    <Text style={styles.date}>Date : <Text style={{fontWeight :'normal', fontSize : width < 400 ? 13 : 14}}>{props.date}</Text></Text>
                </View>
            </View>
        </View>
        <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: props.payment === 'Paid' ? 'green' : 'red' }]}>
                <Text style={styles.buttonText}>{props.payment}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection : 'row',
        boxShadow: '0px 0px 5px 0px #00000040',
        width: '90%',
        paddingBlock : 10,
        paddingInline : 10,
        borderRadius: 10,
        margin :'auto',
        marginBlock : 10,
        justifyContent : 'space-between',
        alignItems : 'flex-end'
    },
    id:{
        fontSize : 16,
        fontWeight : 'bold'
    },
    title:{
        fontSize : width < 400 ? 12 : 14,
        fontWeight : 'bold'
    },
    amount:{
        fontWeight : 'bold',
        fontSize : width < 400 ? 12 : 14,
    },
    date:{
        fontWeight : 'bold',
        fontSize : width < 400 ? 12 : 14,
    },
    button:{
        boxShadow: '0px 0px 5px 0px #00000040',
        padding: width < 400 ? 8 : 10,
        borderRadius : width < 400 ? 5 : 8,
        backgroundColor: 'transparent',
    },
    buttonText : {
        fontWeight : 'bold',
        fontSize : width < 400 ? 12 : 14,
        color : '#fff'
    }

})

export default Penaltycard
