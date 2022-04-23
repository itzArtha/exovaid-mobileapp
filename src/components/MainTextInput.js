import { TextInput, View, SafeAreaView } from "react-native";
import tw from "twrnc";

const MainTextInput = (props) => {
  return (
    <View>
      <TextInput
        secureTextEntry={!!props.secure}
        onChangeText={props.onChangeText}
        defaultValue={props.value}
        style={tw`my-2 p-4 w-full rounded-lg border border-gray-300 focus:ring focus:ring-blue-500`}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>
  );
};
export default MainTextInput;
