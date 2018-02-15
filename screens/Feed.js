import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'

const Container = styled.View`
  background-color: yellow;
  flex: 1;
  align-items: stretch;
  justify-content: center;
`
const Content = styled.Text`
  color: yellowgreen;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Addresstxt = Content.extend`
  background-color: gray;
  color: royalblue;
`
const Liketxt = Content.extend`
  background-color: paleturquoise;
  color: chocolate;
`

const FeedContainer = Container.extend`
  background-color: paleturquoise;
`

const Address =() => (
      <FeedContainer> 
          <Addresstxt>
            {'address'}
          </Addresstxt>
      </FeedContainer>
)

const Likes =() => (
  <FeedContainer> 
      <Liketxt>
        {'Likes'}
      </Liketxt>
  </FeedContainer>
)
  
export default class Feed extends React.Component {
  render() {
    return (
      <FeedContainer>
        <Address/>
        <Likes/>
      </FeedContainer>
    );
  }
}

