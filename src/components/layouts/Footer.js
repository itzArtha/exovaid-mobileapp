import { Image, TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Footer = ({ navigation }) => {
  return (
    <View style={tw`my-20`}>
      <View style={tw`p-4 bg-blue-50`}>
        <View style={tw`flex-row flex-wrap`}>
          <Image
            style={tw`w-12 h-12 mr-2`}
            source={require("../../../assets/icons/icon-no-bg.png")}
          />
          <Image
            style={tw`my-auto ml-2`}
            source={require("../../../assets/logos/logo-footer.png")}
          />
        </View>
        <View style={tw`mt-8`}>
          <Text style={tw`text-base text-justify font-normal text-gray-400`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <View style={tw`bg-white mt-8`}>
          <Collapse
            style={tw`py-2 px-4 border border-gray-200 border-b-0 rounded-t`}
          >
            <CollapseHeader>
              <View style={tw`flex-row justify-between`}>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    Layanan kami
                  </Text>
                </View>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    <MaterialCommunityIcons
                      name="arrow-down"
                      color={"#000000"}
                      size={18}
                    />
                  </Text>
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={tw`mt-2`}>
              <Text style={tw`font-thin text-base`}>Kebijakan</Text>
              <Text style={tw`font-thin text-base`}>Privasi</Text>
              <Text style={tw`font-thin text-base`}>Pertanyaan</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={tw`py-2 px-4 border border-gray-200 border-b-0`}>
            <CollapseHeader>
              <View style={tw`flex-row justify-between`}>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    Lainnya
                  </Text>
                </View>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    <MaterialCommunityIcons
                      name="arrow-down"
                      color={"#000000"}
                      size={18}
                    />
                  </Text>
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={tw`mt-2`}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("AboutUs");
                }}
              >
                <Text style={tw`font-thin text-base`}>Tentang kami</Text>
              </TouchableOpacity>
              <Text style={tw`font-thin text-base`}>Karir</Text>
              <Text style={tw`font-thin text-base`}>Blog</Text>
              <Text style={tw`font-thin text-base`}>Unggah karya</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={tw`py-2 px-4 border border-gray-200 rounded-b`}>
            <CollapseHeader>
              <View style={tw`flex-row justify-between`}>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    Hubungi kami
                  </Text>
                </View>
                <View>
                  <Text style={tw`font-medium text-center text-base`}>
                    <MaterialCommunityIcons
                      name="arrow-down"
                      color={"#000000"}
                      size={18}
                    />
                  </Text>
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={tw`mt-2`}>
              <Text style={tw`font-thin text-base`}>info@exova.com</Text>
              <Text style={tw`font-thin text-base`}>
                Denpasar, Bali, Indonesia
              </Text>
            </CollapseBody>
          </Collapse>
        </View>
      </View>
      <View style={tw`mt-2 mb-12`}>
        <Text style={tw`text-base text-center font-normal text-gray-400`}>
          <MaterialCommunityIcons
            name="copyright"
            color={"rgba(0,0,0,0.28)"}
            size={18}
          />{" "}
          2022 Exova Indonesia - All right reserved.
        </Text>
      </View>
    </View>
  );
};
export default Footer;
