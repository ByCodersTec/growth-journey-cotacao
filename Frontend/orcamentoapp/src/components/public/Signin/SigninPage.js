import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Foto from '../assets/ciclone3.png';

const SigninPage = () => {
  const {navigate} = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={Foto}
          style={{width: 250, height: 90, marginLeft: 50, marginBottom: 80}}
        />
        <TextInput
          placeholderTextColor="#dee1dc"
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#dee1dc"
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigate('SignupPage')}>
            <Text style={styles.text1}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
            <Text style={styles.text1}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Vendedor')}>
            <Text style={styles.textButtom}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 7,
    margin: 15,
    color: '#f5f5f5',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 100,
    opacity: 0.8,
  },
  textButtom: {
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: '#f5f5f5',
    fontSize: 17,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
});

export {SigninPage};
