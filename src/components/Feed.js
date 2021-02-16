import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'
import Post from './Post'
import UserStoriesPreview from './UserStoriesPreview'

export default function Feed() {
    const [posts, setPosts] =  useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const postsData = await API.graphql(graphqlOperation(listPosts))
            setPosts(postsData.data.listPosts.items);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <FlatList 
        data={posts}
        renderItem={({item})=> <Post post={item}/>}
        ListHeaderComponent={UserStoriesPreview}
        keyExtractor={(item, index) => index.toString()}
        />
    )
}
