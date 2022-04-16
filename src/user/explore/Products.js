import { View, Text } from "react-native";
import MainContainer from "../../components/layouts/MainContainer";
import tw from "twrnc";
import MainTextInput from "../../components/MainTextInput";
import ProductList from "../../components/products/ProductList";
const Products = () => {
  return (
    <MainContainer>
      <View style={tw`my-8`}>
        <Text style={tw`text-2xl text-black font-medium`}>
          Cari nama kegiatan atau nama freelancer sesuai keinginanmu
        </Text>
      </View>
      <View style={tw`pb-8 border-b border-gray-300`}>
        <MainTextInput />
      </View>
      <View style={tw`my-8`}>
        <Text style={tw`text-xl text-black font-medium`}>
          Jasa atau freelancer
        </Text>
        <View style={tw`flex-row flex-wrap justify-between my-6`}>
          <View style={{ width: "48%" }}>
            <MainTextInput />
          </View>
          <View style={{ width: "48%" }}>
            <MainTextInput />
          </View>
        </View>
        <ProductList />
      </View>
    </MainContainer>
  );
};
export default Products;
