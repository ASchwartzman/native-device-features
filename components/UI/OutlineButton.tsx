import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { OutlineButtonProps } from "../../types/ReactComponentsTypes"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../constants/colors"

export default function OutlineButton({
  onPress,
  icon,
  children,
}: OutlineButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons
        name={icon}
        size={18}
        color={Colors.primary500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
})
