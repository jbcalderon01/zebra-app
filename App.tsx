/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MyTextInput} from './src/components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleClickScan = (event: any) => {};

  useEffect(() => {
    // RNEZebraEmdk.addListener('onScan', (data: any) => {
    //   console.log(`Scanned data: ${data}`);
    // });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.viewContainer}>
          <View>
            <Text style={styles.title}>Zebra Test APP</Text>
          </View>
          <View>
            <Text>Code Scanned:</Text>
            <Text>123</Text>
          </View>
          <View style={styles.buttonScan}>
            <MyTextInput />
            <Button onPress={handleClickScan} title="Scan" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  viewContainer: {
    flex: 1,
    height: '100%',
  },
  buttonScan: {
    flex: 2,
    marginTop: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default App;
