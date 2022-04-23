import MainContainer from "../../components/layouts/MainContainer";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const AboutUs = () => {
  return (
    <MainContainer>
      <View styke={tw`my-4`}>
        <Text style={tw`font-medium text-2xl text-center my-8`}>
          Kami menyediakan jasa dokumentasi{" "}
          <Text style={tw`text-blue-500`}>terbaik</Text> yang{" "}
          <Text style={tw`text-blue-500`}>tidak akan</Text> mengecewakanmu
        </Text>
        {/*<View style={tw`w-full h-1/2`}>*/}
        {/*  <Image*/}
        {/*    style={tw`w-full`}*/}
        {/*    source={require("../../../assets/founders/bertiga.png")}*/}
        {/*  />*/}
        {/*</View>*/}
        <View>
          <Text style={tw`font-medium text-xl mt-2 mb-2`}>Cerita Exova</Text>
        </View>
        {/*<View style={tw`w-full h-1/3`}>*/}
        {/*  <Image*/}
        {/*    style={tw`w-full h-1/3`}*/}
        {/*    source={require("../../../assets/founders/duo.png")}*/}
        {/*  />*/}
        {/*</View>*/}
        <View>
          <Text style={tw`font-base text-lg text-justify`}>
            Sejarah Exova bermula ketika sang founder "Triyana Artha" ingin
            membangun sebuah perusahaan e-commerce. Dia memang sangat bertekad
            sekali, Tekad yang sudah bulat ingin membangun perusahaan yang
            sukses muncul ketika ia sakit hati karena harus berpisah tanpa
            alasan yang jelas dengan pacarnya saat masih di bangku SMA. Setelah
            itu, dia belajar dan belajar giat tentang dunia teknologi &
            programming. Tak lama belajar, dia pun merilis layanannya yang dia
            beri nama "curhatskuy" sebuah platform untuk saling bertukar cerita
            masalah asmara. Namun, setelah update versi 2.0, dia memberhentikan
            layanannya karena ingin serius membangun perusahaan. Lantas, dalam
            perjalanannya membangun exova ini, dia mengajak sang co-founder
            "Ngurah Krisna" untuk bergabung. Dikala itu nama Exova masih "Kayana
            Entertainment", karena memang awalnya mereka ingin membuat sebuah
            game. Bahkan sudah seperempat perjalanan, namun akhirnya produksi
            game berhenti dan mulai serius membangun “Platform Penyedia Jasa
            Online” yang akhirnya mereka beri nama Exova. Nama Exova pun diambil
            dari kisah 2 founder yang lumayan mirip. Di mana mereka berdua sama
            ditinggal pacarnya, yang mana disini diambil kata mantan atau dalam
            bahasa inggrisnya (EX) lalu mereka bertekad bulat (O) untuk
            menyukseskan (VA) atau kepanjangannya Virtual Arts jika digabungkan
            semua jadilah nama Exova.
          </Text>
        </View>
        <View style={tw`mt-18`}>
          <Text style={tw`font-medium text-2xl text-left my-8`}>
            "Make a better place for{" "}
            <Text style={tw`text-blue-500`}>photographer, videographer</Text>{" "}
            and their <Text style={tw`text-blue-500`}>ecosystem"</Text>
          </Text>
          <Text style={tw`font-medium text-2xl text-gray-400`}>-Exova </Text>
        </View>
      </View>
    </MainContainer>
  );
};
export default AboutUs;
