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
import Foto from '../../../components/public/assets/foto-adulto-m.png';
import {useNavigation} from '@react-navigation/native';

const OrcamentoPage = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.orcamento}>21/09/2021</Text>
        <Text style={styles.textButtom}>006</Text>
      </View>

      <Image source={Foto} style={styles.imagem} />
      <Text style={styles.cargo}>Vendedor</Text>
      <Text style={styles.nome}>Jubileu da Silva</Text>

      <View>
        <Text style={styles.nome2}>Nome:</Text>
      </View>

      <View>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.valores}>
        <Text style={styles.textValores}>Valor Negociado</Text>
        <Text style={styles.textValores}>Desconto</Text>
        <Text style={styles.textValores}>Finder</Text>
      </View>

      <View style={styles.valores}>
        <Text style={styles.textValores}>Forma de pagamento</Text>
        <View>
          <TouchableOpacity
            style={styles.cartao}
            onPress={() => navigate('ParcelamentoPage')}>
            <Text>Parcelamento:</Text>
            <Text>Selecionar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textValores2}>Taxa de conveniência do cartão</Text>
        <Text style={styles.textValores2}>Taxa do Parcelamento</Text>
        <Text style={styles.textValores2}>Nº Parcelas</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.textValores3}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.textValores3}>Declinar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  orcamento: {
    color: '#dee1dc',
    fontSize: 13,
    marginLeft: 270,
  },
  textButtom: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 18,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    marginLeft: 280,
    textAlign: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    marginRight: 280,
    marginTop: -70,
  },
  cargo: {
    color: '#dee1dc',
    fontSize: 15,
    marginRight: 120,
    marginTop: -40,
    margin: -10,
    alignItems: 'flex-start',
  },
  nome: {
    color: '#dee1dc',
    fontSize: 15,
    marginRight: 80,
    marginTop: -30,
    margin: -10,
    alignItems: 'flex-start',
  },
  nome2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 20,
    padding: 10,
    marginTop: 70,
    borderRadius: 10,
    width: 350,
  },
  textInput: {
    height: 35,
    borderWidth: 2,
    borderColor: '#121212',
    backgroundColor: '#dee1dc',
    color: '#121212',
    borderRadius: 7,
    marginLeft: 80,
    marginTop: -40,
    paddingHorizontal: 10,
    width: 250,
  },
  valores: {
    backgroundColor: '#282c2b',
    marginTop: 20,
    borderRadius: 10,
    width: 350,
  },
  textValores: {
    color: '#dee1dc',
    fontSize: 15,
    margin: 15,
  },
  cartao: {
    color: '#dee1dc',
    backgroundColor: '#dee1dc',
    fontSize: 18,
    borderRadius: 10,
    padding: 8,
    paddingLeft: 40,
    marginRight: 150,
    marginLeft: 10,
  },
  textValores2: {
    color: '#dee1dc',
    fontSize: 12,
    margin: 10,
  },
  button: {
    backgroundColor: '#282c2b',
    borderRadius: 100,
    opacity: 0.8,
    margin: 10,
    marginTop: 20,
    width: 90,
  },
  textValores3: {
    color: '#dee1dc',
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default OrcamentoPage;
