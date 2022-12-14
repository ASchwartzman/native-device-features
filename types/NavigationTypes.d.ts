import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  AllPlaces: undefined
  AddPlace: undefined
}
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>
