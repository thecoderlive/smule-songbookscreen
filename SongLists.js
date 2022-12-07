import React from 'react'
import { Image, TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native'



const songListsItem = ({ item }) => (
<View style={styles.song_lists_item}>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.movie_name}>{item.movie_name}</Text>
<Text style={styles.user_name}>{item.user_name}</Text>
<TouchableOpacity>
    <View style={styles.sing}>{'Sing'}</View>
</TouchableOpacity>
</View>
  );

const SongLists = ({ item }) => (
<FlatList
    style={styles.song_lists}
    data={item}
    renderItem={songListsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SongLists;

const styles = StyleSheet.create({
    'song_cover': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 10,
        'borderRadius': 8,
        'marginLeft': 10
    },
    'song_name': {
        'color': '#080707',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'movie_name': {
        'color': '#747272',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'user_name': {
        'color': '#7d7878',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'sing': {
        'flex': 1,
        'padding': 10,
        'margin': 5,
        'textAlign': 'center',
        'backgroundColor': '#4084f2',
        'color': 'white'
    }
});