import React from 'react';
import {View, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity} from 'react-native';


export default function Forget_pass(props) {
    
    return (
        <SafeAreaView style={styles.background}>
          <Image style={styles.logo} source={require('../pics/Logo1.png')} />
          <Text style={styles.forget_icon}> Forget Password? </Text>
          <Text style={styles.remind}> Enter your email below to rest your password </Text>
          <TextInput style={styles.email}> Email</TextInput>
  
          <TouchableOpacity style={styles.submit_button} onPress={console.log('Forgot Press')} />
          <TouchableOpacity  style={styles.submit_button}>  
            <Button title='SUBMIT' color='orange' onPress={console.log('Button Pressed')} />
          </TouchableOpacity>

          <TouchableOpacity  style={styles.help}>  
            <Button title='Need Help?' color='orange' onPress={console.log('Help Pressed')} />
          </TouchableOpacity>
          
          <TouchableOpacity  style={styles.go_home}>  
            <Button title='Go Back To Log-in'  onPress={console.log('Home Pressed')} />
          </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    background:{
      backgroundColor: '#191E25',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    logo:{
      height: 120,
      width: 340,        
      top: -120
    },
  
    forget_icon:{

      color: 'orange',
      top: -60,
      fontSize: 24,
      alignContent: 'center',
      alignItems: 'center'
    },
  
    remind:{
      fontSize: 12,
      alignContent: 'center',
      color: 'white',
      top: -35
    },
  
    email:{
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      padding: 8,
      margin: 1,
      width: 300,
      height: 60,
      top: -30,
      color: 'white',
      alignItems: 'center'
    },
  
    submit_button:{ 
      borderBottomWidth:1,
      borderColor:'orange', 
      top: 30,
      borderRadius: 10,
      padding: 8,
      width: 200,
      alignContent: 'center'
    },
  
    help:{
      color: 'orange',
      top: 50,
      lineHeight: 18,
      height: 39
    },
  
  
    go_home:{
     
      backgroundColor: '#191E25',
      lineHeight: 23,
      fontSize: 15,
      top: 170,
      alignItems: 'center'
    }
  });