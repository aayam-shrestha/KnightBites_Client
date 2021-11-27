import React from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { globalStyles } from '../styles/global';
import logo from '../assets/logo.png'

export default function LoginScreen({ navigation }) {
  /*Create a Login Screen with a button that will ask for Authentication
    TODO: Will need to have KnightBites logo and other aesthetics added*/
  return (
    <View style={globalStyles.screen}>
      <Image source={logo} style={globalStyles.loginLogo}/>
      {/*The Button - will eventually take to Calvin's sign in page, but for now just takes you straight to the home page*/}
      <Text style={globalStyles.header}>
        Knight Bites
      </Text>
        <TextInput style={globalStyles.loginTextBox} value={user} placeholder='Username'/>
        <TextInput secureTextEntry={true} style={globalStyles.loginTextBox} placeholder='Password'/>
        <TouchableOpacity style = {globalStyles.button} onPress= {() => navigation.navigate('Home',{user})}>
          <Text style = {globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => navigation.navigate('SignUp')}>
          <Text style = {{fontSize:14, color: '#8C2131', padding: 10}}> Don't have an account?</Text>
        </TouchableOpacity>
    </View>
  );
}