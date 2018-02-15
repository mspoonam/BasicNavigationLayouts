import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View> 
          <Text>
            {'First Text'}
          </Text>
        </View>
        <View> 
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
   address :{
     flex: 1 , backgroundColor: '#ff0000', 
   } ,
    likes :{
      flex :1,
      backgroundColor : 'blue'
    },
});
