import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constant/Colors";
function Questions(props) {
  return (
    <View style={styles.quizBox}>
      <Text style={styles.text}>{props.question}</Text>
    </View>
  );
}
export default Questions;

const styles = StyleSheet.create({
  quizBox: {
    borderRadius: 10,
    backgroundColor: Colors.purple,
    margin: 5,

    width: "95%",
    padding: 5,
    elevation: 5,
    paddingVertical: 15,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
