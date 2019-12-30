import React, { PureComponent, Component } from "react";

import { KeyboardAvoidingView, NetInfo, StyleSheet, StatusBar, Image, View, Text } from "react-native";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';

import Login from '@screens/auth/login'

import { Asset, AppLoading, DangerZone } from 'expo';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { connect } from "react-redux";
import * as commonActions from '@store/common/actions'
import * as authActions from '@store/auth/actions'
import { bindActionCreators } from "redux";
import Global from '@utils/global'
import Color from "@common/color";

import api from "@services"
import async from 'async'

import TabBarIcon from '@components/general/tabBarIcon'
import NavBar from '@components/general/navBar'
import MyToast from '@components/general/myToast'

// General
import General from '@screens/general/general'
import Loading from '@screens/general/loading'
import ImageList from '@screens/general/imageList'

//Screens
import Home from '@screens/home'
import AddMoney from '@screens/home/addMoney'
import Withdraw from '@screens/home/withdraw'
import SendMoney from '@screens/home/sendMoney'
import SendMoneySecond from '@screens/home/sendMoneySecond'
import Transactions from '@screens/home/transactions'

import AirTime from '@screens/airTime'
import PreTopupNo from '@screens/airTime/preTopupNo'
import PreTopupNext from '@screens/airTime/preTopupNext'

import Bills from '@screens/bills'
import BillsBnt from '@screens/bills/billsBnt'
import Account from '@screens/bills/account'
import OperatorsEnd from '@screens/bills/operatorsEnd'

import Setting from '@screens/setting'
import Bank from '@screens/setting/bank'
import AddBank from '@screens/setting/addBank'
import ManageBank from '@screens/setting/manageBank'
import ForgotPassword from '@screens/setting/forgotPassword'
import ChangePassword from '@screens/setting/changePassword'
import MyProfile from '@screens/setting/myProfile'



class NavigationDrawer extends Component {
    constructor(props) {
        super(props);
    };
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                    main: { opacity:Math.max(0.54,1-ratio) }
                })}>
                {this.props.children[0]}
                {/*<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />*/}
            </Drawer>
        );
    }
}

class SideMenu extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={styles.sideMenu}>
                <Text>menu items go here1</Text>
                <Text>menu items go here2</Text>
                <Text>menu items go here3</Text>
                <Text>menu items go here4</Text>
                <Text>menu items go here5</Text>
                <Text>menu items go here6</Text>
            </View>
        );
    }
}

class TabIcon extends Component {
    render(){
        let image
        switch (this.props.name) {
            case 'Home':
                image = this.props.focused ? require('@assets/images/dashboard/home1xS.png') : require('@assets/images/dashboard/home1x.png');
                break;

            case 'AirTime':
                image = this.props.focused ? require('@assets/images/dashboard/AIRTIME1XS.png') : require('@assets/images/dashboard/AIRTIME1X.png');
                break;
            case 'Bills':
                image = this.props.focused ? require('@assets/images/dashboard/bills1x.png') : require('@assets/images/dashboard/bills1x.png');
                break;
            case 'Setting':
                image = this.props.focused ? require('@assets/images/dashboard/setting1xS.png') : require('@assets/images/dashboard/setting1x.png');
                break;
        }
        return ( <Image source={image} style={styles.tabIMG}/> );
    }
}

