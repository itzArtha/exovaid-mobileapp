import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import tw from "twrnc";
const Transaksi = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      freelancerName: "Yusa Putra Dinatta",
      freelancerProfilePicture: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg",
      date: "14 Apr 2022",
      projectName: "Sleep",
      invoiceNumber: "EX/XX/2022/ABC",
      totalPrice: "Rp200.000",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      freelancerName: "Krisna Putra Roh Kudus",
      freelancerProfilePicture: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg",
      date: "14 Apr 2022",
      projectName: "Sleep",
      invoiceNumber: "EX/XX/2022/ABC",
      totalPrice: "Rp150.000",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("DetailTransaksi");
      }}
      style={tw`border border-gray-300 m-2 rounded-lg p-4`}
    >
      <View style={tw`flex-row border-b border-gray-300 pb-4`}>
        <View>
          <Image
            style={tw`w-12 h-12 rounded-full`}
            source={{ uri: item.freelancerProfilePicture }}
          />
        </View>
        <View style={tw`ml-4 my-auto`}>
          <Text style={tw`font-medium text-sm`}>{item.freelancerName}</Text>
          <Text style={tw`font-normal text-gray-400 text-xs`}>{item.date}</Text>
        </View>
      </View>
      <View style={tw`pt-4`}>
        <Text style={tw`font-medium text-base`}>{item.projectName}</Text>
        <Text style={tw`font-normal text-gray-400 text-sm`}>
          {item.invoiceNumber}
        </Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <View style={tw`mt-4`}>
          <Text style={tw`font-normal text-gray-400 text-xs`}>Total Harga</Text>
          <Text style={tw`font-medium text-sm`}>{item.totalPrice}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("OK");
            }}
            style={tw`mt-4 p-2 w-full rounded-lg items-center justify-center bg-blue-600`}
          >
            <Text style={tw`text-xs text-white font-medium`}>Beli Lagi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={tw`mx-2 pb-4 pt-4`}>
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
export default Transaksi;
