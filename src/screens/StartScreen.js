import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Curiosidades</Header>
      <Paragraph>
      As criptomoedas estão entre as maiores tendências para o ano de 2022 devido ao fato de que o Bitcoin chegou ao seu valor máximo em 2021, sendo de R$ 370 mil.
      </Paragraph>

      <LottieView
        autoPlay
        style={{
          width: 300,
          height: 350,
          top: -20,
          alignItems: 'center',
          alignSelf: 'center'
        }}
        source={require('../assets/animation.json')} />

      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Se inscrever
      </Button>
    </Background>
  )
}
