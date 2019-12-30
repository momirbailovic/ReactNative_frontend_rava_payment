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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import * as Color from '@common/color'
import Device from '@common/device';
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class myProfile extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',
            email: 'Gao',
            amount: '',
            company: 'INDIVIDUAL', 
        }
    }
    _menu = null;
    _company = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    setCompanyRef = ref => {
        this._company = ref;
    };

    hideMenu = (text) => {
        this._menu.hide();
        this.setState({sex: text});
    };

    hideCompany(text) {
        this._company.hide();
        this.setState({company: text})
    }
    
    showMenu() {
        this._menu.show();
    };

    showCompany() {
        this._company.show();
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

            <ImageBackground source={require('@assets/images/profile/bg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                <View style={styles.container}>                            
                    <ImageBackground source={require('@assets/images/profile/image1x.png')} style={styles.panelIMG1} resizeMode="stretch">
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('@assets/images/profile/profile1x.png')} style={styles.profileImg}/>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <KeyboardAwareScrollView                
                                resetScrollToCoords={{ x: 0, y: 0 }}                
                                scrollEnabled={true}
                                viewIsInsideTabBar = {true}
                            >
                            <ScrollView style={{height: screenHeight * 0.55 - 7}}>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>

                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Name'}
                                            placeholderTextColor='#fff'
                                            onChangeText={(text) => this.setState({ amount: text })}
                                            value={this.setState.email}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/username1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <TouchableOpacity onPress={()=>{this.showMenu()}} >                                
                                    <View style={styles.inputtxt1}>
                                        <View style={styles.hideView}>
                                            <View style = {styles.listView}>
                                                <Menu
                                                    ref={this.setMenuRef}
                                                    button={<Text style = {styles.listtxt} onPress={()=>{this.showMenu()}}>{this.state.sex}</Text>}
                                                >
                                                    <MenuItem onPress={()=>{this.hideMenu('Male')}}  > Male </MenuItem>
                                                    <MenuItem onPress={()=>{this.hideMenu('Female')}} > Female </MenuItem>
                                                    {/* <MenuItem onPress={this.hideMenu} disabled> Menu item 3 </MenuItem>
                                                    <MenuDivider />
                                                    <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem> */}
                                                </Menu>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.emilbnt}
                                                onPress={()=>{this.showMenu()}}
                                            >
                                                <Image source={require('@assets/images/profile/drowpdown1x.png')} style={styles.mail1x}/>

                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.showView}>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Date Of Birth'}
                                            placeholderTextColor='#fff'
                                            onChangeText={(text) => this.setState({ amount: text })}
                                            value={this.setState.email}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/dob1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Mobile no'}
                                            placeholderTextColor='#fff'
                                            onChangeText={(text) => this.setState({ amount: text })}
                                            value={this.setState.email}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/mobileno1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Mail'}
                                            placeholderTextColor='#fff'
                                            onChangeText={(text) => this.setState({ amount: text })}
                                            value={this.setState.email}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/mail1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Password'}
                                            secureTextEntry={true}
                                            placeholderTextColor='#fff'
                                            onChangeText={(text) => this.setState({ amount: text })}
                                            value={this.setState.email}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/password1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            secureTextEntry={true}
                                            placeholder={'Confirm'}
                                            placeholderTextColor='#fff'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/password1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            secureTextEntry={true}
                                            placeholder={'Address'}
                                            placeholderTextColor='#fff'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/bullding1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <View style={styles.hideView}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            secureTextEntry={true}
                                            placeholder={'City'}
                                            placeholderTextColor='#fff'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/profile/bullding1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style = {styles.showView}>

                                    </View>
                                </View>
                                <TouchableOpacity onPress={()=>{this.showCompany()}} >                                
                                    <View style={styles.inputtxt1}>
                                        <View style={styles.hideView}>
                                            <View style = {styles.listView}>
                                                <Menu
                                                    ref={this.setCompanyRef}
                                                    button={<Text style = {styles.listtxt} onPress={()=>{this.showCompany()}}>{this.state.company}</Text>}
                                                >
                                                    <MenuItem onPress={()=>{this.hideCompany('INDIVIDUAL')}}  > INDIVIDUAL </MenuItem>
                                                    <MenuItem onPress={()=>{this.hideCompany('COMPANY')}} > COMPANY </MenuItem>
                                                    {/* <MenuItem onPress={this.hideMenu} disabled> Menu item 3 </MenuItem>
                                                    <MenuDivider />
                                                    <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem> */}
                                                </Menu>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.emilbnt}
                                                onPress={()=>{this.showCompany()}}
                                            >
                                                <Image source={require('@assets/images/profile/drowpdown1x.png')} style={styles.mail1x}/>

                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.showView}>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>{this.showCompany()}} >                                
                                    <View style={styles.inputtxt1}>
                                        <View style={styles.hideView}>
                                            <View style = {styles.listView}>
                                                <Menu
                                                    ref={this.setCompanyRef}
                                                    button={<Text style = {styles.listtxt} onPress={()=>{this.showCompany()}}>{this.state.company}</Text>}
                                                >
                                                    <MenuItem onPress={()=>{this.hideCompany('INDIVIDUAL')}}  > INDIVIDUAL </MenuItem>
                                                    <MenuItem onPress={()=>{this.hideCompany('COMPANY')}} > COMPANY </MenuItem>
                                                    {/* <MenuItem onPress={this.hideMenu} disabled> Menu item 3 </MenuItem>
                                                    <MenuDivider />
                                                    <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem> */}
                                                </Menu>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.emilbnt}
                                                onPress={()=>{this.showCompany()}}
                                            >
                                                <Image source={require('@assets/images/profile/drowpdown1x.png')} style={styles.mail1x}/>

                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.showView}>

                                        </View>
                                    </View>
                                </TouchableOpacity>                   
                            </ScrollView>
                            </KeyboardAwareScrollView> 
                        </View>
                        <View style={styles.goview}>
                            <TouchableOpacity
                                onPress={()=>{this.onLogin()}}
                            >
                                <Image source={require('@assets/images/profile/nextbutton1x.png')} style={styles.gobtn}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
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
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },
    panelIMG1: {
        marginTop: 0,
        height: screenHeight * 0.75,
        width: screenWidth * 0.9,
        resizeMode:'stretch', 
         
    },
    profileImg: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        alignItems: 'center',
        paddingTop: screenHeight * 0.08,
    },

    inputtxt2: {
        margin: screenWidth * 0.1,
        marginTop: 25,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor: '#0c6376',
        borderBottomWidth: 1,  
    },
    dropDownContianer: {
        marginBottom: 10, 
        padding: 3, 
        width: '90%', 
        height: 20, 
    },
    dropDownpicker: {
        marginBottom: 5, 
        padding: 3, 
        width: '100%', 
        height: 100, 
    },
    LoRebtn: {
        margin: screenWidth * 0.1,
        marginTop: 30,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    bnttxt: {
        color: '#fff', 
        fontSize: 20,
    },
    inputtxt1: {
        margin: screenWidth * 0.1,
        marginTop: 20,
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
        width:'80%',
        fontSize: 18,
        color: '#fff',
        
    },
    listView: {
        width:'80%',
        flex: 1, 
        alignItems: 'flex-start',       
    },
    listtxt: {
        width:'120%',
        fontSize: 18,
        color: '#fff',    
    },
    emilbnt: {
        paddingTop: 3,
        width:'10%',
        marginRight: 0,
    },    
    mail1x: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        alignItems: 'center',
        padding: 10,
    }, 
    goview: {
        marginHorizontal: screenWidth * 0.1,
        marginVertical: screenHeight * 0.05,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    gobtn: {
        height: screenWidth / 8,
        width: screenWidth / 8,
        resizeMode: 'contain'
    },
})