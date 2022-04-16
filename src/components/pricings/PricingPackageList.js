import { ScrollView, View } from "react-native";
import tw from "twrnc";
import UnderlineOpacityButton from "../buttons/UnderlineOpacityButton";
import PricingPackage from "./PricingPackage";

const PricingPackageList = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={tw`flex-row flex-wrap`}
      horizontal={true}
    >
      <View style={tw`mx-2`}>
        <PricingPackage highlight={true} />
      </View>
      <View style={tw`mx-2`}>
        <PricingPackage />
      </View>
      <View style={tw`mx-2`}>
        <PricingPackage />
      </View>
    </ScrollView>
  );
};
export default PricingPackageList;
