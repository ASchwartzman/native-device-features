import React from "react"
import { StyleSheet } from "react-native"
import PlaceForm from "../components/Places/PlaceForm"
import { RootStackScreenProps } from "../types/NavigationTypes"

export default function AddPlace({}: RootStackScreenProps<"AddPlace">) {
  return <PlaceForm />
}

const styles = StyleSheet.create({})
