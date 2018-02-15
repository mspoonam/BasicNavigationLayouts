import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Me extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >{'This is Me '}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
