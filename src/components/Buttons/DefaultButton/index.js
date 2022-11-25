import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function DefaultButton({onPress, children}){
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: '100%',
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 14,
                shadowRadius: 7,
                backgroundColor: '#FCA351',
            }}
        >
            {children}
        </TouchableOpacity>
    )
}
