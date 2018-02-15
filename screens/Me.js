import React,{Component} from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components"

const ProfileContainer = styled.View`
  background-color: brown;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default class Me extends React.Component {
  render() {
    return (
      <ProfileContainer>
        <Text >{'This is Me '}</Text>
      </ProfileContainer>
    );
  }
}

