import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MainButton from "../../components/buttons/MainButton";
import tw from "twrnc";
import ChatBubbleSender from "../../components/chats/ChatBubbleSender";
import ChatBubbleReciept from "../../components/chats/ChatBubbleReciept";
import MainTextInput from "../../components/MainTextInput";
import { useEffect } from "react";

const Chat = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Ngurah Krisna",
    });
  }, []);
  return (
    <View style={tw`mx-4 h-full`}>
      <View style={tw`border-b border-gray-200 pb-2 pt-4`}>
        <MainButton color={"bg-green-600"}>Buat penawaran</MainButton>
        <MainButton border={"border border-gray-300"} color={"bg-white"}>
          Tidak tertarik
        </MainButton>
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={90}
        enabled
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={tw`h-1/2 pt-4`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <ChatBubbleReciept />
          <ChatBubbleSender />
          <ChatBubbleSender />
          <ChatBubbleReciept />
        </ScrollView>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={tw.style(`bottom-0 left-0 right-0 bg-white`, {
              flex: 1,
            })}
          >
            <MainTextInput />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
});
