import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import DefaultButton from "../DefaultButton";

export default function NextButton({onPress}){
    return (
        <DefaultButton onPress={onPress}>
            <Text style={{fontSize: 18}}>
                <Icon name="arrowright" size={30} color="#fff" />
            </Text>
        </DefaultButton>
    )
}
