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

// import { CheckBox } from 'react-native-elements';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class sendMoneySecond extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            checked: false,
        }

    }
    onPressCheck = (checked) => {
        this.setState({
            checked: checked,
        });
    }
    onLogin() {
        //Actions.AddMoney();
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
                            <Text style={styles.addtxt}> Send Money </Text>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View >
                                <TextInput
                                    style = {styles.emilinptxt}
                                    secureTextEntry={true}
                                    placeholder={'Name'}
                                    placeholderTextColor='#fff'
                                />
                            </View>
                            <View style = {styles.showView}>

                            </View>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View >
                                <TextInput
                                    style = {styles.emilinptxt}
                                    secureTextEntry={true}
                                    keyboardType={'number-pad'}
                                    placeholder={'Mobile No'}
                                    placeholderTextColor='#fff'
                                />

                            </View>
                            <View style = {styles.showView}>

                            </View>
                        </View>
                        <View style={styles.ngnbar}>
                            <View style={styles.ngnbox}>
                                <Text style={styles.ngntxt1}> NGN </Text>
                            </View>
                            <View style={styles.ngntxt2}>
                                <View >
                                    <TextInput
                                        style = {styles.emilinptxt}
                                        secureTextEntry={true}
                                        placeholder={'Enter Amount'}
                                        placeholderTextColor='#fff'
                                    />
                                </View>
                                <View style = {styles.showView}>
    
                                </View>
                            </View>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View >
                                <TextInput
                                    style = {styles.emilinptxt}
                                    secureTextEntry={true}
                                    placeholder={'Reason'}
                                    placeholderTextColor='#fff'
                                />
                            </View>
                            <View style = {styles.showView}>

                            </View>
                        </View>
                        <View style={styles.inputtxt1}>
                            <View >
                                <TextInput
                                    style = {styles.emilinptxt}
                                    secureTextEntry={true}
                                    placeholder={'Password'}
                                    placeholderTextColor='#fff'
                                />
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
                        {/* <View style ={{padding: 10}}>
                            <CheckBox
                                title='Enable Scored Questions'
                                checkedIcon='check-square-o'
                                uncheckedIcon='square-o'
                                size = {30}
                                containerStyle = {{ backgroundColor: 'white', borderColor: 'transparent'}}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />    
                        </View> */}
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
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ngnbar: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '80%',
        margin: screenWidth * 0.1,
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: 'transparent',
    },
    ngnbox: {
        padding:1,
        margin: 5,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        width: '20%',
    },
    ngntxt1: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ngntxt2: {
        width: '75%',
        backgroundColor: 'transparent',
    },
    inputtxt1: {
        width: '80%',
        margin: screenWidth * 0.1,
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: 'transparent',
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