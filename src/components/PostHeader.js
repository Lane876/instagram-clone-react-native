import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePicture from './ProfilePicture'

export default function PostHeader({imageUri, name}) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>

            <ProfilePicture uri={imageUri} size={40}/>
            <Text style={styles.name}>{name}</Text>
            </View>
            <Icon name='dots-three-vertical' size={16} style={{marginRight:15}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
       justifyContent:'space-between',
       alignItems:'center'
    },
    left: {
        flexDirection: 'row'
    },
    name: {
        alignSelf:'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    }
})