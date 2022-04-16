import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailProduct from "./src/user/explore/DetailProduct";
import Menu from "./src/components/layouts/Menu";
import { LeftButton, RightButton } from "./src/components/layouts/Header";
import PublicProfile from "./src/freelancer/PublicProfile";
import Chat from "./src/user/chats/Chat";

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
        <HomeStack.Screen name="Chat" component={Chat} />
        <HomeStack.Screen name="Product" component={DetailProduct} />
        <HomeStack.Screen name="Freelancer" component={PublicProfile} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
