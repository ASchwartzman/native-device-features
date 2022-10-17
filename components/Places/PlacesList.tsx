import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/colors"
import { PlaceListProps } from "../../types/ReactComponentsTypes"
import PlaceItem from "./PlaceItem"

export default function PlacesList({ places }: PlaceListProps) {
  function handleSelect() {}

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem item={item} onSelect={handleSelect} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
})
