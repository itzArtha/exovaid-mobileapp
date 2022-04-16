import { Pressable, Text } from "react-native";
import tw from "twrnc";

const UnderlineOpacityButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={tw.style(
        `${props.active ? "border-blue-500 border-b-2" : ""} py-2`,
        {
          alignSelf: "flex-start",
        }
      )}
    >
      <Text
        style={tw`text-lg font-medium ${props.active ? "" : "text-gray-300"}`}
      >
        {props.children}
      </Text>
    </Pressable>
  );
};
export default UnderlineOpacityButton;
