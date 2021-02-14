import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function ProfilePicture({uri, size = 70}) {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{
          uri: uri
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      margin: 7,
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#ff304f'
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff'
  },
});
