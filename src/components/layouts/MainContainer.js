import tw from "twrnc";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import Footer from "./Footer";
import { NativeBaseProvider } from "native-base";

const MainContainer = ({ children, floatingComponent }) => {
  return (
    <NativeBaseProvider>
      <View style={tw`px-4 bg-white`}>
        <StatusBar animated={true} barStyle={"dark-content"} hidden={false} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {children}
              <Footer />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        {floatingComponent}
      </View>
    </NativeBaseProvider>
  );
};
export default MainContainer;
