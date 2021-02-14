import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Story from './Story'

const data = [
    {
        imageUri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Lukas'
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Maria'
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        name: 'Carlos'
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
        name: 'George'
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Selene'
    },
]

export default function Stories() {
    return (
        <FlatList 
            data={data}
            keyExtractor={({imageUri})=>imageUri} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    }
})

