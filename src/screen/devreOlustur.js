import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions, TouchableOpacity ,ScrollView, StatusBar, Linking} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Dialog, { DialogTitle, DialogFooter, DialogButton, SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const telWidth = Dimensions.get('window').width;
const telHeight = Dimensions.get('window').height;




export default class devreOlustur extends Component {
  constructor(props) {
    super(props);
    this.state = {
        direnc:'',
        volt:'',
        akim:'0',
        res:'0',
        visible:false,
        herBirDirencinVoltA:[],
        herBirDirencinGücü:[],
        seri:true
    };
  }
  onUserWordChange(text) {
    this.setState({direnc: text});
  }
  onUserWordChange1(text) {
    this.setState({volt: text});
  }
  visibleChange() {
    this.setState({visible: true});
  }
  checkBoxChange(is_seri=true) {
    this.setState({seri: is_seri});
  }
  devreOlustur(){
    var devre=[],herBirDirencinVoltA=[];
    let volt=parseFloat(this.state.volt);
    let akim,herBirDirencinVolt,herBirDirencGüc;
    if(this.state.seri==true){
      if(this.state.direnc.indexOf(',')>0){
        devre=this.state.direnc.split(',')
      }
      else{
        devre[0]=this.state.direnc
      }
      let res=0;
      for(let k=0;k<devre.length;k++){
        let c=parseFloat(devre[k]);
        res=c+res
      }
      akim=volt/res;
      for(let k=0;k<devre.length;k++){
        let herR=parseFloat(devre[k]);
        herBirDirencinVolt=akim*herR;
        herBirDirencinVoltA[k]=herBirDirencinVolt;
        this.state.herBirDirencinVoltA[k]=herBirDirencinVoltA[k];
        herBirDirencGüc=akim*herBirDirencinVolt;
        this.state.herBirDirencinGücü[k]=herBirDirencGüc;
        
      }
      this.setState({
        res: res.toString(),
        akim: akim.toString()
      })
      console.log("Res:"+this.state.res);
    }
    else{
      if(this.state.direnc.indexOf(',')>0){
        devre=this.state.direnc.split(',')
      }
      else{
        devre[0]=this.state.direnc
      }
      let res=0;
      for(let k=0;k<devre.length;k++){
        let c=parseFloat(devre[k]);
        c=1/c;
        res=c+res
      }
      res=1/res;
      akim=volt/res;
      for(let k=0;k<devre.length;k++){
        let herR=parseFloat(devre[k]);
        herBirDirencinVolt=akim*herR;
        herBirDirencinVoltA[k]=herBirDirencinVolt;
        this.state.herBirDirencinVoltA[k]=herBirDirencinVoltA[k];
        herBirDirencGüc=akim*herBirDirencinVolt;
        this.state.herBirDirencinGücü[k]=herBirDirencGüc;
        
      }
      this.setState({
        res: res.toString(),
        akim: akim.toString()
      })
      console.log("Res:"+this.state.res);
    }
  }
    
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f4511e" barStyle = 'light-content'  />
        <View style={styles.inputArea}>
          <TextInput
              onChangeText={text => this.onUserWordChange1(text)}
              style={styles.textInput}
              value={this.state.volt}
              placeholder='Volt Giriniz.'
          />
        </View>
        <View style={styles.inputArea}>
          <TextInput
              onChangeText={text => this.onUserWordChange(text)}
              style={styles.textInput}
              value={this.state.direnc}
              placeholder='Örnek Direnc Girişi: 12,10,5'
          />
        </View>
        
        
        <View style={{flexDirection:'row',marginTop:15}}>
            <BouncyCheckbox
                size={25}
                fillColor="#f4511e"
                unfillColor="#FFF"
                iconStyle={{ borderColor: "#f4511e" }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={()=>this.checkBoxChange(false)}
            />
            <Text style={{color:'#f4511e',fontSize:18}}>Paralel Bağla</Text>
        </View>
        
        <TouchableOpacity
        style={styles.hesapla}
        onPress={
          () => {
            this.setState({ visible: true });
            this.devreOlustur();
            this.setState({ direnc:'',volt:''});
          }
        }>
          <Text style={{color:'#f4511e',fontSize:12}}>Hesapla</Text>
        </TouchableOpacity>
        <Dialog
            visible={this.state.visible}
            dialogTitle={<DialogTitle title="Oluşturulan Devre Sonuçları" />}
            dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
            initialValue: 0, // optional
            animationDuration: 150, // optional
            useNativeDriver: true, // optional
            })}
            footer={
            <DialogFooter style={styles.dialog}>
            <DialogButton
            text="Tamam"
            onPress={() => {
            this.setState({ visible: false });
            }}
          />
            </DialogFooter>
              }
            >
            <DialogContent style={styles.dialogcontent}>
                <ScrollView>
                  {
                  <Text>Eş Değer Direnç:{this.state.res}</Text>
                  }
                  <Text>Devre akımı:{this.state.akim}</Text>
                  <View>
                    { this.state.herBirDirencinVoltA.map((item, key)=>(
                    <Text key={key}>Sırayla Girilen Dirençlerin Gerilimleri: { item } </Text>)
                    )}
                  </View>
                  <View>
                    { this.state.herBirDirencinGücü.map((item, key)=>(
                    <Text key={key}>Sırayla Girilen Direnç İçin Harcanan Güç: { item } </Text>)
                    )}
                  </View>
                </ScrollView>
            </DialogContent>
          </Dialog>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        borderWidth:1,
        width:telWidth/2.1,
        borderRadius:10,
        borderColor:'#f4511e',
        color:'#f4511e'
    },
    dialogbutton:{
      backgroundColor:'white',
    },
    dialogcontent:{
      width:telWidth/1.2,
      height:150,
      backgroundColor:'white',
    },
    inputArea:{
      marginBottom:5,
      marginTop:5,
    },
    hesapla:{
      borderWidth:1,
      width:telHeight/11,
      height:telHeight/11,
      borderRadius:telHeight/11,
      justifyContent:'center',
      alignItems: 'center',
      marginTop:50,
      borderColor:'#f4511e',
    },
  })