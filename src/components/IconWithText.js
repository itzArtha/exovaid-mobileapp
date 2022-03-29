import { Image, Text, View } from "react-native";
import tw from "twrnc";

const IconWithText = (props) => {
  return (
    <View style={tw`mt-4 flex-row ${props.mainClass}`}>
      <Image style={tw`${props.imageClass}`} source={props.image} />
      <Text style={tw`font-semibold ml-3 my-auto text-base ${props.textClass}`}>
        {props.label}
      </Text>
    </View>
  );
};
export default IconWithText;
