import React from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const ViolatorCard = () => {
  return (
    <View>
        <View style={{display: 'flex',flexDirection : 'row',alignItems : 'center',gap:20,boxShadow: '0px 0px 5px 0px #00000040',width : '80%',margin : 'auto',paddingBlock : 10,paddingInline : 16,borderRadius:10,marginBlock:10}}>
                <FontAwesome name="user" size={30} color="#227CF5" />
                <View style={{display:'flex',flexDirection:'column',gap:5}}>
                    <Text style={{fontSize:18,fontWeight :'bold'}}>Violator 1</Text>
                    <Text style={{fontSize:14,fontWeight :'bold'}}>Penalties: 2</Text>
                    <View>
                        <Text style={{fontSize:14,fontWeight :'bold'}}>Violation 1: <Text style={{fontSize:14,fontWeight :'normal'}}>Littering in Public Spaces</Text></Text>
                        <Text style={{fontSize:14,fontWeight :'bold'}}>Violation 2: <Text style={{fontSize:14,fontWeight :'normal'}}>Illegal Dumping of Waste</Text></Text>
                    </View>
                </View>
            </View>
    </View>
  )
}

export default ViolatorCard