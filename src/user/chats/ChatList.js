import { View, ScrollView } from "react-native";
import MainTextInput from "../../components/MainTextInput";
import tw from "twrnc";
import ChatListComponent from "../../components/chats/ChatListComponent";
const ChatList = ({ navigation }) => {
  return (
    <View style={tw`px-4 h-full bg-white`}>
      <View style={tw`py-2`}>
        <MainTextInput />
      </View>
      <ScrollView
        style={tw`mb-24`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ChatListComponent navigation={navigation} />
        <ChatListComponent navigation={navigation} />
        <ChatListComponent navigation={navigation} />
      </ScrollView>
    </View>
  );
};
export default ChatList;
