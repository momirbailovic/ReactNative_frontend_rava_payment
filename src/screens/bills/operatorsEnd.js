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

export default class operatorsEnd extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',

        }

    }

    onPressNext(){
        Actions.Account();
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
            <ImageBackground source={require('@assets/images/bills/imagebg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ImageBackground source={require('@assets/images/bills/serviceprovider1x.png')} style={styles.bgphoneIMG} resizeMode="stretch">
                    <View>
                        <Text style={styles.addtxt}> OPERATORS </Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.container}>                            
                        
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
    decideview: {
        padding: 10,
    },
    decidebnt: {
        padding: 13,
        width:'90%',
        height:50,
        borderRadius:10,
        alignItems: 'flex-start',
        backgroundColor:'#fff', 
        flexDirection: 'row',
    },
    txtbnt: {
        color: '#2d7794', 
        width: '80%', 
        textAlign: 'left',
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
})