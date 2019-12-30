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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class changePassword extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }

    }

    onPressAddMoney() {
        Actions.AddMoney();
    }
    onPressWithdraw() {
        Actions.Withdraw();
    }
    onPressSendMoney() {
        Actions.SendMoney();
    }    
    onPressTransactions() {
        Actions.Transactions();
    }
    render(){
        return(
            <KeyboardAwareScrollView                
                resetScrollToCoords={{ x: 0, y: 0 }}                
                scrollEnabled={true}
                viewIsInsideTabBar = {true}
            >
            <ImageBackground source={require('@assets/images/dashboard/imagebg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <View style={styles.container}>
                        <View>
                            <Image source={require('@assets/images/dashboard/logo1x.png')} style={styles.logo}/>
                        </View>
                        <View>
                            <Text style={styles.addtxt}> Reset Password Enter Your New Email </Text>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View style={styles.hideView}>
                                <Text style={styles.toptxt}> Current Password </Text>
                                <TextInput
                                    style = {styles.emilinptxt}
                                    placeholder={''}
                                    secureTextEntry={true}
                                    placeholderTextColor='#fff'
                                    onChangeText={(text) => this.setState({ amount: text })}
                                    value={this.setState.email}
                                />                                
                            </View>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View style={styles.hideView}>
                                <Text style={styles.toptxt}> New Password </Text>
                                <TextInput
                                    style = {styles.emilinptxt}
                                    placeholder={''}
                                    secureTextEntry={true}
                                    placeholderTextColor='#fff'
                                    onChangeText={(text) => this.setState({ amount: text })}
                                    value={this.setState.email}
                                />                                
                            </View>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View style={styles.hideView}>
                                <Text style={styles.toptxt}> Confirm Password </Text>
                                <TextInput
                                    style = {styles.emilinptxt}
                                    placeholder={''}
                                    secureTextEntry={true}
                                    placeholderTextColor='#fff'
                                    onChangeText={(text) => this.setState({ amount: text })}
                                    value={this.setState.email}
                                />                                
                            </View>
                        </View>
                        <View style={styles.goview}>
                            <TouchableOpacity
                                onPress={()=>{this.onLogin()}}
                            >
                                <Image source={require('@assets/images/withdrawmoney/nextbutton1x.png')} style={styles.gobtn}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.bottomtxt}> Update Password </Text>
                        </View>
                    </View>
            </ImageBackground>
        </KeyboardAwareScrollView>    

        )
    }
}

const styles = StyleSheet.create({
    backgroundIMG: {
        height: screenHeight,
        width: screenWidth,       
    },
    container:{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: screenHeight/9,
        height: screenHeight/9,
        resizeMode: 'contain'
    },
    addtxt: {
        padding: screenHeight / 20,
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    inputtxt1: {
        width: '80%',
        margin: screenWidth * 0.1,
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: 'transparent',
    },
    hideView: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,  
    },
    toptxt: {
        padding: 3,
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
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
        height: 20,
        width: 25,
        resizeMode: 'contain'
    }, 
    goview: {
        margin: screenWidth * 0.1,
        marginTop: screenHeight * 0.05,
        marginBottom: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    gobtn: {
        height: screenWidth / 7,
        width: screenWidth / 7,
        resizeMode: 'contain'
    },
    bottomtxt: {
        padding: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})