const transitionConfig = () => ({
    screenInterpolator:
        StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

class Root extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            setting: {}
        };

        this._cacheResourcesAsync.bind(this)
        console.disableYellowBox = true;
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            hasInternetConnection => {
                this.props.commonActions.setInternetConnection(hasInternetConnection)
                if (!hasInternetConnection) {
                    Actions.Offline()
                }
            }
        );

    }
    componentWillReceiveProps(next) {
        // if ( next.types==actionTypes.LOGOUT ){
        //     this.refs.toast.show('You have been logged out!');
        // }
    }
    _cacheResourcesAsync = async () => {
        const images = [
            require('@images/background.png'),
            require('@images/offline.jpeg'),
            require('@images/maintenance.png'),
            require('@images/transfer-loading.png'),
            require('@images/hotel-loading.png'),
            require('@images/activity-loading.png'),
            require('@images/car-loading.png'),
            require('@images/flight-loading.png'),
            require('@images/logo.png'),
            require('@images/home_back.png'),
            require('@images/map-pin.png'),
            require('@images/placeholder.jpg'),
            require('@images/tabIcons/home_grey.png'),
            require('@images/tabIcons/home_primary.png'),
            require('@images/tabIcons/package_grey.png'),
            require('@images/tabIcons/package_primary.png'),
            require('@images/tabIcons/hotdeal_grey.png'),
            require('@images/tabIcons/hotdeal_primary.png'),
            require('@images/tabIcons/mycart_grey.png'),
            require('@images/tabIcons/mycart_primary.png'),
            require('@images/tabIcons/profile_grey.png'),
            require('@images/tabIcons/profile_primary.png'),
            require('@images/icons/sortIcon.png'),
            require('@images/icons/filterIcon.png'),
            require('@images/icons/mapIcon.png'),
            require('@images/placeholder.jpg'),
            require('@images/location.png'),
            require('@images/hotel1.png'),
            require('@images/icons/message_black.png'),
            require('@images/icons/message_white.png'),
            require('@images/icons/message_green.png'),
            require('@images/icons/mobile_black.png'),
            require('@images/icons/mobile_white.png'),
            require('@images/icons/mobile_green.png'),
            require('@images/icons/locked.png'),
            require('@images/icons/ios7-close-empty.png'),
        ];

        const promises = images.map((image) => {
            return Asset.fromModule(image).downloadAsync();
        });

        promises.push(new Promise((resolve, reject) => {
            api.auth.init((err) => {
                if (err) {
                    return reject(err)
                }
                async.parallel([
                    (cb) => {
                        api.auth.getApplicationEnvironment((err, ret) => {
                            if (err) {
                                return cb(err)
                            }
                            this.setState({
                                setting: ret
                            })
                            cb(err)
                        })
                    },
                    (cb) => {
                        api.user.getUserDetail((err, user) => {
                            if (!err) {
                                this.props.authActions.setAuthUser(user)
                            }
                            cb(null)
                        })
                    }
                ], (err) => {
                    if (err) {
                        return reject()
                    }
                    resolve()
                })
            })
        }))

        return Promise.all(promises)

    }

    render() {
        let { isReady, setting } = this.state

        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        //temporary setting until this flag sets
        setting.isLoginRequired = true

        const scenes = Actions.create(
            <Overlay key="overlay">
                <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
                    <Lightbox key="lightbox">
                        <Stack key="root" hideNavBar>
                                <Scene key="Login" component={Login} initial />
                                <Tabs
                                    key="TabBar" 
                                    backToInitial
                                    onTabOnPress={() => {
                                    }}
                                    swipeEnabled
                                    tabBarStyle={styles.tabBarStyle}
                                    activeBackgroundColor="white"
                                    inactiveTintColor={Color.lightText}
                                    activeTintColor={Color.primary}
                                    inactiveBackgroundColor="white" >
                                    
                                    
                                    <Scene key="Home" tabBarLabel="Home" initial
                                        icon={TabIcon}
                                        name="Home"
                                        navBar={NavBar} >
                                        <Scene key="Home" component={Home} title={'Chromepay'} initial ></Scene>
                                        <Scene key="AddMoney" component={AddMoney} title={'Chromepay'}  ></Scene>
                                        <Scene key="Withdraw" component={Withdraw} title={'Chromepay'}  ></Scene>
                                        <Scene key="SendMoney" component={SendMoney} title={'Chromepay'}  ></Scene>
                                        <Scene key="SendMoneySecond" component={SendMoneySecond} title={'Chromepay'}  ></Scene>
                                        <Scene key="Transactions" component={Transactions} title={'Chromepay'}  ></Scene>
                                    </Scene>
                                    <Scene key="AirTime" tabBarLabel="Air Time" 
                                        icon={TabIcon}
                                        name="AirTime"
                                        navBar={NavBar} >
                                        <Scene key="AirTime" component={AirTime} title={'Chromepay'} initial ></Scene>
                                        <Scene key="PreTopupNo" component={PreTopupNo} title={'Chromepay'}  ></Scene>
                                        <Scene key="PreTopupNext" component={PreTopupNext} title={'Chromepay'}  ></Scene>

                                    </Scene>
                                    <Scene key="Bills" tabBarLabel="Bills" 
                                        icon={TabIcon}
                                        name="Bills"
                                        navBar={NavBar} >
                                        <Scene key="Bills" component={Bills} title={'Chromepay'} initial ></Scene>
                                        <Scene key="BillsBnt" component={BillsBnt} title={'Chromepay'}  ></Scene>
                                        <Scene key="Account" component={Account} title={'Chromepay'}  ></Scene>
                                        <Scene key="OperatorsEnd" component={OperatorsEnd} title={'Chromepay'}  ></Scene>
                                    </Scene>

                                    <Scene key="Setting" tabBarLabel="Setting" 
                                       icon={TabIcon}
                                       name="Setting"
                                       navBar={NavBar} >
                                        <Scene key="Setting" component={Setting} title={'Chromepay'} initial ></Scene>
                                        <Scene key="Bank" component={Bank} title={'Chromepay'}  ></Scene>
                                        <Scene key="AddBank" component={AddBank} title={'Chromepay'}  ></Scene>
                                        <Scene key="ManageBank" component={ManageBank} title={'Chromepay'}  ></Scene>
                                        <Scene key="ForgotPassword" component={ForgotPassword} title={'Chromepay'}  ></Scene>
                                        <Scene key="ChangePassword" component={ChangePassword} title={'Chromepay'}  ></Scene>
                                        <Scene key="MyProfile" component={MyProfile} title={'Chromepay'}  ></Scene>
                                    </Scene>

                                </Tabs>
                                <Drawer
                                    hideNavBar
                                    key="Drawer"
                                    contentComponent={SideMenu}
                                    drawerWidth={250}
                                    drawerPosition="left"
                                >
                                    <Scene
                                        key="Home"
                                        component={Setting}
                                        name="Home"

                                    />
                                    <Scene
                                        key="AirTime"
                                        component={ManageBank}
                                        name="Air Time"
                                    />
                                    <Scene
                                        key="Bills"
                                        component={ManageBank}
                                        name="Bills"
                                    />
                                </Drawer>
                                {/* <Drawer key="Drawer" component={NavigationDrawer} >
                                    <Scene key="Main">
                                        <Scene key="Home" component={Home} initial />
                                        <Scene key="Login" component={Home} />
                                        <Scene key="AddMoney" component={Home} />
                                    </Scene>
                                </Drawer> */}
                                {/* <Scene key="Offline" component={() => <General screenType='offline' />} hideNavBar />
                                <Scene key="Maintenance" component={() => <General screenType='maintenance' />} hideNavBar /> */}
                        </Stack>
                    </Lightbox>
                    <Scene key="ImageList" component={ImageList} hideNavBar />
                    <Scene key="Loading" component={Loading} hideNavBar />
                </Modal>
            </Overlay>
        );


        return (
            <KeyboardAvoidingView
                behavior={'padding'}
                style={{ flex: 1 }}>
                <Router hideNavBar scenes={scenes} onStateChange={(props) => { }} />
                <MyToast />
            </KeyboardAvoidingView>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn,
    }),
    dispatch => ({
        commonActions: bindActionCreators(commonActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
    })
)(Root);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
    tabIMG: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    sideMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },

});