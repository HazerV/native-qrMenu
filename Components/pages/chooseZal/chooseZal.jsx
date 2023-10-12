import React from "react";
import { View, Text, Image, StatusBar, ScrollView, StyleSheet } from "react-native";
import Vid from '../chooseZal/Vid.png'
import ChinaTown from '../chooseZal/ChinaTown.png'
import Header from '../img/Header.png'
import { stylesOferta } from "../Oferta/stylesOferta";
import HomeSvg from '../img/icons/Home.svg'
import SunSvg from '../img/icons/Sun.svg'
import SearchSvg from '../img/icons/Search.svg'
import { SafeAreaView } from "react-native-safe-area-context";

const ChooseZal = () => {

return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor='black' animated={true} />
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
                    alignSelf: 'center'
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
                <View style = {stylesOferta.footer}>
                    <SearchSvg />
                    <HomeSvg />
                    <SunSvg />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      minHeight: 100
    },
    scrollView: {
      backgroundColor: "black",
      minHeight: 100,
    }
  })

export default ChooseZal