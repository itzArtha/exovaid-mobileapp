import { View } from "react-native";
import tw from "twrnc";
import MainProductDisplay from "./MainProductDisplay";
const ProductList = () => {
  return (
    <View style={tw`flex-row flex-wrap justify-between my-6`}>
      <MainProductDisplay />
      <MainProductDisplay />
    </View>
  );
};
export default ProductList;
