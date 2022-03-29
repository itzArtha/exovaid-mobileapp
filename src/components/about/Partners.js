import { View, Image } from "react-native";
import tw from "twrnc";
const Partners = (props) => {
  return (
    <View style={tw`mx-4`}>
      <Image source={props.image} />
    </View>
  );
};
export default Partners;
