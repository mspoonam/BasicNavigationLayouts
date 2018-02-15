import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.forAllChild , styles.forFeed]}> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View style={styles.forMe}> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View style={styles.forMyShaadi}> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View style={styles.forChat}> 
          <Text>
            {'First Text'}
          </Text>
        </View>

        {/* <Text >{'Feed Me'}</Text> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
   forAllChild : {
    justifyContent: 'center',
    alignItems: 'center',
   },
   forFeed :{
     flex: 1 , 
     backgroundColor: '#ff0000', 
   } ,
    forMe :{
      flex :1,
      backgroundColor : 'blue'
    },
    forMyShaadi :{
      flex :1,
      backgroundColor : 'green'
    },
    forChat :{
      flex :1,
      backgroundColor : 'green'
    },
});
