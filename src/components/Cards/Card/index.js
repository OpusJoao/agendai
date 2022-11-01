import { View, TouchableOpacity, Text } from "react-native";
import { CardBody, Duration, Title, Time, LineTop, Line, LinkContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({duration = '', title = '', time = '', lessContent = false, children}) {
  return (
    <CardBody>
      {children && children}
    </CardBody>
  )
}