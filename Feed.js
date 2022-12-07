import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import TrendingRecordings from './TrendingRecordings'
import SongLists from './SongLists'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<TrendingRecordings item={item.trending_recordings}/>
<SongLists item={item.song_lists}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});