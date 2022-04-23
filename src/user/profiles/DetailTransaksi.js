import { View, Text } from "react-native";
import tw from "twrnc";
import MainContainer from "../../components/layouts/MainContainer";
import MainButton from "../../components/buttons/MainButton";
import TextButton from "../../components/buttons/TextButton";
const DetailTransaksi = () => {
  return (
    <MainContainer
      floatingComponent={
        <View style={tw`absolute bottom-10 left-10 right-10`}>
          <MainButton>Beli lagi</MainButton>
        </View>
      }
      footer={false}
    >
      <View style={tw`p-4`}>
        <View style={tw`pb-4 border-b border-gray-200`}>
          <Text style={tw`font-medium text-lg`}>Transaksi berhasil</Text>
        </View>
        <View style={tw`py-4`}>
          <View style={tw`py-2 flex-row justify-between`}>
            <Text>EX/XX/2022/ABC</Text>
            <TextButton
              onPress={() => {
                console.log("OK");
              }}
            >
              Lihat Invoice
            </TextButton>
          </View>
          <View style={tw`py-2 flex-row justify-between`}>
            <Text style={tw`text-gray-500 font-normal`}>Tanggal Transaksi</Text>
            <Text style={tw`text-gray-500 font-normal`}>14 Apr 2022 14:00</Text>
          </View>
        </View>
        <View style={tw`mt-4 py-2 border-gray-300 rounded-lg`}>
          <View style={tw`pb-4 border-b border-gray-200`}>
            <Text style={tw`font-medium text-lg`}>Detail Jasa</Text>
          </View>
          <View style={tw`py-4`}>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Nama Jasa</Text>
              <Text style={tw`text-gray-500 font-normal`}>
                Couple Photography
              </Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Nama Freelancer</Text>
              <Text style={tw`text-gray-500 font-normal`}>
                Krisna Putra Roh Kudus
              </Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Harga</Text>
              <Text style={tw`text-gray-500 font-normal`}>Rp120.000</Text>
            </View>
          </View>
        </View>
        <View style={tw`mt-4 py-2 border-gray-300 rounded-lg`}>
          <View style={tw`pb-4 border-b border-gray-200`}>
            <Text style={tw`font-medium text-lg`}>Detail Pembayaran</Text>
          </View>
          <View style={tw`py-4`}>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>
                Metode Pembayaran
              </Text>
              <Text style={tw`text-gray-500 font-normal`}>QRIS</Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Subtotal</Text>
              <Text style={tw`text-gray-500 font-normal`}>Rp120.000</Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Diskon</Text>
              <Text style={tw`text-gray-500 font-normal`}>Rp10.000</Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-gray-500 font-normal`}>Biaya Layanan</Text>
              <Text style={tw`text-gray-500 font-normal`}>Rp1.000</Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
              <Text style={tw`text-black font-medium`}>Total Pembayaran</Text>
              <Text style={tw`text-black font-medium`}>Rp131.000</Text>
            </View>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};
export default DetailTransaksi;
