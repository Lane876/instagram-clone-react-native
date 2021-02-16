import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { listStorys } from '../graphql/queries'
import UserStoryPreview from './UserStoryPreview'

export default function UserStoriesPreview() {

    const [stories, setStories] =  useState([])

    useEffect(() => {
        fetchStories()
    }, [])

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys))
            setStories(storiesData.data.listStorys.items);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <FlatList 
            data={stories}
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

