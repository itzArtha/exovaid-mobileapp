import { Image, TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

const ChatListComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Chat");
      }}
    >
      <View style={tw`py-4 flex-row border-b border-gray-200`}>
        <View style={tw`mr-2`}>
          <Image
            style={tw`w-16 h-16 rounded-full`}
            source={{ uri: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg" }}
          />
        </View>
        <View style={tw`ml-2 my-auto`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`font-medium text-lg`}>Ruben Parker</Text>
            <Text style={tw`font-normal text-gray-400 text-xs`}>
              2 mins ago
            </Text>
          </View>
          <Text style={tw`font-normal text-gray-400 text-base`}>
            Sebentar akan saya kirim detail h....
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ChatListComponent;
