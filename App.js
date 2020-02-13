/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//flexdirection default react-native: 'column'
const App: () => React$Node = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingTop:8,
          alignItems: 'flex-start'        
        }}>
        <View style={{backgroundColor: '#03a9f4', flex: 1, height: 80, marginHorizontal: 4,marginLeft: 8, flexDirection: 'row', padding: 10 }}>
          <View style={{backgroundColor:'#fb4c4c', flex: 1, marginHorizontal: 4}}></View>
          <View style={{backgroundColor:'#fb4c4c', flex: 1, marginHorizontal: 4}}></View>
          <View style={{backgroundColor:'#fb4c4c', flex: 1, marginHorizontal: 4}}></View>
        
        </View>
        <View style={{backgroundColor: '#ffc107', flex: 1, height: 70, marginHorizontal: 4, justifyContent: 'center', alignItems: 'center' }} >
          <Text>Center</Text>
        </View>
        <View style={{backgroundColor: '#4caf50', flex: 1, height: 60, marginHorizontal: 4, borderRadius: 4 }} />
        <View style={{backgroundColor: '#d57016', flex: 1, height: 50, marginHorizontal: 4, marginRight: 8 }} />
      </View>
    </>
  );
};

export default App;
