import { View, Text } from "react-native";
import tw from "twrnc";
const ChatBubbleSender = () => {
  return (
    <View style={tw`bg-blue-600 p-3 rounded-lg ml-auto my-2`}>
      <Text style={tw`text-white text-right`}>
        Halo saya ingin memesan jasa fotografi untuk liburan pada...
      </Text>
    </View>
  );
};
export default ChatBubbleSender;
