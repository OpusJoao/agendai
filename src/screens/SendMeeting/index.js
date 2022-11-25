import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import DefaultButton from "../../components/Buttons/DefaultButton";
import InputWithIcon from "../../components/Input/InputWithIcon";
import { StackActions } from '@react-navigation/native';


export default function SendMeeting(props){
    function handleOnPressDefaultButton(){
        props.navigation.dispatch(StackActions.popToTop());
    }
    return (
        <View style={{backgroundColor: "#fff", minHeight: "100%", padding: 16}}>
            <View>
                <Text style={{fontSize: 22, padding: 4, marginBottom: 16}}>Uhu! Você criou a reunião! Agora você deve nos informar o e-mail do outro participante para podermos comunicá-lo!</Text>
                <InputWithIcon icon={<Icon name="mail" size={16} color={'#FCA351'} />} placeholder='Insira o email' />
            </View>
            <View style={{marginTop: 16}}>
                <DefaultButton onPress={handleOnPressDefaultButton}>
                    <Text style={{color: '#fff', fontSize: 18}}>Enviar</Text>
                </DefaultButton>
            </View>
        </View>
    )
}