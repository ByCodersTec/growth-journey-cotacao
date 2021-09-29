import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Foto from '../../../components/public/assets/foto-adulto-m.png';
import {useNavigation} from '@react-navigation/native';

const Vendedor = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonexit}>
          <Text style={styles.textButtom}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Image source={Foto} style={{width: 150, height: 150}} />
      <Text style={styles.textButtom}>Vendedor</Text>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('OrcamentoPage')}>
          <Text style={styles.textButtom}>+ Gerar novo orçamento</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text1}>Orçamentos Realizados</Text>
      </View>

      <View>
        <Text style={styles.text2}>001</Text>
        <Text style={styles.text2}>002</Text>
        <Text style={styles.text2}>003</Text>
        <Text style={styles.text2}>004</Text>
        <Text style={styles.text2}>005</Text>
        <Text style={styles.text2}>006</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#282c2b',
    padding: 1,
    marginTop: 10,
    borderRadius: 10,
    width: 350,
  },
  buttonexit: {
    alignItems: 'flex-end',
    backgroundColor: '#282c2b',
    marginLeft: 300,
    borderRadius: 10,
  },
  textButtom: {
    color: '#dee1dc',
    fontSize: 20,
    margin: 5,
  },
  text1: {
    color: '#dee1dc',
    fontSize: 18,
    marginTop: 25,
  },
  text2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 350,
  },
});

export default Vendedor;
