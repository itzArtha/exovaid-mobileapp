import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={tw`my-1 h-10 w-full ${
        props.color ? props.color : "bg-blue-500"
      } rounded-lg items-center justify-center ${props.border}`}
    >
      <Text
        style={tw`text-base ${
          props.color === "bg-white" ? "text-black" : "text-white"
        } font-medium`}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
export default MainButton;
