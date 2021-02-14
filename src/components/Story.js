import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePicture from './ProfilePicture'

export default function Story({imageUri, name}) {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    name: {
        textAlign: 'center'
    }
})