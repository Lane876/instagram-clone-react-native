import React from 'react'
import { View, Text } from 'react-native'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post({post}) {
    return (
        <View>
            <PostHeader imageUri={post.user.imageUri} name={post.user.name}/>
            <PostBody imageUri={post.imageUri}/>
            <PostFooter likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}/>
        </View>
    )
}
