import { View, Text, Image } from "react-native";
import tw from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainReview = () => {
  return (
    <View style={tw`w-72 mx-2 border border-gray-300 rounded-lg p-3`}>
      <View style={tw`flex-row`}>
        <View>
          <Image
            style={tw.style(`w-16 h-16 rounded-full`, { resizeMode: `cover` })}
            source={{
              uri: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg",
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
          <Text>
            {" "}
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />
          </Text>
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
