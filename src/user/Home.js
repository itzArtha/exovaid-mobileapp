import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import tw from "twrnc";
import IconWithText from "../components/IconWithText";
import MainTextInput from "../components/MainTextInput";
import MainProductDisplay from "../components/products/MainProductDisplay";
import MainReview from "../components/products/MainReview";
import Partners from "../components/about/Partners";
import Footer from "../components/layouts/Footer";
const Home = () => {
  return (
    <View style={tw`mt-12 mx-4`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={tw`flex-row justify-between`}>
              <View>
                <Image source={require("../../assets/logos/logo-black.png")} />
              </View>
              <View>
                <Button title="N" />
              </View>
            </View>
            <View style={tw`mt-2`}>
              <Image
                style={tw`w-full h-60`}
                source={{
                  uri: "https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/275732650_1625109894507937_1971669343523193075_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=tJDHuBQ9UwIAX8cdxjq&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5MjA0MDE3MzM2Nzg1NDkwNw%3D%3D.2-ccb7-4&oh=00_AT_deNhuHEqquiht0zn8x-Zb6bPh587GuxX2AzQxKhf3qw&oe=62465CA0&_nc_sid=30a2ef",
                }}
              />
              <Text style={tw`mt-8 font-bold text-3xl`}>
                Take your <Text style={tw`text-blue-600`}>moment</Text> and{" "}
                <Text style={tw`text-blue-600`}> vacation </Text>
                in Bali!
              </Text>
              <Text style={tw`mt-2 font-light text-gray-400 text-xl`}>
                Dokumentasikan liburan, kegiatan, dan acaramu bersama kami.
              </Text>
            </View>
            <View style={tw`mt-8`}>
              <Text style={tw`mt-2 font-semibold text-black text-lg`}>
                Cari nama kegiatan atau freelancer
              </Text>
            </View>
            <View>
              <MainTextInput placeholder={"Contoh: Metatah, Prewedding, etc"} />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`font-medium text-gray-400 text-base`}>
                Pencarian terpopuler: Pernikahan, Liburan, Metatah
              </Text>
            </View>
            <View style={tw`mt-8`}>
              <IconWithText
                imageClass={"rounded-full w-12 h-12 "}
                image={require("../../assets/icons/icon-bg.png")}
                label={"56+ jasa vidio/foto"}
              />
              <IconWithText
                imageClass={"rounded-full w-12 h-12 "}
                image={require("../../assets/icons/icon-bg.png")}
                label={"37+ freelancer di Bali"}
              />
            </View>
            <View style={tw`mt-16`}>
              <Text style={tw`font-semibold text-black text-2xl`}>
                Mengapa menggunakan jasa{" "}
                <Text style={tw`text-blue-600`}> Exova</Text>?
              </Text>
              <Text style={tw`mt-2 font-light text-gray-400 text-xl`}>
                Kami akan memberikan yang terbaik dan tidak akan mengecewakan
                anda.
              </Text>
            </View>
            <View style={tw`mt-6 px-2`}>
              <IconWithText
                imageClass={"w-14 h-14 rounded-lg"}
                mainClass={"my-4"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Mudah mencari vidio/fotografer"}
              />
              <IconWithText
                imageClass={"w-14 h-14 rounded-lg"}
                mainClass={"my-4"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Bebas memilih vidio/fotografer"}
              />
              <IconWithText
                imageClass={"w-14 h-14 rounded-lg"}
                mainClass={"my-4"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Nego harga sesuka hati"}
              />
              <IconWithText
                imageClass={"w-14 h-14 rounded-lg"}
                mainClass={"my-4"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Pembayaran mudah dan praktis"}
              />
            </View>
            <View>
              <IconWithText
                textClass={"text-white"}
                imageClass={"w-14 h-14 rounded-lg"}
                mainClass={"my-4 p-2 rounded-lg bg-blue-600"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Bisa jual jasa skill vidio/foto kamu!"}
              />
            </View>
            <View>
              <Text style={tw`font-semibold text-black text-2xl`}>
                Jelajahi jasa atau freelancer kami
              </Text>
              <TouchableOpacity
                style={tw`h-10 mt-4 w-32 bg-blue-100 rounded-lg items-center justify-center`}
              >
                <Text style={tw`text-lg text-blue-500 font-medium`}>
                  Lihat semua
                </Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row flex-wrap justify-between mt-4`}>
              <MainProductDisplay />
              <MainProductDisplay />
              <MainProductDisplay />
              <MainProductDisplay />
            </View>

            <View style={tw`mt-12`}>
              <Text style={tw`font-semibold text-black text-2xl`}>
                Apa kata mereka?
              </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={tw`mt-6 flex-row flex-wrap`}
                horizontal={true}
              >
                <MainReview />
                <MainReview />
              </ScrollView>
            </View>
            <View style={tw`mt-16`}>
              <Text style={tw`font-semibold text-center text-black text-2xl`}>
                Support and Partners
              </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={tw`mt-6 flex-row flex-wrap`}
                horizontal={true}
              >
                <Partners image={require("../../assets/partners/dps.png")} />
                <Partners image={require("../../assets/partners/pesona.png")} />
                <Partners image={require("../../assets/partners/tiket.png")} />
              </ScrollView>
            </View>
            <View style={tw`mt-12`}>
              <IconWithText
                imageClass={"rounded-full w-12 h-12"}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Punya keahlian dibidang foto/vidio?"}
              />
              <IconWithText
                imageClass={"rounded-full w-12 h-12 "}
                image={require("../../assets/icons/icon-bg.png")}
                label={"Bingung nyari klien?"}
              />
            </View>
            <View style={tw`mt-8`}>
              <Text style={tw`font-medium text-4xl`}>
                Bergabung bersama <Text style={tw`text-blue-600`}>Exova </Text>
                dan jual jasa terbaikmu!
              </Text>
            </View>
            <View style={tw`mt-8`}>
              <TouchableOpacity
                style={tw`h-10 w-full bg-blue-600 rounded-lg items-center justify-center`}
              >
                <Text style={tw`text-base text-white font-medium`}>
                  Daftar menjadi freelancer sekarang
                </Text>
              </TouchableOpacity>
            </View>
            <View style={tw`mt-12`}>
              <Text style={tw`font-semibold text-black text-xl`}>
                Dapatkan informasi terbaru dan penawaran spesial dari Kami!
              </Text>
              <MainTextInput placeholder={"Inputkan email kamu di sini"} />
              <TouchableOpacity
                style={tw`h-10 w-full bg-blue-600 rounded-lg items-center justify-center`}
              >
                <Text style={tw`text-base text-white font-medium`}>
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
            <Footer />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Home;
