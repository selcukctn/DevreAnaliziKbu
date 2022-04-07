import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import home from './src/screen/home';
import devreOlustur from './src/screen/devreOlustur';
import dersNotlari from './src/screen/dersNotlariPage';
import bir from './src/screen/dersnotlari/birinciHafta';
import iki from './src/screen/dersnotlari/ikinciHafta';
import uc from './src/screen/dersnotlari/ucuncuHafta';
import dort from './src/screen/dersnotlari/dorduncuHafta';
import bes from './src/screen/dersnotlari/besinciHafta';
import alti from './src/screen/dersnotlari/altinciHafta';
import yedi from './src/screen/dersnotlari/yedinciHafta';
import sekizdokuz from './src/screen/dersnotlari/sekizincidokuzuncuHafta';
import on from './src/screen/dersnotlari/onuncuHafta';
import onbironiki from './src/screen/dersnotlari/onbironikinciHafta';
import onuc from './src/screen/dersnotlari/onucuncuHafta';

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      }}
      >
      <Stack.Screen name="Anasayfa" component={home} />
      <Stack.Screen name="Devre Oluştur" component={devreOlustur} />
      <Stack.Screen name="Ders Notları" component={dersNotlari} />
      <Stack.Screen name="Birinci Hafta" component={bir} />
      <Stack.Screen name="İkinci Hafta" component={iki} />
      <Stack.Screen name="Üçüncü Hafta" component={uc} />
      <Stack.Screen name="Dördüncü Hafta" component={dort} />
      <Stack.Screen name="Beşinci Hafta" component={bes} />
      <Stack.Screen name="Altıncı Hafta" component={alti} />
      <Stack.Screen name="Yedinci Hafta" component={yedi} />
      <Stack.Screen name="Sekiz ve Dokuzuncu Hafta" component={sekizdokuz} />
      <Stack.Screen name="Onuncu Hafta" component={on} />
      <Stack.Screen name="On Bir ve On İkinci Hafta" component={onbironiki} />
      <Stack.Screen name="On Üçüncü Hafta" component={onuc} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
