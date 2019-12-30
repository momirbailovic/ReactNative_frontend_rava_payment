import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    ImageBackground,
    Dimensions,
    Image,
    TextInput,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class sendMoney extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',
            email: '',
            amount: '',
        }

    }

    onPressNext(){
        Actions.SendMoneySecond();
    }
    onLogin() {

    }


    render(){

        return(
            <ImageBackground source={require('@assets/images/dashboard/bgimage1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ScrollView>
                    <View>
                        <Text style={styles.addtxt}> Send Money </Text>
                    </View>
                    <View style={styles.container}>                            
                        <ImageBackground source={require('@assets/images/withdrawmoney/image1x.png')} style={styles.panelIMG1} resizeMode="stretch">
                            <View style={styles.inputtxt1}>
                                <View style={styles.hideView}>
                                    <Text style={styles.titletxt}> To </Text>
                                </View>
                            </View>
                            <View style={styles.inputtxt1}>
                                <View style={styles.hideView}>
                                    <TextInput
                                        style = {styles.emilinptxt}
                                        keyboardType={'number-pad'}
                                        placeholder={'Enter Mobile No.'}
                                        placeholderTextColor='#fff'
                                    />
                                    <TouchableOpacity
                                        style={styles.emilbnt}
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Image source={require('@assets/images/withdrawmoney/mobileno1x.png')} style={styles.mail1x}/>

                                    </TouchableOpacity>
                                </View>
                                <View style = {styles.showView}>

                                </View>
                            </View>
                            <View style={styles.goview}>
                                <TouchableOpacity
                                    onPress={()=>{this.onPressNext()}}
                                >
                                    <Image source={require('@assets/images/withdrawmoney/nextbutton1x.png')} style={styles.gobtn}/>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    backgroundIMG: {
        height: screenHeight,
        width: screenWidth,       
    },    
    addtxt: {
        padding: screenHeight / 15,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        flex: 1,
        alignItems: 'center',
    },
    panelIMG1: {
        marginTop: 0,
        height: 220,
        width: screenWidth * 0.9,
        resizeMode:'stretch', 
         
    },
    titletxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    LoRebtn: {
        margin: screenWidth * 0.1,
        marginTop: 30,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    bnttxt: {
        color: '#fff', 
        fontSize: 20,
    },
    inputtxt1: {
        margin: screenWidth * 0.1,
        marginTop: 40,
        marginBottom: 0,
        backgroundColor: 'transparent',
    },
    hideView: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    showView: {
        height: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth:1,
        borderColor: 'white',
    },
    emilinptxt: {
        width:'90%',
        fontSize: 18,
        color: '#fff',
        
    },
    emilbnt: {
        paddingTop: 3,
        width:'10%',
        marginRight: 0,
    },    
    mail1x: {
        height: 28,
        width: 26,
        resizeMode: 'contain'
    }, 
    goview: {
        margin: screenWidth * 0.1,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    gobtn: {
        height: screenWidth / 8,
        width: screenWidth / 8,
        resizeMode: 'contain'
    },
})