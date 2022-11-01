import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function NextButton({onPress}){
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: '100%',
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 14,
                shadowRadius: 7,
                backgroundColor: '#FCA351',
            }}
        >
            <Text style={{fontSize: 18}}>
                <Icon name="arrowright" size={30} color="#fff" />
            </Text>
        </TouchableOpacity>
    )
}
