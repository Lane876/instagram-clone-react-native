import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

export default function PostBody({imageUri}) {
    return (
        <Image source={{uri: imageUri}} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    }
})
