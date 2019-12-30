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

export default class airTime extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',
            country: 'Select',

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

    onPressNext(){
        Actions.PreTopupNo();
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
            <ImageBackground source={require('@assets/images/airTime/imagebg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <ImageBackground source={require('@assets/images/airTime/supportedcountries1x.png')} style={styles.bgphoneIMG} resizeMode="stretch">

                </ImageBackground>
                <ScrollView>
                    <View style={styles.container}>                           
                        <View style={styles.textview}>
                            <Text style={styles.textbnt}> Select Destination Country </Text>
                        </View>
                        <View style={{marginTop: 30, width: '100%'}}>
                            <TouchableOpacity onPress={()=>{this.showCountry()}} >                                
                                <View style={styles.inputtxt2}>
                                    <View style = {styles.listView}>
                                        <Menu
                                            ref={this.setCountryRef}
                                            button={<Text style = {styles.listtxt} onPress={()=>{this.showCountry()}}>{this.state.country}</Text>}
                                        >
                                            <MenuItem onPress={()=>{this.hideCountry('Ghana')}}  > <Flag code="GH" size={32} /> Ghana </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('India')}} > <Flag code="IN" size={32} /> India </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('Israel')}} > <Flag code="IL" size={32} /> Israel </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('United States')}} > <Flag code="US" size={32} /> United States </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('Kenya')}} > <Flag code="KE" size={32} /> Kenya </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('Nigeria')}} > <Flag code="NG" size={32} /> Nigeria </MenuItem><MenuDivider />
                                            <MenuItem onPress={()=>{this.hideCountry('South Africa')}} > <Flag code="ZA" size={32} /> South Africa </MenuItem>
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
                                onPress={()=>{this.onPressNext()}}
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

    container:{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    textview: {
        paddingTop: 20,
        width: '70%', 
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    textbnt: {
        color: '#fff', 
        textAlign: 'center',
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
    decideview: {
        padding: 50,
        alignItems:'center',
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