import { StyleSheet, Text, View } from 'react-native';
import Profile from './.expo/src/pages/profile'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    backgroundColor: '#FAF7F0',
  },
});
