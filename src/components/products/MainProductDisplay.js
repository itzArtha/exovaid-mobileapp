import { Text, Image, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
const MainProductDisplay = (props) => {
  return (
    <View
      style={tw.style(`my-2 border border-gray-300 rounded-lg`, {
        width: "48%",
      })}
    >
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
          <Text style={tw`font-medium text-red-500 text-base mt-2`}>
            Rp. 2,000,000
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Product");
          }}
          style={tw`h-10 w-full bg-blue-600 rounded-lg items-center justify-center`}
        >
          <Text style={tw`text-base text-white font-medium`}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MainProductDisplay;
