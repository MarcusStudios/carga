import React from "react";
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Button, } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from "@react-navigation/native";



import * as Animatable from "react-native-animatable";

export default function Home(){
  const navigation = useNavigation();
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

const style = StyleSheet.create({
  
})