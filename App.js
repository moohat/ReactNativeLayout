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
      <View style={styles.parent}>
        <View
          style={{
            backgroundColor: '#03a9f4',
            width: '100%',
            height: 80,
            flexDirection: 'row',
            padding: 10,
            marginBottom: 10,
            position: 'relative',
          }}>
          <View
            style={{
              backgroundColor: '#fb4c4c',
              width: 20,
              height: 20,
              borderRadius: 100,
              position: 'absolute',
              right: -10,
              top: -10,
            }}
          />
        </View>
        <View
          style={[
            {
              backgroundColor: '#ffc107',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 0,
            },
            styles.box,
          ]}>
          <Text>Center</Text>
        </View>
        <View
          style={[
            {
              backgroundColor: '#4caf50',
            },
            styles.box,
          ]}
        />
        <View
          style={[
            {
              backgroundColor: '#d57016',
              marginRight: 0,
            },
            styles.box,
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 8,
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: 14,
  },
  box: {
    flex: 1,
    height: 80,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default App;
