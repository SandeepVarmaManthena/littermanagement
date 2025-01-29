import React from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const RepeatVCard = () => {
  return (
    
    <View>
        <View style={{display: 'flex',flexDirection : 'row',alignItems : 'center',gap:20,boxShadow: '0px 0px 5px 0px #00000040',width : '80%',margin : 'auto',paddingBlock : 10,paddingInline : 16,borderRadius:10,marginBlock:10}}>
                <FontAwesome name="user" size={30} color="#227CF5" />
                <View style={{display:'flex',flexDirection:'column',gap:5}}>
                    <Text style={{fontSize:18,fontWeight :'bold'}}>Violator 1</Text>
                    <Text style={{fontSize:14,fontWeight :'bold'}}>TS18EG9924</Text>
                    <View>
                        <Text style={{fontSize:14,fontWeight :'bold'}}>Violations: <Text style={{fontSize:14,fontWeight :'normal'}}>30</Text></Text>
                        <Text style={{fontSize:14,fontWeight :'bold'}}>Penalties:<Text style={{fontSize:14,fontWeight :'normal'}}>25</Text></Text>
                    </View>
                </View>
            </View>
    </View>

  )
}

export default RepeatVCard