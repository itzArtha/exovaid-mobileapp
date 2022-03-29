import { View, Text, Image } from "react-native";
import tw from "twrnc";
const MainReview = () => {
  return (
    <View style={tw`w-72 mx-2 border border-gray-300 rounded-lg p-3`}>
      <View style={tw`flex-row`}>
        <View>
          <Image
            style={tw.style(`w-16 h-16 rounded-full`, { resizeMode: `cover` })}
            source={{
              uri: "https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/275732650_1625109894507937_1971669343523193075_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=tJDHuBQ9UwIAX8cdxjq&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5MjA0MDE3MzM2Nzg1NDkwNw%3D%3D.2-ccb7-4&oh=00_AT_deNhuHEqquiht0zn8x-Zb6bPh587GuxX2AzQxKhf3qw&oe=62465CA0&_nc_sid=30a2ef",
            }}
          />
        </View>
        <View style={tw`ml-4 my-auto`}>
          <Text style={tw`font-medium text-lg`}>Amalia Cagie</Text>
          <Text style={tw`font-medium text-gray-400 text-lg`}>Exova Media</Text>
        </View>
      </View>
      <View style={tw`flex-row mt-6`}>
        <View>
          <Text>Stars</Text>
        </View>
        <View>
          <Text style={tw`font-medium text-xl ml-4`}>5.0</Text>
        </View>
      </View>
      <View>
        <Text style={tw`font-normal text-gray-400 text-base`}>
          Hasilnya memuaskan banget asli! Ga ragu buat repeat order kalo mau
          liburan/ada acara di Bali lagi 😁
        </Text>
      </View>
    </View>
  );
};
export default MainReview;
