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
import Flag from 'react-native-flags';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class addMoney extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',
            country: 'NGN',

        }

    }
    _country = null;

    setCountryRef = ref => {
        this._country = ref;
    };

    hideCountry(text) {
        this._country.hide();
        this.setState({country: text});
    };

    showCountry() {
        this._country.show();
    };

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
                        <Text style={styles.addtxt}> ADD MONEY </Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.container}>                            
                        <View style={styles.textview}>
                            <Text style={styles.textbnt}> Enter Amount </Text>
                        </View>
                        <View style={{marginTop: 30, width: '100%'}}>
                            <TouchableOpacity onPress={()=>{this.showCountry()}} >                                
                                <View style={styles.inputtxt2}>
                                    <View style = {styles.listView}>
                                        <Menu
                                            ref={this.setCountryRef}
                                            button={<Text style = {styles.listtxt} onPress={()=>{this.showCountry()}}>{this.state.country}</Text>}
                                        >
                                            <MenuItem onPress={()=>{this.hideCountry('NGN')}} > <Flag code="NG" size={32} /> NGN </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('USD')}} > <Flag code="US" size={32} /> USD </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('GBP')}}  > <Flag code="GB" size={32} /> GBP </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('ZAR')}} > <Flag code="ZA" size={32} /> ZAR </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('EUROS')}} > <Flag code="DE" size={32} /> EUROS </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('ZAMBIAN KWACHA')}} > <Flag code="ZM" size={32} /> ZAMBIAN KWACHA </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('PULA')}} > <Flag code="BW" size={32} /> PULA </MenuItem>
                                            {/* <MenuItem onPress={this.hideMenu} disabled> Menu item 3 </MenuItem>
                                            <MenuDivider />
                                            <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem> */}
                                        </Menu>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.emilbnt}
                                        onPress={()=>{this.showCountry()}}
                                    >
                                        <Image source={require('@assets/images/register/downarow1x.png')} style={styles.mail1x}/>

                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>                         
                        </View>                        
                        <View style={styles.decideview}>
                            <TouchableOpacity
                                style = {styles.unshowbnt}
                                onPress={()=>{this.onPressCancel()}}
                            >
                               <Image 
                                    source={require('@assets/images/addMoney/nextbutton1x.png')}  
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
    textview: {
        paddingTop: 20,
        width: '70%', 
        backgroundColor: 'transparent',
        borderBottomColor: '#225af2',
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
    listView: {
        padding: 10,
        width:'80%',
        flex: 1, 
        alignItems: 'flex-start',       
    },
    listtxt: {
        padding: 10,
        fontSize: 18,
        color: '#0c6376',    
    },
    emilbnt: {
        paddingTop: 3,
        width:'10%',
        marginRight: 0,
    },    
    emilbnt: {
        paddingTop: 3,
        width:'20%',
        marginRight: 0,
        marginTop: 10,
    },
    mail1x: {
        height: 40,
        width: 25,
        resizeMode: 'stretch'
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
        paddingTop: 3,
        width:'20%',
        marginRight: 0,
        marginTop: 10,
    },
    mail1x: {
        height: 40,
        width: 25,
        resizeMode: 'stretch'
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