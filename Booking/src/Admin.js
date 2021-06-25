import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

 export default function Admin({ navigation }){

    const onPressHandler = () =>{
      navigation.navigate('Users');
  
     }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Admin
        </Text>
        <Pressable 
         onPress={onPressHandler}
         style={({pressed}) =>({backgroundColor: pressed? '#ddd' : '#0F0'})}
         >
            
        </Pressable>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent :'center',
      alignItems : 'center'
  
    },
    text:{
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  
  }) 