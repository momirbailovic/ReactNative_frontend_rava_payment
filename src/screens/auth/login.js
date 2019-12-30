import React, { PureComponent } from 'react'
import {
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { DatePicker} from "native-base";
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialIcons } from '@expo/vector-icons';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';
import Flag from 'react-native-flags';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Device from '@common/device';

import * as authAction from '@store/auth';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class LoginC extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            authType: 'email',
            viewFlag: true, 
            email :'',
            validated: false , 
            sex: 'Male',
            person: 'INDIVIDUAL',
            birthDate: new Date(), 
            country: 'Select Country',
            company: 'INDIVIDUAL',              
            dateText: 'Date of Birth',        
            dateHolder: null,
            sex: 'Male',        
        }
    }

    _country = null;
    _company = null;
    _menu = null;

    setCountryRef = ref => {
        this._country = ref;
    };
    setCompanyRef = ref => {
        this._company = ref;
    };
    setMenuRef = ref => {
        this._menu = ref;
    };

    hideCountry(text) {
        this._country.hide();
        this.setState({country: text});
    };
    hideCompany(text) {
        this._company.hide();
        this.setState({company: text})
    };
    hideMenu = (text) => {
        this._menu.hide();
        this.setState({sex: text});
    };
    showCountry() {
        this._country.show();
    };
    showCompany() {
        this._company.show();
    };
    showMenu() {
        this._menu.show();
    };

    
    DatePickerMainFunctionCall = () => {

        let DateHolder = this.state.DateHolder;
    
        if(!DateHolder || DateHolder == null){
    
          DateHolder = new Date();
          this.setState({
            DateHolder: DateHolder
          });
        }
    
        //To open the dialog
        this.refs.DatePickerDialog.open({
    
          date: DateHolder,
    
        });
    
    }
    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            dateText: moment(date).format('DD-MMM-YYYY')
        });
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({email:text})
            return false;
        }
        else {
          this.setState({email:text})
          this.setState({validated: true})
          console.log("Email is Correct");
        }
    }

    go = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            alert( "ok email");
        }
        else{
            alert("no email");
        }
    }

    onViewFlag(value) {
        this.setState({viewFlag: value})
    }

    onLogin() {
        //this.go();
        Actions.TabBar()
    }

    render() {
        let dataSex = [
            {
                value: 'Male',
            }, 
            {
                value: 'Female',
            }
        ];


        return (
            <KeyboardAwareScrollView                
                resetScrollToCoords={{ x: 0, y: 0 }}                
                scrollEnabled={true}
                viewIsInsideTabBar = {true}
            >
                <ImageBackground source={require('@assets/images/login/bg1x.png')} style={styles.backgroundIMG} resizeMode="stretch">
                    <View  style={styles.container}>
                        <View>
                            <Image source={require('@assets/images/login/logo1x.png')} style={styles.logo}/>
                        </View>
                        <View style={{backgroundColor: 'transparent', padding: 0}}>
                            {this.state.viewFlag && 
                            (<ImageBackground source={require('@assets/images/login/centerimage1x.png')} style={styles.panelIMG1} resizeMode="stretch">
                                <View style={styles.LoRebtn}>
                                    <TouchableOpacity
                                        onPress={()=>{this.onViewFlag(true)}}
                                    >
                                        <Text style={styles.bnttxt}> Login </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={()=>{this.onViewFlag(false)}}
                                    >
                                        <Text style={styles.bnttxt}> Register </Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.inputtxt1}>
                                    <TextInput
                                        style = {styles.emilinptxt}
                                        placeholder={'Email ID'}
                                        placeholderTextColor='#0c6376'
                                        onChangeText={(text) => this.validate(text)}
                                        value={this.setState.email}
                                    />
                                    <TouchableOpacity
                                        style={styles.emilbnt}
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Image source={require('@assets/images/login/mail1x.png')} style={styles.mail1x}/>

                                    </TouchableOpacity>
                                </View>
                                <View style={styles.inputtxt1}>
                                    <TextInput
                                        style = {styles.emilinptxt}
                                        secureTextEntry={true}
                                        placeholder={'Password'}
                                        placeholderTextColor='#0c6376'
                                    />
                                    <TouchableOpacity
                                        style={styles.emilbnt}
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Image source={require('@assets/images/login/password1x.png')} style={styles.mail1x}/>

                                    </TouchableOpacity>
                                </View>
                                <View style={styles.forgetbtn}>
                                    <TouchableOpacity
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Text style={styles.bnttxt}> Forget Password? </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.goview}>
                                    <TouchableOpacity
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Image source={require('@assets/images/login/button1x.png')} style={styles.gobtn}/>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            )}
                            {!this.state.viewFlag && (
                            <ImageBackground source={require('@assets/images/login/centerimage1x.png')} style={styles.panelIMG2} resizeMode="stretch">
                               
                                <View style={styles.LoRebtn}>
                                    <TouchableOpacity
                                        onPress={()=>{this.onViewFlag(true)}}
                                    >
                                        <Text style={styles.bnttxt}> Login </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={()=>{this.onViewFlag(false)}}
                                    >
                                        <Text style={styles.bnttxt}> Register </Text>
                                    </TouchableOpacity>
                                </View>

                                <ScrollView >
                                    <View style={styles.inputtxt1}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Name'}
                                            placeholderTextColor='#0c6376'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/username1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
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
                                            <Image source={require('@assets/images/register/dropdown1x.png')} style={styles.mail1x}/>
                                        </TouchableOpacity>                                       
                                    </View>
                                    <View style={styles.inputdate}>
                                        <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
                                            <View >
                                                <Text style={styles.datePickerText}>{this.state.dateText}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={this.DatePickerMainFunctionCall.bind(this)}
                                        >
                                            <Image source={require('@assets/images/register/calender1x.png')} style={styles.mail1x}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            keyboardType='number-pad'
                                            placeholder={'Mobile no'}
                                            placeholderTextColor='#0c6376'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <MaterialIcons name="phone-iphone" size={24} color={'#0c6376'} />

                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Mail'}
                                            placeholderTextColor='#0c6376'
                                            onChangeText={(text) => this.validate(text)}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/mail1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>                            
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Password'}
                                            secureTextEntry={true}
                                            placeholderTextColor='#0c6376'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/lock1x.png')} style={styles.mail1x}/>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Confirm Password'}
                                            secureTextEntry={true}
                                            placeholderTextColor='#0c6376'
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/lock1x.png')} style={styles.mail1x}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Address'}
                                            placeholderTextColor='#0c6376'
                                            onChangeText={(text) => this.validate(text)}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/bank1x.png')} style={styles.mail1x}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputtxt2}>
                                        <TextInput
                                            style = {styles.emilinptxt}
                                            placeholder={'Address2'}
                                            placeholderTextColor='#0c6376'
                                            onChangeText={(text) => this.validate(text)}
                                        />
                                        <TouchableOpacity
                                            style={styles.emilbnt}
                                            onPress={()=>{this.onLogin()}}
                                        >
                                            <Image source={require('@assets/images/register/bank1x.png')} style={styles.mail1x}/>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={()=>{this.showCompany()}} >                                
                                        <View style={styles.inputtxt2}>
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
                                                <Image source={require('@assets/images/register/downarow1x.png')} style={styles.mail1x}/>

                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
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
                                </ScrollView>
                                <View style={styles.goview2}>
                                    <TouchableOpacity
                                        onPress={()=>{this.onLogin()}}
                                    >
                                        <Image source={require('@assets/images/register/backbutton1x.png')} style={styles.gobtn}/>
                                    </TouchableOpacity>
                                </View>
                                
                            </ImageBackground>
                            )}
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAwareScrollView>           
        )
    }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...authAction }, dispatch)
});

