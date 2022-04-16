import { View, Text, Image, ScrollView } from "react-native";
import tw from "twrnc";
import MainContainer from "../components/layouts/MainContainer";
import MainButton from "../components/buttons/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UnderlineOpacityButton from "../components/buttons/UnderlineOpacityButton";
import ProductList from "../components/products/ProductList";
import { useState } from "react";
import PricingPackageList from "../components/pricings/PricingPackageList";
import FreelancerBio from "../components/about/FreelancerBio";
const PublicProfile = ({ navigation }) => {
  const [selectedMenu, setSelectedMenu] = useState("albums");
  const Menu = (value) => {
    switch (value) {
      case "albums":
        return <ProductList />;

      case "projects":
        return 0;

      case "pricings":
        return <PricingPackageList />;

      case "freelancer":
        return <FreelancerBio />;
    }
  };
  return (
    <MainContainer>
      <View style={tw`mt-8`}>
        <Image
          style={tw`w-32 h-32 rounded-full`}
          source={{ uri: "https://i.ibb.co/HPbhQvY/IMG-0363.jpg" }}
        />
      </View>
      <Text style={tw`mt-6 mb-3 text-3xl font-medium text-blue-500`}>
        Ngurah William
      </Text>
      <Text style={tw`text-base font-medium text-gray-400`}>
        Denpasar, Bali
      </Text>
      <Text style={tw`text-5xl mt-3 mb-6 font-medium text-black`}>
        Professional Photographer with Cinematic enthusiast
      </Text>
      <View style={tw`w-28`}>
        <MainButton
          onPress={() => {
            navigation.navigate("ChatList");
          }}
        >
          Hire Me{" "}
          <MaterialCommunityIcons
            name={"comment-outline"}
            color={"rgba(255,255,255,1)"}
            size={20}
          />
        </MainButton>
      </View>
      <View style={tw`mt-8`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={tw`flex-row flex-wrap`}
          horizontal={true}
        >
          <View style={tw`mx-4`}>
            <UnderlineOpacityButton
              onPress={() => {
                setSelectedMenu("albums");
              }}
              active={selectedMenu === "albums"}
            >
              Album (8)
            </UnderlineOpacityButton>
          </View>
          <View style={tw`mx-4`}>
            <UnderlineOpacityButton
              onPress={() => {
                setSelectedMenu("projects");
              }}
              active={selectedMenu === "projects"}
            >
              Project selesai (2)
            </UnderlineOpacityButton>
          </View>
          <View style={tw`mx-4`}>
            <UnderlineOpacityButton
              onPress={() => {
                setSelectedMenu("pricings");
              }}
              active={selectedMenu === "pricings"}
            >
              Daftar harga (3)
            </UnderlineOpacityButton>
          </View>
          <View style={tw`mx-4`}>
            <UnderlineOpacityButton
              onPress={() => {
                setSelectedMenu("freelancer");
              }}
              active={selectedMenu === "freelancer"}
            >
              Tentang freelancer
            </UnderlineOpacityButton>
          </View>
        </ScrollView>
        <View style={tw`mt-8`}>{Menu(selectedMenu)}</View>
      </View>
    </MainContainer>
  );
};
export default PublicProfile;
