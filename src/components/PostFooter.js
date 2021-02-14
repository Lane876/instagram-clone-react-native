import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SendIcon from 'react-native-vector-icons/Feather';
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';

export default function PostFooter({likesCount: likesCountProp, caption, postedAt}) {
    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
        setIsLiked(prevState => !prevState)
        console.log(isLiked);
        const amount = isLiked ? -1 : 1
        setLikesCount(likesCount + amount)
    }

    useEffect(()=>{
        setLikesCount(likesCountProp)
    },[])

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
            {isLiked ? <ADIcon name="heart" size={25} color={'#e73838'} onPress={onLikePressed}/> : <ADIcon name="hearto" size={25} color={'#545454'} onPress={onLikePressed}/>}
          
          <FontistoIcon name="comment" size={23} color={'#545454'} />
          <SendIcon name="send" size={25} color={'#545454'} />
        </View>
        <View>
          <BookmarkIcon name="bookmark-o" size={25} color={'#545454'} />
        </View>
      </View>
      <Text style={styles.likes}>{likesCount}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
  },
});
