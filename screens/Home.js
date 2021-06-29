import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Flashcard1 } from "../components/Flashcards";
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  headers: {
    "x-rapidapi-key": "b1ec1931a7msh0a647224d9daa39p194b65jsnf72505feddaf",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default function Home() {
  console.log(options);
  const [loaded] = useFonts({
    PoppinsBlack: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flashcardContainer}>
        <Flashcard1></Flashcard1>
        <Flashcard1></Flashcard1>
        <Flashcard1></Flashcard1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  standardContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E2E2E",
    padding: 30,
  },
  flashcardContainer: {
    minWidth: '100%',
    padding: 40,
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textStandard: {
    fontFamily: "PoppinsBlack",
    fontSize: 20,
    color: "#FF5454",
  },
});
