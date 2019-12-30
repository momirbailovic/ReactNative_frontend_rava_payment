import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class manageBank extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            sex: 'Male',

        }

    }

    onPressBILLS(){
        Actions.BillsBnt();
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
                <View>
                    <Text style={styles.addtxt}> SERVICES </Text>
                </View>
                <ImageBackground source={require('@assets/images/setting/smallbgimage1x.png')} style={styles.panelIMG1} resizeMode="stretch">
                    <View style={styles.container}>                            
                        <View style={styles.decideview}>
                                <Text style={styles.txtbnt}> *********202 </Text>
                                <Text style={styles.txtbnt}> Account Number </Text>
                        </View>
                        <View style={styles.decideview}>
                                <Text style={styles.txtbnt}> *********201 </Text>
                                <Text style={styles.txtbnt}> Account Number </Text>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    backgroundIMG: {
        height: screenHeight,
        width: screenWidth, 
        alignItems: 'center',      
    },
    panelIMG1: {
        paddingHorizontal: screenWidth * 0.05,
        height: screenHeight * 0.6,
        width: screenWidth * 0.9,
        resizeMode:'contain', 
         
    },
    addtxt: {
        padding: screenHeight / 15,
        fontSize: 23,
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
        margin: 10,
        padding: 10,
        width:'100%',
        height:60,
        borderRadius:10,
        alignItems: 'flex-start',
        backgroundColor:'#fff', 
    },
    txtbnt: {
        color: '#2d7794', 
        width: '100%', 
        textAlign: 'left',
        fontSize: 15,
    },
})