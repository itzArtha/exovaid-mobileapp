import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={tw`h-10 w-full ${
        props.color ? props.color : "bg-blue-500"
      } rounded-lg items-center justify-center`}
    >
      <Text
        style={tw`text-base ${
          props.color ? "text-black" : "text-white"
        } font-medium`}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
export default MainButton;