export default Login = connect(mapStateToProps, mapDispatchToProps)(LoginC);

const styles = StyleSheet.create({

    backgroundIMG: {
        height: screenHeight / 3,
        width: screenWidth,
        marginTop: Device.ToolbarHeight + 10,       
    },
    container1: {
        flex: 1,
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
     
      datePickerBox:{
        //marginTop: 9,
        borderColor: '#FF5722',
        borderWidth: 0.5,
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 38,
        justifyContent:'center'
      },
     
      datePickerText: {
        fontSize: 18,
        borderWidth: 0,
        color: '#0c6376',
     
      },
    container: {
        marginTop: Device.ToolbarHeight + 10,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: screenHeight/8,
        height: screenHeight/8,
        resizeMode: 'contain'
    },
    panelIMG1: {
        marginTop: 0,
        height: 360,
        width: screenWidth * 0.9,
        resizeMode:'stretch', 
         
    },
    panelIMG2: {
        marginTop: 0,
        height: 500,
        width: screenWidth * 0.9,
        resizeMode:'stretch', 
         
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
        color: '#0c6376', 
        fontSize: 20,
    },    
    inputdate: {
        margin: screenWidth * 0.1,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor: '#0c6376',
        borderBottomWidth: 1,  
    },
    inputtxt1: {
        margin: screenWidth * 0.1,
        marginTop: 50,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor: '#0c6376',
        borderBottomWidth: 2,  
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
    datepicka: {
        margin: screenWidth*0.1, 
        marginTop: 12,
        marginBottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor: '#0c6376',
        borderBottomWidth: 1,  
    },
    emilinptxt: {
        width:'90%',
        fontSize: 18,
        color: '#0c6376',
        
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
    forgetbtn: {
        margin: screenWidth * 0.1,
        marginTop: 30,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    goview: {
        margin: screenWidth * 0.1,
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    goview2: {
        margin: screenWidth * 0.1,
        marginTop: 20,
        marginBottom: 25,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    gobtn: {
        height: screenWidth / 8,
        width: screenWidth / 8,
        resizeMode: 'contain'
    },
    
    
    listView: {
        width:'80%',
        flex: 1, 
        alignItems: 'flex-start',       
    },
    listtxt: {
        width:'120%',
        fontSize: 18,
        color: '#0c6376',    
    },
    emilbnt: {
        paddingTop: 3,
        width:'10%',
        marginRight: 0,
    },
})