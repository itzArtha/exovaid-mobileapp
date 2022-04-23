import { Text, View } from "react-native";
import tw from "twrnc";

const ChatBubbleReciept = () => {
  return (
    <View style={tw`bg-gray-100 p-3 rounded-lg mr-auto my-2`}>
      <Text style={tw`text-blue-600 text-left`}>Gak boleh</Text>
    </View>
  );
};
export default ChatBubbleReciept;
