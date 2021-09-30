import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from './components/Post';

function LoginScreen({ navigation }) {
  /*Create a Login Screen with a button that will ask for Authentication
    TODO: Will need to have KnightBites logo and other aesthetics added*/
  return (
    <View style={styles.screen}>
      {/*The Button - will eventually take to Calvin's sign in page, but for now just takes you straight to the home page*/}
      <Text style={styles.header}>
        Knight Bites
      </Text>
      <TouchableOpacity style = {styles.button} onPress= {() => navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [post, setPost] = useState();
  const [postItems, setPostItems] = useState([]);

  const handleAddPost = () => {
    Keyboard.dismiss();
    setPostItems([...postItems, post])
    setPost(null);  
  }

  return (
    <View style={styles.screen}>
      <View style={styles.postsWrapper}>
        <Text style={styles.sectionTitle}>Today's posts</Text>
	      <View style={styles.items}>
          {/* This is where the posts will go! */}
	        {
            postItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Post', {item})}>
                  <Post text={item} />
                </TouchableOpacity>
              )
            })
          }
	      </View>
      </View>
    
      {/*Write a post */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writePostWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a post'} value={post} onChangeText={text => setPost(text)} />
      
        <TouchableOpacity onPress={() => handleAddPost()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

function PostScreen({ route, navigation}) {
  return (
    <View style={styles.screen}>
      <Text>{route.params.item}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component ={LoginScreen} />
        <Stack.Screen name='Home' component = {HomeScreen} />
        <Stack.Screen name='Post' component = {PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  /*Per Calvin University Brand Identity Standards 
    Fonts: Constantia, Gotham, Century Schoolbook
    Maroon: #8C2131
    Gold:   #F3CD00 
    Can be found at https://calvin.edu/dotAsset/f784aa74-291f-45b1-b45c-d6455663bcb4
  */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Century Schoolbook',
  },

  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  header: {
    padding: 40,
    fontSize: 40,
    fontFamily: 'Constantia',
    fontWeight: 'bold',
    alignItems: 'center',
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: '#8C2131',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 24,
    fontFamily: 'Gotham',
    color: '#F3CD00'
  },

  postsWrapper: {
    paddingTop: 20,
    alignItems: 'center',
  },
  
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Gotham',
    fontSize: 24,
    fontWeight: "bold",
  },
  
  items: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: '20',
  },

  writePostWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#8C2131',
    borderWidth: 1,
    width: 250,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#8C2131',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#F3CD00',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
