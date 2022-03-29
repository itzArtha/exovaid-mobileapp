import { Image, Text, View } from "react-native";

import tw from "twrnc";
const Footer = () => {
  return (
    <View style={tw`mt-20`}>
      <View style={tw`p-4 bg-blue-50`}>
        <View style={tw`flex-row flex-wrap`}>
          <Image
            style={tw`w-12 h-12 mr-2`}
            source={require("../../../assets/icons/icon-no-bg.png")}
          />
          <Image
            style={tw`my-auto ml-2`}
            source={require("../../../assets/logos/logo-footer.png")}
          />
        </View>
        <View style={tw`mt-8`}>
          <Text style={tw`text-base text-justify font-normal text-gray-400`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={tw`mt-2 mb-12`}>
        <Text style={tw`text-base text-center font-normal text-gray-400`}>
          2022 Exova Indonesia - All right reserved.
        </Text>
      </View>
    </View>
  );
};
export default Footer;
