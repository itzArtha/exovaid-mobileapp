import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const TextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={tw`text-blue-500 font-medium ${props.className}`}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
export default TextButton;
