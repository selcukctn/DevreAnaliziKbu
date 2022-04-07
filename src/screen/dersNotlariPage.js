import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions, TouchableOpacity, StatusBar, Linking } from 'react-native';


const telWidth = Dimensions.get('window').width;
const telHeight = Dimensions.get('window').height;
import { StackActions } from '@react-navigation/native';

export default class dersNotlari extends Component {
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
                const pushAction = StackActions.push('Birinci Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Text style={styles.h2}>1.Hafta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('İkinci Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>2.Hafta</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('Üçüncü Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>3.Hafta</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            onPress={() =>  {
                const pushAction = StackActions.push('Dördüncü Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Text style={styles.h2}>4.Hafta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('Beşinci Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>5.Hafta</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('Altıncı Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>6.Hafta</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            onPress={() =>  {
                const pushAction = StackActions.push('Yedinci Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Text style={styles.h2}>7.Hafta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('Sekiz ve Dokuzuncu Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>8-9.Hafta</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  {
                const pushAction = StackActions.push('Onuncu Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
                }}
                >
                <View style={styles.menuBox}>
                    <Text style={styles.h2}>10.Hafta</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            onPress={() =>  {
                const pushAction = StackActions.push('On Bir ve On İkinci Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Text style={styles.h2}>11-12.Hafta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>  {
                const pushAction = StackActions.push('On Üçüncü Hafta');
            
                this.props.navigation.dispatch(pushAction);
            
              }}
            >
              <View style={styles.menuBox}>
                <Text style={styles.h2}>13.Hafta</Text>
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
      flex:1
    },
    header:{
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      elevation:10,
      width:telWidth,
      height:telHeight/6
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
      width:telWidth/3.4,
      height:telHeight/7,
      justifyContent:'center',
      alignItems: 'center',
      marginTop:10,
      marginRight:5,
      marginLeft:5,
      borderRadius:20,
      elevation:2,
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
  })