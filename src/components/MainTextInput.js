import { TextInput, View, Text } from "react-native";
import tw from "twrnc";

const MainTextInput = (props) => {
  return (
    <View style={tw`my-2`}>
      {props.label ? (
        <Text style={tw`font-medium text-base`}>{props.label}</Text>
      ) : null}
      <TextInput
        secureTextEntry={!!props.secure}
        onChangeText={props.onChangeText}
        defaultValue={props.value}
        style={tw`mt-2 mb-1 p-4 w-full rounded-lg border border-gray-300 focus:ring focus:ring-blue-500`}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.errorMessage ? (
        <Text style={tw`font-normal text-sm text-red-500`}>
          {props.errorMessage}
        </Text>
      ) : null}
    </View>
  );
};
export default MainTextInput;
