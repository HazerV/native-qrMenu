import React from "react";
import { View, Button, Text } from "react-native";


const Profile = ({navigation}) => {
    return (
        <View>
            <Text> Profile </Text>
            <Button
                title="To home" 
                onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>   
    );
};

export default Profile;