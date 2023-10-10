import React from 'react';
import {View, Image, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import TrueShopSvg from '../img/TrueShop.svg'
import SunSvg from '../img/icons/Sun.svg'
import HomeSvg from  '../img/icons/Home.svg'
import { homeStyles } from './homeStyle';
import Tsunami from '../img/Tsunami.svg'
import SearchSvg from '../img/icons/Search.svg'
import BgSvg from '../img/Bg.svg'
import { Path } from 'react-native-svg';
import Buttons from './Buttons';


const folders = [
  {
    id: 1,
    name: 'vova',
  },
  {
    id: 2,
    name: 'Artyom'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    minHeight: 100
  },
  scrollView: {
    backgroundColor: "black",
    minHeight: 100
  }
})

const HomeScreen = ({navigation}) => {
  
  return (
  
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <StatusBar backgroundColor='black' animated={true} />
        <View style={homeStyles.container}>
          <View style={{ }}>
              <View style={homeStyles.head}>  
                <Tsunami/>
              </View>  
              <Text> Menu </Text>
                <Text style={ homeStyles.attention }>
                  Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, 
                  пожалуйста, предупредите об этом Вашего официанта. 
                  Меню является рекламной продукцией нашего ресторана. 
                  Утвержденное контрольное меню с выходам
                  и блюд и сведениями о пищевой ценности готовой продукции: 
                  калорийности, содержании белков, 
                  жиров, углеводов находится в уголке потребителя 
                  и предоставляется по первому Вашему требованию.
                
              </Text>
              <TouchableOpacity style={{
                justifyContent: 'center',
                alignSelf: 'center',
              }} onPress={() => { navigation.navigate('Confidience') }}>
                <Text style={{ color: '#BBBBBB', textDecorationLine: 'underline', height: 22, marginBottom: 12 }}>
                  Политика конфиденциальности
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                justifyContent: 'center',
                alignSelf: 'center'
              }} onPress={() => { navigation.navigate('Oferta')}}>
                <Text style={{ color: '#BBBBBB', textDecorationLine: 'underline', height: 22 }}>
                    Оферта 
                </Text>
              </TouchableOpacity>
              <View style={{
                justifyContent: 'center',
                alignSelf: 'center',
                position: 'absolute',
                height: 750
              }}>
                <TrueShopSvg/>
              </View>
            </View>

            <View style={[homeStyles.icons, ]}>
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
    );

  };


export default HomeScreen;