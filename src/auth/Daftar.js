import { View, Text, ScrollView } from "react-native";
import MainTextInput from "../components/MainTextInput";
import tw from "twrnc";
import MainButton from "../components/buttons/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextButton from "../components/buttons/TextButton";
const Daftar = ({ navigation }) => {
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
          <MainTextInput />
          <MainTextInput />
          <MainTextInput />
          <MainTextInput />
          <MainTextInput />
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
