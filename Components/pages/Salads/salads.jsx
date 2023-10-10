import React from "react";
import {View, Image, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import VeganSvg from '../img/salatIc/Vegan.svg'
import MoreprodiSvg from '../img/salatIc/Moreprodi.svg'
import GSalatSvg from '../img/salatIc/GSalat.svg'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
    },
    scrollView: {
      backgroundColor: "black"
    }
  })

const SalatScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{
                        marginBottom: 'auto',
                        justifyContent: 'flex-start'
                    }}>
                        Салаты
                    </Text>,

                    <View>
                        <GSalatSvg/>
                    </View>
                    
                    <View>
                        <MoreprodiSvg/>
                    </View>

                    <View>
                        <VeganSvg/>
                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

export default SalatScreen