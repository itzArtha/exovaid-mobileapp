import { View, Text, ScrollView } from "react-native";
import MainTextInput from "../components/MainTextInput";
import tw from "twrnc";
import MainButton from "../components/buttons/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextButton from "../components/buttons/TextButton";
import { useState } from "react";
const Daftar = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleValidation = () => {};

  const handleDaftar = () => {};

  return (
    <View style={tw`p-4 bg-white`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Text style={tw`font-medium text-3xl`}>Daftar</Text>
          <Text style={tw`mt-4 font-normal text-lg text-gray-400`}>
            Daftar di bawah untuk membuat akun mu
          </Text>
        </View>
        <View style={tw`mt-12 mb-4`}>
          <MainTextInput
            onChangeText={(value) => {
              setInputData({ ...inputData, namaLengkap: value });
            }}
            errorMessage={"Jangan lupa isi nama kawan"}
            label={"Nama Lengkap"}
          />
          <MainTextInput
            onChangeText={(value) => {
              setInputData({ ...inputData, email: value });
            }}
            label={"Email"}
          />
          <MainTextInput
            onChangeText={(value) => {
              setInputData({ ...inputData, password: value });
            }}
            label={"Password"}
          />
          <MainTextInput
            onChangeText={(value) => {
              setInputData({ ...inputData, passwordConfirmation: value });
            }}
            label={"Ulangi Password"}
          />
          <View style={tw`mt-8`}>
            <MainButton>Buat akun</MainButton>
          </View>
        </View>
        <View style={tw`border-t border-gray-300 pt-4`}>
          <MainButton border={"border border-gray-300"} color={"bg-white"}>
            <MaterialCommunityIcons name="google" color={"#000000"} size={18} />{" "}
            Daftar dengan Google
          </MainButton>
        </View>
        <View style={tw`mb-8`}>
          <Text
            style={tw`mt-4 font-normal text-base text-gray-400 text-center`}
          >
            Sudah punya akun?{" "}
            <TextButton
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Log in
            </TextButton>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Daftar;
