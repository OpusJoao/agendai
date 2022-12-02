import { ActivityIndicator, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import DefaultButton from "../../components/Buttons/DefaultButton";
import InputWithIcon from "../../components/Input/InputWithIcon";
import { StackActions } from '@react-navigation/native';
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "@env"
import axios from 'axios'

export default function SendMeeting(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [tryAgain, setTryAgain ] = useState(false)
    function handleOnPressDefaultButton() {
        props.navigation.dispatch(StackActions.popToTop());
    }

    function handleTryAgain(){
        setIsLoading(true)
        setTryAgain(true)
    }

    function sendRequestToCreate(){
        const { nameMeeting, date, timeDuration, hoursAvailable } = props?.route?.params;
        setTimeout(()=>{
            console.log(`${API_URL}/meeting`)
            axios.post(`${API_URL}/meeting`,{ 
                name: nameMeeting, 
                date, 
                timeDuration, 
                hoursAvailable 
            }).then((response) => {
                if(response.status != 201){
                    throw 'Erro ao tentar criar Reuniao'
                }
              })
              .catch(e => {
                console.log(e)
                setHasError(true)
              })
              .finally(()=>{
                setIsLoading(false)
              });
        }, 1000)
        
    }

    function loadContent() {
        const textWhileTryinToCreateMeeting = hasError ? 'Guenta mão, estamos tentando criar a reunião de novo!' :'Me parece tudo certo! Criando reunião!'
        if(isLoading){
            return (
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, padding: 4, marginBottom: 16 }}>{textWhileTryinToCreateMeeting}</Text>
                <ActivityIndicator size='large' />
            </View>)
        } else if(hasError){
            return (
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, padding: 4, marginBottom: 16 }}>Ocorreu um erro com a criação da sua reunião :/. Tente novamente em alguns instantes!</Text>
                <View style={{ marginTop: 16, width: '100%' }}>
                        <DefaultButton onPress={handleTryAgain}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Tentar Novamente</Text>
                        </DefaultButton>
                    </View>
            </View>
            
            )
        }else{
            return (
                <View>
                    <Text style={{ fontSize: 22, padding: 4, marginBottom: 16 }}>Uhu! Você criou a reunião! Agora você deve nos informar o e-mail do outro participante para podermos comunicá-lo!</Text>
                    <InputWithIcon icon={<Icon name="mail" size={16} color={'#FCA351'} />} placeholder='Insira o email' />
                    <View style={{ marginTop: 16 }}>
                        <DefaultButton onPress={handleOnPressDefaultButton}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Enviar</Text>
                        </DefaultButton>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <DefaultButton onPress={handleOnPressDefaultButton}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Fechar</Text>
                        </DefaultButton>
                    </View>
                </View>)
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            sendRequestToCreate()
            setHasError(false)
            setTryAgain(false)
        }, 3 * 1000)
    }, [tryAgain])

    return (
        <View style={{ backgroundColor: "#fff", minHeight: "100%", padding: 16 }}>
            {loadContent()}
        </View>
    )
}