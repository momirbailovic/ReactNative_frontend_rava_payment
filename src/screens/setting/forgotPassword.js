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

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class forgotPassword extends PureComponent{
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
            <ImageBackground source={require('@assets/images/dashboard/imagebg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image source={require('@assets/images/dashboard/logo1x.png')} style={styles.logo}/>
                        </View>
                        <View>
                            <Text style={styles.addtxt}> Forgot Password Enter Your Email </Text>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View style={styles.hideView}>
                                <TextInput
                                    style = {styles.emilinptxt}
                                    placeholder={'Email'}
                                    placeholderTextColor='#fff'
                                    onChangeText={(text) => this.setState({ amount: text })}
                                    value={this.setState.email}
                                />
                                {/* <TouchableOpacity
                                    style={styles.emilbnt}
                                    onPress={()=>{this.onLogin()}}
                                >
                                    <Image source={require('@assets/images/setting/mail1x.png')} style={styles.mail1x}/>

                                </TouchableOpacity> */}
                            </View>
                            <View style = {styles.showView}>

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
                            <Text style={styles.bottomtxt}> Submit </Text>
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
        padding: screenHeight / 15,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
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
        height: 20,
        width: 25,
        resizeMode: 'contain'
    }, 
    goview: {
        margin: screenWidth * 0.1,
        marginTop: screenHeight * 0.1,
        marginBottom: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    gobtn: {
        height: screenWidth / 6,
        width: screenWidth / 6,
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