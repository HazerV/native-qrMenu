import React from "react";
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import Header from '../Oferta/Header.png'
import SunSvg from '../Oferta/Sun.svg'
import HomeSvg from  '../Oferta/Home.svg'
import SearchSvg from '../Oferta/Search.svg'
import { stylesOferta } from "./stylesOferta.js";


const style = StyleSheet.create ({
    container: {
        backgroundColor: "black",
        minHeight: 100,
        display: "flex",
        flex: 1,
        width: '100%',
        height: '100%'},
})

const Oferta = ( ) => {

    return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        minHeight: 100
    }}>
    <ScrollView style={{
        backgroundColor: "black",
        minHeight: 100
    }}>
        <View style={style.container}>
            <Image style={stylesOferta.header} source={Header}/>
            <Text style={{
                fontFamily: 'Gilroy-Regular',
                fontSize: 24,
                fontWeight: 600,
                marginBottom: 25,
                marginLeft: 16,
                color: 'white'
            }}>
                Оферта
            </Text>
                <Text style = {{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Gilroy-Regular',
                    fontWeight: 400,
                    marginBottom: 25,
                    marginLeft: 16 
                }}>
                    TEXXXT
                </Text>
                <View style={{
                          display: 'flex', 
                          flexDirection: 'row', 
                          columnGap: 8, 
                          justifyContent: 'flex-start'
                }}>
              <View>
                <TouchableOpacity style={{ }} onPress={() => { navigation.navigate('Profile')}}>
                  <HomeSvg/>
                </TouchableOpacity>
              </View>
              <View>
                <SearchSvg/>
              </View>
              <View>
                <TouchableOpacity onPress={() => { navigation.navigate('Profile')}}>
                  <SunSvg/>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
    
    )
}
export default Oferta