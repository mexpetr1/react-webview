import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.socializus.eu' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
