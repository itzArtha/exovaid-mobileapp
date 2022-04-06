import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Home from "../../user/Home";
import Products from "../../user/explore/Products";
import Profile from "../../user/Profile";
import Chat from "../../user/chats/Chat";
import { RightButton, LeftButton } from "./Header";

const Menu = () => {
  const Tab = createBottomTabNavigator();

  const NearbyButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          paddingTop: 12,
          paddingLeft: 4,
          borderRadius: 35,
          backgroundColor: "#226FEE",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerLeft: (props) => <LeftButton className={"ml-4"} {...props} />,
        headerRight: (props) => <RightButton className={"mr-4"} {...props} />,
        tabBarActiveTintColor: "#226FEE",
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          height: 64,
          right: 20,
          borderRadius: 32,
          elevation: 0,
          paddingBottom: 12,
          shadow: 10,
          border: 0,
          backgroundColor: "#ffffff",
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Products}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shopping-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={Products}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-search-outline"
              color={"#ffffff"}
              size={32}
            />
          ),
          tabBarLabel: "",
          tabBarButton: (props) => <NearbyButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "#226FEE" },
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="comment-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Menu;
