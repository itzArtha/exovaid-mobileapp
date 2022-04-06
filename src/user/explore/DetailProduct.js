import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import MainContainer from "../../components/layouts/MainContainer";
import tw from "twrnc";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatListSlider } from "react-native-flatlist-slider";
import ImagePreview from "../../components/products/ImagePreview";
import IconWithText from "../../components/IconWithText";
import MainProductDisplay from "../../components/products/MainProductDisplay";

const DetailProduct = () => {
  const images = [
    {
      banner: "https://i.ibb.co/4WPwQyx/DSC04977.jpg",
    },
    {
      banner:
        "https://www.exova.id/storage/users/210/products/61272f048d655/1280/1629958134-47.jpg",
    },
    {
      banner: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg",
    },
  ];
  return (
    <MainContainer
      floatingComponent={
        <View style={tw`absolute bottom-10 left-10 right-10`}>
          <TouchableOpacity
            style={tw`h-10 w-full bg-blue-600 rounded-lg items-center justify-center`}
          >
            <Text style={tw`text-base text-white font-medium`}>
              Chat Freelancer
            </Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View>
        <Text style={tw`text-5xl font-medium`}>Cinematic Bali Event</Text>
      </View>
      <View style={tw`flex-row justify-between my-4`}>
        <View>
          <Text style={tw`text-base font-normal text-gray-500`}>
            <MaterialCommunityIcons name="star" color={"#FEBD02"} size={24} />{" "}
            4.8/5 (24 Ulasan)
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <View style={tw`mr-1 my-auto`}>
            <MaterialCommunityIcons
              name="heart-outline"
              color={"rgba(0,0,0,0.41)"}
              size={20}
            />
          </View>
          <View style={tw`ml-1 my-auto`}>
            <MaterialCommunityIcons
              name="share-variant"
              color={"rgba(0,0,0,0.41)"}
              size={20}
            />
          </View>
        </View>
      </View>
      <View>
        <FlatListSlider
          imageKey={"banner"}
          data={images}
          width={275}
          indicator={false}
          timer={5000}
          component={<ImagePreview />}
          onPress={(item) => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      <View style={tw`mb-6 p-4 rounded-lg border border-gray-300`}>
        <View>
          <Text style={tw`text-gray-400`}>
            <Text style={tw`font-medium text-2xl line-through`}>
              Rp2,000,000
            </Text>
            <Text>/project</Text>
          </Text>
        </View>
        <View style={tw`mt-4 mb-2`}>
          <Pressable
            style={tw.style(`bg-red-50 border-red-200 p-2 rounded-lg border`, {
              alignSelf: "flex-start",
            })}
          >
            <Text style={tw`text-red-800 font-medium`}>Promo 25%</Text>
          </Pressable>
        </View>
        <View>
          <Text style={tw`text-gray-400`}>
            <Text style={tw`font-bold text-red-600 text-3xl`}>Rp1,500,000</Text>
            <Text>/project</Text>
          </Text>
        </View>
      </View>
      <View>
        <IconWithText
          imageClass={"rounded-full w-16 h-16"}
          image={require("../../../assets/icons/icon-bg.png")}
          label={
            <View>
              <Text style={tw`text-lg font-medium`}>Exova Media</Text>
              <Text style={tw`text-base text-blue-500`}>
                Lihat detail profil
              </Text>
            </View>
          }
        />
      </View>
      <View style={tw`my-10`}>
        <View style={tw`flex-row`}>
          <View style={tw`mr-3`}>
            <Pressable
              style={tw.style(`border-blue-500 border-b-2 py-2`, {
                alignSelf: "flex-start",
              })}
            >
              <Text style={tw`text-lg font-medium`}>Deskripsi</Text>
            </Pressable>
          </View>
          <View style={tw`ml-3`}>
            <Pressable
              style={tw.style(`py-2`, {
                alignSelf: "flex-start",
              })}
            >
              <Text style={tw`text-lg font-medium text-gray-300`}>Ulasan</Text>
            </Pressable>
          </View>
        </View>
        <View style={tw`my-4`}>
          <Text style={tw`font-normal text-gray-400 text-lg`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed
            tortor cum pellentesque facilisi nec eget. Fringilla sollicitudin
            sit vitae orci eu. Sed volutpat vestibulum eleifen...
          </Text>
          <TouchableOpacity>
            <Text style={tw`underline text-blue-500 font-medium text-lg`}>
              Baca selengkapnya
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`mb-10`}>
        <Text style={tw`font-semibold text-black text-2xl`}>
          Lainnya dari<Text style={tw`text-blue-600`}> Exova Media</Text>
        </Text>
        <TouchableOpacity
          style={tw`h-10 mt-4 w-32 bg-blue-50 rounded-lg items-center justify-center`}
        >
          <Text style={tw`text-lg text-blue-500 font-medium`}>Lihat semua</Text>
        </TouchableOpacity>
        <View style={tw`flex-row flex-wrap justify-between mt-4`}>
          <MainProductDisplay />
          <MainProductDisplay />
          <MainProductDisplay />
          <MainProductDisplay />
        </View>
      </View>
      <View style={tw`my-4`}>
        <Text style={tw`font-semibold text-black text-2xl`}>Jasa terkait</Text>
        <TouchableOpacity
          style={tw`h-10 mt-4 w-32 bg-blue-50 rounded-lg items-center justify-center`}
        >
          <Text style={tw`text-lg text-blue-500 font-medium`}>Lihat semua</Text>
        </TouchableOpacity>
        <View style={tw`flex-row flex-wrap justify-between mt-4`}>
          <MainProductDisplay />
          <MainProductDisplay />
          <MainProductDisplay />
          <MainProductDisplay />
        </View>
      </View>
    </MainContainer>
  );
};
export default DetailProduct;
