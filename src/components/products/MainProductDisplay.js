import { Text, Image, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
const MainProductDisplay = () => {
  return (
    <View
      style={tw.style(`my-2 border border-gray-300 rounded-lg`, {
        width: "48%",
      })}
    >
      <Image
        style={tw.style(`w-full h-36 rounded-t-lg`, { resizeMode: `cover` })}
        source={{
          uri: "https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/275732650_1625109894507937_1971669343523193075_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=tJDHuBQ9UwIAX8cdxjq&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5MjA0MDE3MzM2Nzg1NDkwNw%3D%3D.2-ccb7-4&oh=00_AT_deNhuHEqquiht0zn8x-Zb6bPh587GuxX2AzQxKhf3qw&oe=62465CA0&_nc_sid=30a2ef",
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
          style={tw`h-10 w-full bg-blue-600 rounded-lg items-center justify-center`}
        >
          <Text style={tw`text-base text-white font-medium`}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MainProductDisplay;
