import { View, Text } from "react-native";
import tw from "twrnc";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainButton from "../buttons/MainButton";
const PricingPackage = (props) => {
  return (
    <View
      style={tw`w-72 p-4 ${
        props.highlight ? "bg-blue-500" : "bg-white border border-gray-200"
      } rounded-md`}
    >
      <View>
        <Text
          style={tw`text-lg font-medium ${
            props.highlight ? "text-white" : "text-black"
          }`}
        >
          Startup
        </Text>
        <Text
          style={tw`text-2xl font-medium ${
            props.highlight ? "text-white" : "text-black"
          }`}
        >
          Rp1,200,000
        </Text>
      </View>
      <View style={tw`border-b border-gray-300 my-4`} />
      <View>
        <Text style={tw`my-1 ${props.highlight ? "text-white" : "text-black"}`}>
          {" "}
          <MaterialCommunityIcons
            name={"check"}
            color={props.highlight ? "rgb(255,255,255)" : "rgb(2,162,49)"}
            size={20}
          />{" "}
          Bisa beli pake keranjang xixi
        </Text>
        <Text style={tw`my-1 ${props.highlight ? "text-white" : "text-black"}`}>
          {" "}
          <MaterialCommunityIcons
            name={"check"}
            color={props.highlight ? "rgb(255,255,255)" : "rgb(2,162,49)"}
            size={20}
          />{" "}
          Bisa beli pake keranjang xixi
        </Text>
      </View>
      <View style={tw`mt-10`}>
        <MainButton color={props.highlight ? "bg-white" : ""}>
          Pilih paket{" "}
          <MaterialCommunityIcons
            name={"check"}
            color={props.highlight ? "rgb(0,0,0)" : "rgb(255,255,255)"}
            size={20}
          />
        </MainButton>
      </View>
    </View>
  );
};
export default PricingPackage;
