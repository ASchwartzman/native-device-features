import React from "react"
import { StyleSheet } from "react-native"
import PlacesList from "../components/Places/PlacesList"
import { RootStackScreenProps } from "../types/NavigationTypes"

export default function AllPlaces({}: RootStackScreenProps<"AllPlaces">) {
  return <PlacesList places={[]} />
}

const styles = StyleSheet.create({})
