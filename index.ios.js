import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component1 from './app/component/Component1/Component1';

export default class projekt extends Component {
  render() {
    return (
      <View>
      <Component1/>
      </View>
    );
  }
}

AppRegistry.registerComponent('projekt', () => projekt);
