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
import { FlatListSlider } from "react-native-flatlist-slider";
import ImagePreview from "../../components/products/ImagePreview";
import IconWithText from "../../components/IconWithText";
import MainProductDisplay from "../../components/products/MainProductDisplay";
import MainButton from "../../components/buttons/MainButton";
import TextButton from "../../components/buttons/TextButton";
import OpacityButton from "../../components/buttons/OpacityButton";
import SecondaryReview from "../../components/reviews/SecondaryReview";
import MainPricing from "../../components/pricings/MainPricing";
import WishlistIcon from "../../components/wishlists/WishlistIcon";
import ShareButton from "../../components/buttons/ShareButton";
import { useState } from "react";
import UnderlineOpacityButton from "../../components/buttons/UnderlineOpacityButton";
import ProductList from "../../components/products/ProductList";

const DetailProduct = ({ navigation }) => {
  const [showDetail, setShowDetail] = useState("description");
  const [wishlist, setWishlist] = useState(false);
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
      navigation={navigation}
      floatingComponent={
        <View style={tw`absolute bottom-10 left-10 right-10`}>
          <MainButton>Chat Freelancer</MainButton>
        </View>
      }
    >
      <View>
        <Text style={tw`text-5xl font-medium`}>Cinematic Bali Event</Text>
      </View>
      <View style={tw`flex-row justify-between my-4`}>
        <SecondaryReview>4.8/5 (24 Ulasan)</SecondaryReview>
        <View style={tw`flex-row`}>
          <View style={tw`mr-1 my-auto`}>
            <WishlistIcon id={1} isWishlist={wishlist} />
          </View>
          <View style={tw`ml-1 my-auto`}>
            <ShareButton />
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
        <MainPricing actualPrice={800000} promoPrice={500000} />
      </View>
      <View>
        <IconWithText
          imageClass={"rounded-full w-16 h-16"}
          image={require("../../../assets/icons/icon-bg.png")}
          label={
            <View>
              <Text style={tw`text-lg font-medium`}>Exova Media</Text>
              <TextButton
                onPress={() => {
                  navigation.navigate("Freelancer");
                }}
                className={"text-base"}
              >
                Lihat detail profil
              </TextButton>
            </View>
          }
        />
      </View>
      <View style={tw`my-10`}>
        <View style={tw`flex-row`}>
          <View style={tw`mr-3`}>
            <UnderlineOpacityButton
              onPress={() => {
                setShowDetail("description");
              }}
              active={showDetail === "description"}
            >
              Deskripsi
            </UnderlineOpacityButton>
          </View>
          <View style={tw`ml-3`}>
            <UnderlineOpacityButton
              onPress={() => {
                setShowDetail("reviews");
              }}
              active={showDetail === "reviews"}
            >
              Ulasan
            </UnderlineOpacityButton>
          </View>
        </View>
        {showDetail === "description" ? (
          <View style={tw`my-4`}>
            <Text style={tw`font-normal text-gray-400 text-lg`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              sed tortor cum pellentesque facilisi nec eget. Fringilla
              sollicitudin sit vitae orci eu. Sed volutpat vestibulum eleifen...
            </Text>
            <TextButton className={"underline text-lg"}>
              Baca Selengkapnya
            </TextButton>
          </View>
        ) : (
          <View style={tw`my-4`}>
            <Text style={tw`font-normal text-gray-400 text-lg`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <TextButton className={"underline text-lg"}>
              Baca Selengkapnya
            </TextButton>
          </View>
        )}
      </View>
      <View style={tw`mb-10`}>
        <Text style={tw`font-semibold text-black text-2xl`}>
          Lainnya dari<Text style={tw`text-blue-600`}> Exova Media</Text>
        </Text>
        <OpacityButton>Lihat Semua</OpacityButton>
        <ProductList />
      </View>
      <View style={tw`my-4`}>
        <Text style={tw`font-semibold text-black text-2xl`}>Jasa terkait</Text>
        <OpacityButton>Lihat Semua</OpacityButton>
        <ProductList />
      </View>
    </MainContainer>
  );
};
export default DetailProduct;
