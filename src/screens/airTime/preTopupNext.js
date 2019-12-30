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

export default class preTopupNext extends PureComponent{
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
                <ImageBackground source={require('@assets/images/airTime/serviceprovider1x.png')} style={styles.bgphoneIMG} resizeMode="stretch">
                    <View>
                        <Text style={styles.addtxt}> Pre topup </Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.container}>                            
                    <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}> 50.0 NGN </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}> 50.0 NGN </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}>  100.0 NGN  </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}>  150.0 NGN  </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}> 200.0 NGN </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                                <Text style={styles.txtbnt}> 300.0 NGN </Text>
                                <Image 
                                    source={require('@assets/images/bills/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
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