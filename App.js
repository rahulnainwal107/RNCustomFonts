/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainwView}>
          <Text style={styles.nameStyle}>Rahul Nainwal</Text>
          <Text>React Native Developer</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainwView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 26,
    fontWeight: '400',
    fontFamily: 'Balthazar-Regular',
  },
  jobTitleStyle: {
    fontSize: 16,
    fontWeight: '200',
    fontFamily: 'Questrial-Regular',
  },
});

export default App;
