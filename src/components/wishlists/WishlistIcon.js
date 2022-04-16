import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { useToast } from "native-base";
import { useState } from "react";

const WishlistIcon = (props) => {
  const toast = useToast();
  const [wishlist, setWishlist] = useState(props.isWishlist);
  const Toast = (title) => {
    toast.show({
      title: title,
      placement: "top",
      backgroundColor: "emerald.500",
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        Toast("Berhasil menambahkan ke wishlist" + props.id);
        setWishlist(!wishlist);
      }}
    >
      <MaterialCommunityIcons
        name={wishlist ? "heart" : "heart-outline"}
        color={wishlist ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.41)"}
        size={20}
      />
    </TouchableOpacity>
  );
};
export default WishlistIcon;
