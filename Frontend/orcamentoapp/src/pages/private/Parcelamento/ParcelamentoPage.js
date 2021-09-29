import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const ParcelamentoPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Parcelamento</Text>
        <Text checkbox style={styles.text2}>
          Pagamento à vista
        </Text>
        <Text style={styles.text2}>2 x</Text>
        <Text style={styles.text2}>3 x</Text>
        <Text style={styles.text2}>4 x</Text>
        <Text style={styles.text2}>5 x</Text>
        <Text style={styles.text2}>6 x</Text>
        <Text style={styles.text2}>7 x</Text>
        <Text style={styles.text2}>8 x</Text>
        <Text style={styles.text2}>9 x</Text>
        <Text style={styles.text2}>10 x</Text>
        <Text style={styles.text2}>11 x</Text>
        <Text style={styles.text2}>12 x</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text1: {
    color: '#dee1dc',
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  text2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 15,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 350,
  },
});

export default ParcelamentoPage;
