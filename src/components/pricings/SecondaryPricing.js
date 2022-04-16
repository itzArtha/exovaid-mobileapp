import { Text } from "react-native";
import tw from "twrnc";
import { formatNumber } from "react-native-currency-input";

const SecondaryPricing = (props) => {
  const actualPrice = formatNumber(props.actualPrice, {
    prefix: "Rp",
    delimiter: ".",
  });

  return (
    <Text style={tw`font-medium text-red-500 text-base mt-2`}>
      {actualPrice}
    </Text>
  );
};
export default SecondaryPricing;
