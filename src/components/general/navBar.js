import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Color from '@common/color'
import * as Const from '@common/const'
import Device from '@common/device'

export default class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    onLeft() {
        //onPress={()=>{this.onLeft()}} 
    }

    onRight() {

    }

    render() {
        let {title, description, scenes}  = this.props
        return (
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    {description&&description!='' && <Text style={styles.description}>{description}</Text>}
                </View>
                <TouchableOpacity onPress={()=>Actions.Drawer()} style={styles.left}>
                    <Ionicons name="ios-menu" size={30} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.onRight()}} style={styles.right}>
                    <Image 
                        source={require('@assets/images/navBar/notification1x.png')}  
                        style={{width: 30, height: 30}} 
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    headerContainer:{
        width:'100%', 
        height: Const.navBarHeight + Device.ToolbarHeight, 
        paddingTop: Device.ToolbarHeight,
        flexDirection:'row', 
        alignItems:'center', 
        backgroundColor:Color.titleBar,
        paddingHorizontal: 20
    },
    
    title:{
        marginTop: Device.ToolbarHeight - 15,
        fontSize:23,
        fontWeight:'bold',
        color:'white',
    },

    description:{
        marginTop:5,
        fontSize:12,
        color:'white',
    },

    titleContainer:{
        flex:1,
        alignItems:'center',
        marginHorizontal:40
    },

    left:{
        paddingVertical:Device.ToolbarHeight - 20,
        paddingHorizontal:20,
        position:'absolute',
        bottom:0,
    },
    right:{
        position: 'absolute',
        paddingVertical:Device.ToolbarHeight - 25,
        paddingHorizontal:20,
        bottom:8,
        right:0
    },
})