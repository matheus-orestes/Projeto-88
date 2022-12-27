import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {theme} from "firebase";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Posts</Text>
      </View>
    );
  }
}

fletchUser = () => {
  let theme;
  firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value", (snapshot) => {
      theme = snapshot.val().current_theme
      this.setState({ light_theme: theme === "light" })
    })
}

if (theme === "light_theme") {
  theme = "light_theme";
}else{
  theme = "dark_theme"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  },
  postCardLight: {
   margin: RFValue(20),
   backgroundColor: "#eaeaea",
   borderRadius: RFValue(20)
  },
  authorNameText: {
    color: "white",
    fontSize: RFValue(20)
  },
  authorNameTextLight: {
    color: "black",
    fontSize: RFValue(20)
  }
});
