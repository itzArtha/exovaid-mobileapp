import { Text, Image, View } from "react-native";
import tw from "twrnc";
import MainButton from "../buttons/MainButton";
import SecondaryPricing from "../pricings/SecondaryPricing";
import WishlistIcon from "../wishlists/WishlistIcon";

const MainProductDisplay = (props) => {
  return (
    <View
      style={tw.style(`relative my-2 border border-gray-300 rounded-lg`, {
        width: "48%",
      })}
    >
      <View style={tw`absolute z-10 top-2 right-2`}>
        <View style={tw`p-1 bg-gray-100 rounded-lg`}>
          <WishlistIcon id={1} isWishlist={true} />
        </View>
      </View>
      <Image
        style={tw.style(`w-full h-36 rounded-t-lg`, { resizeMode: `cover` })}
        source={{
          uri: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg",
        }}
      />
      <View style={tw`p-2`}>
        <View style={tw`p-2`}>
          <Text style={tw`font-medium text-lg`}>Paket Foto Liburan</Text>
          <Text style={tw`font-medium text-gray-400 text-base`}>Exova</Text>
          <SecondaryPricing actualPrice={1200000} />
        </View>
        <MainButton
          onPress={() => {
            props.navigation.navigate("Product");
          }}
        >
          Lihat Detail
        </MainButton>
      </View>
    </View>
  );
};
export default MainProductDisplay;
