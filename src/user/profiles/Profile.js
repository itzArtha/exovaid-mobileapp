import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import MainContainer from "../../components/layouts/MainContainer";
import tw from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from "accordion-collapse-react-native";
import MainTextInput from "../../components/MainTextInput";
import MainButton from "../../components/buttons/MainButton";
import { useState } from "react";
const Profile = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    passwordConfirmation: "",
  });
  const logoutConfirmation = () => {
    Alert.alert("Yakin mau logout?", "", [
      {
        text: "Yakin",
        onPress: () => console.log("Yakin"),
      },
      {
        text: "Gajadi",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };

  const handleChangePassword = () => {
    if (newPassword.password !== newPassword.passwordConfirmation) {
      Alert.alert("Password tidak sesuai");
    }
    setNewPassword({ password: "", passwordConfirmation: "" });
  };

  return (
    <MainContainer footer={false}>
      <View style={tw`mt-4 flex-row`}>
        <View>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require("../../../assets/icons/question.png")}
          />
        </View>
        <View style={tw`ml-4 my-auto`}>
          <Text style={tw`font-medium text-xl`}>Jhon Doe</Text>
          <Text style={tw`font-normal text-sm`}>+62 81 238 169 666</Text>
          <Text style={tw`font-normal text-sm`}>artha@ternakayam.com</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditBiodata");
          }}
          style={tw`my-auto right-0 top-2 absolute p-1 border border-gray-300 rounded-lg`}
        >
          <MaterialCommunityIcons
            name="account-edit-outline"
            color={"#000000"}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`mt-6`}>
        <Collapse
          style={tw`py-2 px-4 border border-gray-200 border-b-0 rounded-t`}
        >
          <CollapseHeader>
            <View style={tw`flex-row justify-between`}>
              <View>
                <Text style={tw`font-medium text-center text-base`}>
                  Ubah password
                </Text>
              </View>
              <View>
                <Text style={tw`font-medium text-center text-base`}>
                  <MaterialCommunityIcons
                    name="arrow-down"
                    color={"#000000"}
                    size={18}
                  />
                </Text>
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody style={tw`mt-2`}>
            <MainTextInput
              secure={true}
              value={newPassword.password}
              onChangeText={(text) => {
                setNewPassword({ ...newPassword, password: text });
              }}
              placeholder={"Password baru"}
            />
            <MainTextInput
              secure={true}
              value={newPassword.passwordConfirmation}
              onChangeText={(text) => {
                setNewPassword({ ...newPassword, passwordConfirmation: text });
              }}
              placeholder={"Konfirmasi password baru"}
            />
            <MainButton
              onPress={() => {
                handleChangePassword();
              }}
            >
              Simpan
            </MainButton>
          </CollapseBody>
        </Collapse>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Transaksi");
          }}
          style={tw`py-2 px-4 border border-gray-200 border-b-0 rounded-t`}
        >
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`font-medium text-center text-base`}>
                Transaksi
              </Text>
            </View>
            <View>
              <Text style={tw`font-medium text-center text-base`}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  color={"#000000"}
                  size={18}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logoutConfirmation();
          }}
          style={tw`py-2 px-4 border border-gray-200 rounded-b`}
        >
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`font-medium text-center text-base`}>Log out</Text>
            </View>
            <View>
              <Text style={tw`font-medium text-center text-base`}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  color={"#000000"}
                  size={18}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};
export default Profile;
