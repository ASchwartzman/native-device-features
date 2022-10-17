import React, { useState } from "react"
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImageInfo,
} from "expo-image-picker"
import { Colors } from "../../constants/colors"
import OutlineButton from "../UI/OutlineButton"

export default function ImagePicker() {
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions()
  const [pickedImageUri, setPickedImageUri] = useState("")

  async function verifyPermissions() {
    if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }

    if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
      //   Alert.alert(
      //     "Insufficient permissions!!",
      //     "You need to grant permissions to this app in order to use it"
      //   )
      //   return false
    }

    return true
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 16],
      quality: 0.5,
    })
    const { uri } = image as ImageInfo
    setPickedImageUri(uri)
  }

  let imagePreview = (
    <Text style={styles.fallbackImageText}>No image taken yet</Text>
  )

  if (pickedImageUri) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImageUri }} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton onPress={takeImageHandler} icon="camera">
        Take Image
      </OutlineButton>
    </View>
  )
}

const styles = StyleSheet.create({
  fallbackImageText: {
    color: Colors.primary800,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {},
  imagePreview: {
    width: "100%",
    height: 300,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
})
