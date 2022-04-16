import { Text, View } from "react-native";
import tw from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SecondaryReview = (props) => {
  return (
    <View>
      <Text style={tw`text-base font-normal text-gray-500`}>
        <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />{" "}
        {props.children}
      </Text>
    </View>
  );
};
export default SecondaryReview;
