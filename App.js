import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput
        placeholder='jhon@email.com'
        style={styles.textInput}
      />
      <TextInput
        placeholder='password'
        style={styles.textInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 20,
    color: 'gray',

  },

  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  }
});
