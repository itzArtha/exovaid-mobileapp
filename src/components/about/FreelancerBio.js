import { View, Text } from "react-native";
import tw from "twrnc";
const FreelancerBio = () => {
  return (
    <View>
      <Text style={tw`font-medium text-base mb-2`}>Bio</Text>
      <Text style={tw`text-gray-400`}>
        Hubungi saya jika ingin tanya-tanya terkait project!
      </Text>
    </View>
  );
};
export default FreelancerBio;
