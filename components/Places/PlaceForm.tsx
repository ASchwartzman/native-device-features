import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { PlaceFormProps } from "../../types/ReactComponentsTypes"
import { Colors } from "../../constants/colors"
import ImagePicker from "./ImagePicker"

export default function PlaceForm({}: PlaceFormProps) {
  const [enteredTitle, setEnteredTitle] = useState("")

  function changeTitleHandler(enteredText: string) {
    setEnteredTitle(enteredText)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
})
