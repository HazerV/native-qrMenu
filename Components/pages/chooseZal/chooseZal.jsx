import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import Vid from '../chooseZal/Vid.png'
import ChinaTown from '../chooseZal/ChinaTown.png'
import Header from '../img/Header.png'

const ChooseZal = () => {

return (
    <View style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        minHeight: 100,
        backgroundColor: 'black'
    }}>
        <Image style={{
                alignSelf: 'center',
                justifyContent: 'center',  
                marginBottom: 16,
                marginTop: -40
        }} source={Header} />
        <Text style={{
            textAlign: 'left',
            color: 'white',
            fontSize: 24,
            fontFamily: "Gilroy-Regular",
            marginBottom: 25,
            marginLeft:16
        }}>
            Выберите зал
        </Text>
        <View style = {{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            marginLeft: 8,
        }}>
            <Image style={{
                marginBottom: 16
            }}  source = {Vid} />
            <Image source = {ChinaTown} />
        </View>
    </View>
    )
}

export default ChooseZal