import { useToast } from "native-base";

const Toast = (title) => {
  const toast = useToast();
  return toast.show({
    title: title,
    placement: "top",
    backgroundColor: "emerald.500",
  });
};
export default Toast;
