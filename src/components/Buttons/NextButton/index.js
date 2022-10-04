import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function NextButton({onPress}){
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                margin: 12,
                width: 64,
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 14,
                shadowColor: '#171717',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 7,
                backgroundColor: 'white',
                elevation: 20
            }}
        >
            <Text style={{fontSize: 18}}>
                <Icon name="arrowright" size={30} color="#000" />
            </Text>
        </TouchableOpacity>
    )
}
