import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { Text } from 'react-native'
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';


export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
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
        source={require('../assets/password.json')} />

      <Text style={{top: -10, fontSize: 17, fontWeight: 'bold', color: '#fff'}}>Resetar minha senha</Text>
      <TextInput
        label="Seu e-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Você irá receber no seu e-mail um link para trocar a senha."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Resetar minha senha
      </Button>
    </Background>
  )
}
