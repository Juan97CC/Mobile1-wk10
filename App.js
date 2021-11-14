
import React, {useState, useEffect} from 'react';
import {FlatList, StatusBar, SafeAreaView, Modal, ActivityIndicator,
   StyleSheet, Text, View } from 'react-native';

   const DATA = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
   ];

   const Row = ({item}) =>(
     <View style={styles.item}>
       <Text style={styles.title}>{item.title}</Text>
       <Text>{item.body}</Text>
     </View>
   );


export default function App() {
  const[isLoading, setIsLoading] = useState(true);
  const[data, setData] = useState(DATA);
 


  const renderItem = ({item}) => <Row item = {item}></Row>
  return (
    
    <SafeAreaView style={styles.container}>
      {isLoading ?
      <>
      
      <ActivityIndicator size='large' color='#00ccbb'></ActivityIndicator>
       <Text>Loading...</Text>
       </>:
      <FlatList data ={data} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    backgroundColor: '#00ccbb',
    padding: 20,
    marginHorizontal:8,
    marginVertical:8,

  },
  title:{
    fontSize:24
  }
});
