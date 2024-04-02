import { Alert } from "react-native";

export default function EmptyInputAlert() {
  Alert.alert(
    "Empty input",
    "Please enter the name of the goal",
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
}
