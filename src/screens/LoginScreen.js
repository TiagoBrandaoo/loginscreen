import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    
    <Background>
      <BackButton goBack={navigation.goBack} />

      <LottieView
        autoPlay
        style={{
          width: 300,
          height: 230,
          top: -30,
          alignItems: 'center',
          alignSelf: 'center'
        }}
        source={require('../assets/login.json')} />

      <Text style={styles.bem}>Bem vindo de volta!</Text>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={{color: '#fff'}}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Se inscreva aqui</Text>
        </TouchableOpacity>
      </View>
    </Background>

  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    top: 140,
    left: 80,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: '#fff',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  bem: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 10
  }
})
