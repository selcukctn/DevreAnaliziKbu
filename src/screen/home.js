import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions, TouchableOpacity,Image, StatusBar, Linking } from 'react-native';


const telWidth = Dimensions.get('window').width;
const telHeight = Dimensions.get('window').height;
import { StackActions } from '@react-navigation/native';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#f4511e" barStyle = 'light-content'  />
        {/* body start */}
        <View style={styles.body}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            onPress={() =>  {
                const pushAction = StackActions.push('Devre Oluştur');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Image
                source={require('../img/circuit.png')}
                style={styles.img}
                />
                <Text style={styles.h2}>Devre Oluştur</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>  {
              const pushAction = StackActions.push('Ders Notları');
          
              this.props.navigation.dispatch(pushAction);
          
            }}
            >
              <View style={styles.menuBox}>
                <Image
                source={require('../img/notepad.png')}
                style={styles.img}
                />
                <Text style={styles.h2}>Ders Notları</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* body finish */}
        
        <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.instagram.com/selcukctn/')}
            >
              <Text style={styles.h2}>Harun Selçuk Çetin</Text>
            </TouchableOpacity>
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    h1:{
      fontSize:50,
      color:'black',
      fontWeight:'bold',
    },
    h2:{
      fontSize:20,
      color:'#fff'
    },
    body:{
      flex:3,
      justifyContent:'center',
      alignItems: 'center',
    },
    
    menuBox:{
      width:telWidth/2.3,
      height:telHeight/4,
      justifyContent:'center',
      alignItems: 'center',
      marginTop:10,
      marginRight:10,
      borderRadius:20,
      elevation:1.2,
      backgroundColor:'#f4511e'
    },
    footer:{
      width:telWidth,
      height:telHeight/9,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems: 'center',
      elevation:10,
      backgroundColor:'#f4511e',
    },
    img:{
      width:100,
      height:100,
      marginBottom:30,
    },
  })