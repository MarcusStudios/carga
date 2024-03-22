import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    textAlign: "center",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
});
