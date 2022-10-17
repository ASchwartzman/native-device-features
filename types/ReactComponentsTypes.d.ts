import { Place } from "../models/Place"
import { GestureResponderEvent } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Ionicons } from "@expo/vector-icons"

export type MapScreenProps = {}
export type PlaceDetailsScreenProps = {}
export type PlaceListProps = {
  places: Place[]
}
export type PlaceItemProps = {
  item: Place
  onSelect: (event: GestureResponderEvent) => void
}
export type PlaceFormProps = {}

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap
  size: number
  color: string | undefined
  onPress: (event: GestureResponderEvent) => void
}

export type OutlineButtonProps = {
  icon: keyof typeof Ionicons.glyphMap
  children: React.ReactNode
  onPress: (event: GestureResponderEvent) => void
}
