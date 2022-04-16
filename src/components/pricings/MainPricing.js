import { formatNumber } from "react-native-currency-input";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

const MainPricing = (props) => {
  const actualPrice = formatNumber(props.actualPrice, {
    prefix: "Rp",
    delimiter: ".",
  });
  const promoPrice = formatNumber(props.promoPrice, {
    prefix: "Rp",
    delimiter: ".",
  });

  const promoPercentage = Math.ceil(
    ((props.actualPrice - props.promoPrice) / props.actualPrice) * 100
  );
  return (
    <View>
      {props.promoPrice ? (
        <View>
          <View>
            <Text style={tw`text-gray-400`}>
              <Text style={tw`font-medium text-2xl line-through`}>
                {actualPrice}
              </Text>
              <Text>/project</Text>
            </Text>
          </View>

          <View style={tw`mt-4 mb-2`}>
            <Pressable
              style={tw.style(
                `bg-red-50 border-red-200 p-2 rounded-lg border`,
                {
                  alignSelf: "flex-start",
                }
              )}
            >
              <Text style={tw`text-red-800 font-medium`}>
                Promo {promoPercentage}%
              </Text>
            </Pressable>
          </View>
          <View>
            <Text style={tw`text-gray-400`}>
              <Text style={tw`font-bold text-red-600 text-3xl`}>
                {promoPrice}
              </Text>
              <Text>/project</Text>
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <Text style={tw`text-gray-400`}>
            <Text style={tw`font-bold text-red-600 text-3xl`}>
              {actualPrice}
            </Text>
            <Text>/project</Text>
          </Text>
        </View>
      )}
    </View>
  );
};
export default MainPricing;
