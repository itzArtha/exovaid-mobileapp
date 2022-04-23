import { Image, Text, View } from "react-native";
import tw from "twrnc";
const MainProfile = () => {
  return (
    <View style={tw`py-4 flex-row`}>
      <View style={tw`mr-2`}>
        <Image
          style={tw`w-16 h-16 rounded-full`}
          source={{ uri: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg" }}
        />
      </View>
      <View style={tw`ml-2 my-auto`}>
        <Text style={tw`font-medium text-lg`}>Ruben Parker</Text>
        <Text style={tw`font-normal text-gray-400 text-base`}>
          Profesional Photography
        </Text>
      </View>
    </View>
  );
};
export default MainProfile;
