import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';

export default function AvatarInterface(props) {

    const url = props.url;
    const posts = props.posts;
    const followers = props.followers;
    const following = props.following;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', paddingRight: 32, paddingTop: 16, alignItems: 'top', marginRight: 16 }}>
                <Avatar
                    size={32}
                    rounded
                    source={{ uri: url }}
                    containerStyle={{ backgroundColor: "blue" }}
                />
                <View style={{ flex: 1, marginLeft: 16, alignItems: 'center' }}>
                    <Text style={{ marginTop: 16, fontWeight: 'bold' }}>{posts}</Text>
                    <Text>Post</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 16, alignItems: 'center' }}>
                    <Text style={{ marginTop: 16, fontWeight: 'bold' }}>{followers}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 16, alignItems: 'center' }}>
                    <Text style={{ marginTop: 16, fontWeight: 'bold' }}>{following}</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <Text>TheAraujo__</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 12,
    },
})