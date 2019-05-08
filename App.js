import React from 'react';
import { StyleSheet, View, ToolbarAndroid, StatusBar, Platform } from 'react-native';
import Todo from './src/app/Todo';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar/>
        </View>
        <ToolbarAndroid
          style={styles.toolbar}
          title="Todo Toolbar 2"
        />
        <Todo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  toolbar: {
    height: 56,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'green',
    width: '100%'
  }
});
