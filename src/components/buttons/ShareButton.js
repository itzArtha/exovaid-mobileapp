import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const ShareButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <MaterialCommunityIcons
        name="share-variant"
        color={"rgba(0,0,0,0.41)"}
        size={20}
      />
    </TouchableOpacity>
  );
};
export default ShareButton;
