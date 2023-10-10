import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Sun from '../img/icons/Sun.svg'
import Home from '../img/icons/Home.svg'
import Search from '../img/icons/Search.svg'


export default class Buttons extends Component {
 render() {
    return (
        <View style={[styles.container, this.props.style]}>
             <TouchableWithoutFeedback>
                <Animated.View>
                    <AntDesign name='plus' size={24}/>
                </Animated.View>
             </TouchableWithoutFeedback>
         </View>
        )
     }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center'
    }
})