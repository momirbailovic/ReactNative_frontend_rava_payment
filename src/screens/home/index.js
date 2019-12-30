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

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class home extends PureComponent{
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
                        <View style={styles.panelMem}>
                            <View className = "shadowTest" style={styles.headerPan} >
                                <View>
                                    <Text style={styles.panelNam}>
                                        Chromepay Wallet Bal Hawk.
                                    </Text>
                                </View> 
                                <Image 
                                    source={require('@assets/images/dashboard/icon1x.png')}  
                                    style={styles.panelImg} 
                                />                           
                            </View>                            
                            <View>
                                <Text style={styles.panelbody}>
                                    0.00 USD
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.panelSta}>
                                    Available Balance
                                </Text>
                            </View>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressAddMoney()}}
                            >
                                <Text style={styles.txtbnt}> Add Money To Wallet </Text>
                                <Image 
                                    source={require('@assets/images/dashboard/wallet1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressWithdraw()}}
                            >
                                <Text style={styles.txtbnt}> Withdraw Money </Text>
                                <Image 
                                    source={require('@assets/images/dashboard/withdraw1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressSendMoney()}}
                            >
                                <Text style={styles.txtbnt}> Transfer Funds </Text>
                                <Image 
                                    source={require('@assets/images/dashboard/transfer1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressTransactions()}}
                            >
                                <Text style={styles.unshowtxtbnt}> Your activity </Text>
                                <AntDesign name="arrowright" size={25} color={'#fff'} />
                                {/* <Image 
                                    source={require('@assets/images/dashboard/transfer1x.png')}  
                                    style={styles.unshowbntImg} 
                                /> */}
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
    container:{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: screenHeight/10,
        height: screenHeight/10,
        resizeMode: 'contain'
    },
    panelMem: {
        margin: 10,
        height: 100,
        opacity: 0.9,
        width: '90%', 
        borderRadius:10,
       // backgroundColor:'#77a4b3',
        backgroundColor: '#114ea1', 
        shadowColor: '#000000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        alignItems:'center',
    },
    headerPan: {
        flexDirection: 'row', 
        alignItems:'center',
    },

    panelImg: {
        alignItems: 'center',
        width: '20%',
        padding: 10,
        width: 30,
        height: 30,
    },
    panelNam: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    panelbody: {
        padding: 6,
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold',
    },

    panelSta: {
        fontSize: 11,
        color: '#fff',
    },

    decideview: {
        padding: 10,
    },
    decidebnt: {
        width:'85%',
        height:50,
        borderRadius:10,
        alignItems:'center',  
        backgroundColor:'#EEEEEE', 
        flexDirection: 'row',
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
    unshowtxtbnt: {
        color: '#fff', 
        width: '80%', 
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    unshowbntImg: {
        alignItems: 'center',
        width: '20%',
        padding: 15,
        marginRight: 15,
        width: 30,
        height: 30,
    },

    decidebntNex: {
        width:'40%',
        height:40,
        borderRadius:5,
        
        alignItems:'center', 
        justifyContent:'center',  
        backgroundColor:'#00BA52', 
    },


})