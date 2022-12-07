import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const trendingRecordingsItem = ({ item }) => (
<View style={styles.trending_recordings_item}>
<Image
    style={styles.recording_cover}
    source={{uri: item.recording_cover}}
    />
</View>
  );

const TrendingRecordings = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.trending_recordings}
    data={item}
    renderItem={trendingRecordingsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default TrendingRecordings;

const styles = StyleSheet.create({
    'recording_cover': {
        'width': '84vw',
        'height': '38vw',
        'marginTop': 5,
        'borderRadius': 10,
        'marginHorizontal': 6
    }
});