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

export default class transactions extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',

        }

    }

    onPressCancel(){
        
    }
    onLogin() {

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
            <ImageBackground source={require('@assets/images/dashboard/bgimage1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ImageBackground source={require('@assets/images/addMoney/image1x.png')} style={styles.bgphoneIMG} resizeMode="stretch">
                    <View>
                        <Text style={styles.addtxt}> Transactions </Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.container}>                            
                        <View style={styles.textview}>
                            {/* <Text style={styles.textbnt}> Transactions </Text> */}
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
        width: '70%', 
        backgroundColor: 'transparent',
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
        width: 60,
        height: 60,
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