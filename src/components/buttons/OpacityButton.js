import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const OpacityButton = (props) => {
  return (
    <TouchableOpacity
      style={tw`h-10 mt-4 w-32 bg-blue-50 rounded-lg items-center justify-center`}
    >
      <Text style={tw`text-lg text-blue-500 font-medium`}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
export default OpacityButton;
