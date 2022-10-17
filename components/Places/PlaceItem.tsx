import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { PlaceItemProps } from "../../types/ReactComponentsTypes"

export default function PlaceItem({ item, onSelect }: PlaceItemProps) {
  const { address, id, imageUri, location, title } = item
  return (
    <Pressable key={id} onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({})
