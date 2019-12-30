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

export default class bank extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }

    }

    onPressAddBank() {
        Actions.AddBank();
    }
    onPressManageBank() {
        Actions.ManageBank();
    }

    render(){
        return(
            <ImageBackground source={require('@assets/images/setting/bgimage1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image source={require('@assets/images/setting/logo1x.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressAddBank()}}
                            >
                                <Text style={styles.txtbnt}> Add Back A/C  </Text>
                                <Image 
                                    source={require('@assets/images/setting/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.decidebnt}
                                onPress={()=>{this.onPressManageBank()}}
                            >
                                <Text style={styles.txtbnt}> Manage Bank A/C </Text>
                                <Image 
                                    source={require('@assets/images/setting/bank1x.png')}  
                                    style={styles.bntImg} 
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageview}>
                            <Image 
                                    source={require('@assets/images/setting/image1x.png')}  
                                    style={styles.middleImg} 
                                />
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
        paddingTop: 30,
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
    imageview: {
        padding: 10,
    },  
    middleImg: {
        alignItems: 'flex-start',
        width: '20%',
        marginRight: 15,
        width: screenHeight * 0.3,
        height: screenHeight * 0.3,
        resizeMode: 'contain',
    },
})