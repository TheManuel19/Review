import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AvatarInterface from './src/elements/AvatarElement';
import LoginElement from './src/elements/LoginElement';
import Navigation from './src/elements/Navigation';


export default function App() {

  const avatar = {
    url: 'https://cdn-icons-png.flaticon.com/512/2186/2186819.png',
    posts: 1,
    followers: 2,
    following: 3
  }

  return (
   <Navigation/>

  );
}

const styles = StyleSheet.create({

});
