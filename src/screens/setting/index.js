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
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class setting extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',

        }

    }

    onPressCancel(){
        
    }
    onPressBank() {
        Actions.Bank();
    }
    onPressForgot() {
        Actions.ForgotPassword();
    }
    onPressChange() {
        Actions.ChangePassword();
    }    
    onPressMyProfile() {
        Actions.MyProfile();
    }


    render(){
        let dataSex = [
            {
                value: 'Male',
            }, 
            {
                value: 'Female',
            }
        ];
        return(
            <ImageBackground source={require('@assets/images/addbankac/bgimage1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ScrollView>
                    <View style={styles.container}>                            
                        <View style={styles.textview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressBank()}}
                            >
                               <Image 
                                    source={require('@assets/images/addbankac/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                                <Text style={styles.textbnt}> Bank </Text>
                                
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressForgot()}}
                            >
                               <Image 
                                    source={require('@assets/images/addbankac/mobileno1x.png')}  
                                    style={styles.bntImg} 
                                />
                                <Text style={styles.textbnt}> Forgot Password </Text>
                                
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressChange()}}
                            >
                               <Image 
                                    source={require('@assets/images/addbankac/mobileno1x.png')}  
                                    style={styles.bntImg} 
                                />
                                <Text style={styles.textbnt}> Change Password </Text>
                                
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressMyProfile()}}
                            >
                               <Image 
                                    source={require('@assets/images/addbankac/username1x.png')}  
                                    style={styles.bntImg} 
                                />
                                <Text style={styles.textbnt}> My Profile </Text>
                                
                            </TouchableOpacity>
                        </View>

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
    bgphoneIMG: {
        height: screenHeight / 4,
        width: screenWidth,
    },
    addtxt: {
        padding: screenHeight / 9,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    textview: {
        paddingTop: 20,
        width: '100%', 
        backgroundColor: 'transparent',
        borderBottomColor: '#fff',
        borderBottomWidth: 1, 
        alignItems: 'flex-start'
    },
    textbnt: {
        color: '#fff', 
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputtxt2: {
        height: 60,
        margin: screenWidth * 0.1,
        marginTop: 15,
        marginBottom: 0,
        backgroundColor: 'white',
        borderRadius:10,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    dropDownContianer: {
        margin: 10, 
        padding: 3, 
        width: '80%', 
        height: 20, 
    },
    dropDownpicker: {
        marginBottom: 5, 
        padding: 3, 
        width: '90%', 
        height: 100, 
    },
    emilbnt: {
        paddingTop: 13,
        width:'20%',
        marginRight: 0,
        marginTop: 10,
    },
    mail1x: {
        height: 20,
        width: 25,
        resizeMode: 'contain'
    },
    decideview: {
        padding: 50,
        alignItems:'center',
    },
    txtbnt: {
        color: '#2d7794', 
        width: '80%', 
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bntImg: {
        alignItems: 'center',
        width: '20%',
        padding: 15,
        marginRight: 15,
        width: 30,
        height: 30,
    },
    unshowbnt: {
        width:'85%',
        height:50,
        borderRadius:10,
        alignItems:'center',  
        backgroundColor:'transparent', 
        flexDirection: 'row',
    },    
})