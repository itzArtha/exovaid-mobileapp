import { useState } from "react";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";
import MainContainer from "../../components/layouts/MainContainer";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import MainTextInput from "../../components/MainTextInput";
import MainButton from "../../components/buttons/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const EditBiodata = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://i.ibb.co/HPbhQvY/IMG-0363.jpg"
  );
  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage(pickerResult.uri);
  };

  const chooseEditImageOption = () =>
    Alert.alert("Mau ngapain hayo", "", [
      {
        text: "Ganti Foto",
        onPress: () => openImagePickerAsync(),
      },
      { text: "Hapus Foto", onPress: () => console.log("Hapus Foto") },
      {
        text: "Gajadi",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);

  return (
    <MainContainer footer={false}>
      <View style={tw`mx-auto mt-12`}>
        <Image
          style={tw`w-32 h-32 rounded-full`}
          source={{
            uri: selectedImage,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            chooseEditImageOption();
          }}
          style={tw`my-auto right-0 bg-white bottom-2 absolute p-1.5 border border-gray-300 rounded-full`}
        >
          <MaterialCommunityIcons
            name="image-edit-outline"
            color={"#000000"}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`mt-4`}>
        <MainTextInput placeholder={"Nama Lengkap"} />
        <MainTextInput placeholder={"Email"} />
        <MainTextInput placeholder={"No. Telepon"} />
        <MainTextInput placeholder={"Alamat"} />
        <View style={tw`my-12`}>
          <MainButton
            onPress={() => {
              //
            }}
          >
            Simpan
          </MainButton>
        </View>
      </View>
    </MainContainer>
  );
};
export default EditBiodata;
