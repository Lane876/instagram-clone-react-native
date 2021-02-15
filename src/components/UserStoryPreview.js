import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import ProfilePicture from './ProfilePicture'

export default function UserStoryPreview({story}) {

    const {user:{id, imageUri, name}} = story

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate("Story", {userId: id})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    name: {
        textAlign: 'center'
    }
})