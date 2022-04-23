import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailProduct from "./src/user/explore/DetailProduct";
import Menu from "./src/components/layouts/Menu";
import { LeftButton, RightButton } from "./src/components/layouts/Header";
import PublicProfile from "./src/freelancer/PublicProfile";
import Chat from "./src/user/chats/Chat";
import AboutUs from "./src/user/abouts/AboutUs";
import EditBiodata from "./src/user/profiles/EditBiodata";
import Transaksi from "./src/user/profiles/Transaksi";
import DetailTransaksi from "./src/user/profiles/DetailTransaksi";
import Daftar from "./src/auth/Daftar";

export default function App() {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitle: "",
          headerBackTitle: "",
          // headerLeft: (props) => <LeftButton {...props} />,
          headerRight: (props) => <RightButton {...props} />,
          headerStyle: {
            marginRight: 10,
            marginLeft: 10,
          },
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <HomeStack.Screen
          name="Menu"
          options={{ headerShown: false }}
          component={Menu}
        />
        <HomeStack.Screen
          options={{ headerShown: true }}
          name="Chat"
          component={Chat}
        />
        <HomeStack.Screen name="Product" component={DetailProduct} />
        <HomeStack.Screen name="Freelancer" component={PublicProfile} />
        <HomeStack.Screen name="EditBiodata" component={EditBiodata} />
        <HomeStack.Screen name="Transaksi" component={Transaksi} />
        <HomeStack.Screen name="AboutUs" component={AboutUs} />
        <HomeStack.Screen name="DetailTransaksi" component={DetailTransaksi} />
        <HomeStack.Screen name="Daftar" component={Daftar} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
