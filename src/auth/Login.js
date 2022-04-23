import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import MainTextInput from "../components/MainTextInput";
import MainButton from "../components/buttons/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextButton from "../components/buttons/TextButton";

const Login = ({ navigation }) => {
  return (
    <View style={tw`px-4 pt-4 pb-32 bg-white`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={tw`mt-24`}>
          <Text style={tw`font-medium text-3xl`}>Selamat datang</Text>
          <Text style={tw`mt-4 font-normal text-lg text-gray-400`}>
            Masuk di bawah untuk akses akun mu
          </Text>
        </View>
        <View style={tw`mt-12 mb-4`}>
          <MainTextInput />
          <MainTextInput />
          <View style={tw`mt-8`}>
            <MainButton>Masuk</MainButton>
          </View>
        </View>
        <View style={tw`border-t border-gray-300 pt-4`}>
          <MainButton border={"border border-gray-300"} color={"bg-white"}>
            <MaterialCommunityIcons name="google" color={"#000000"} size={18} />{" "}
            Login dengan Google
          </MainButton>
        </View>
        <View style={tw`mb-8`}>
          <Text
            style={tw`mt-4 font-normal text-base text-gray-400 text-center`}
          >
            Belum punya akun?{" "}
            <TextButton
              onPress={() => {
                navigation.navigate("Daftar");
              }}
            >
              Daftar
            </TextButton>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
