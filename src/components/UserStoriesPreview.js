import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import UserStoryPreview from './UserStoryPreview'
import data from '../../src/data/stories'

export default function UserStoriesPreview() {
    return (
        <FlatList 
            data={data}
            keyExtractor={(name, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <UserStoryPreview story={item}/>}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    }
})

