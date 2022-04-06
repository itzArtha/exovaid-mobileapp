import { TouchableOpacity, Image, View } from "react-native";
import tw from "twrnc";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const LeftButton = (props) => {
  return (
    <View style={tw`${props.className}`}>
      <Image source={require("../../../assets/logos/logo-black.png")} />
    </View>
  );
};

export const RightButton = (props) => {
  return (
    <View style={tw`${props.className}`}>
      <TouchableOpacity
        style={tw`p-1 border border-gray-300 rounded-lg shadow`}
      >
        <MaterialCommunityIcons
          name="bell-outline"
          color={"#464646"}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};
