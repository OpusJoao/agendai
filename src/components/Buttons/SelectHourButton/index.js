import { Text, View } from "react-native"
import { ActiveButton, ButtonText, NotActiveButton } from "./styles"

export default function SelectHourButton({isActive = false, onPress = ()=>{}, text =''}){
    return (
        <View>
            {isActive && 
                <ActiveButton onPress={onPress}>
                    <ButtonText>{text}</ButtonText>
                </ActiveButton>
            }
            {!isActive && 
                <NotActiveButton onPress={onPress}>
                    <ButtonText>{text}</ButtonText>
                </NotActiveButton>
            }
        </View>
    )
}