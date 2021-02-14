import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from './Post'
import Stories from './Stories'

const data = [
     {
        user: {
            imageUri: 'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80',
            name: 'Milan'
        },
        imageUri: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80',
        caption: 'Red blause day #instagram',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
     {
        user: {
            imageUri: 'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80',
            name: 'Milan'
        },
        imageUri: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80',
        caption: 'Red blause day #instagram',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
     {
        user: {
            imageUri: 'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80',
            name: 'Milan'
        },
        imageUri: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80',
        caption: 'Red blause day #instagram',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
]

export default function Feed() {
    return (
        <FlatList 
        data={data}
        renderItem={({item})=> <Post post={item}/>}
        ListHeaderComponent={Stories}
        keyExtractor={(item, index) => index.toString()}
        />
    )
}
