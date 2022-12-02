import { ScrollView, StatusBar, Text, View, ActivityIndicator, RefreshControl } from "react-native";
import Header from "../../components/Header";
import CreatedMeeting from "../../components/Cards/CreatedMeeting";
import CreateMeetingButton from "../../components/Buttons/CreateMeetingButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreateMeetingScreen from "../CreateMeeting";
import SelectHour from "../SelectHour";
import SendMeeting from "../SendMeeting";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "@env"
import axios from 'axios'
import DefaultButton from "../../components/Buttons/DefaultButton";


const Stack = createNativeStackNavigator()

function Home(props){
  const [isLoading, setIsLoading] = useState(true)
  const [createdMeetings, setCreatedMeetings] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [hasTimeout, setHasTimeout] = useState(false)
  const [tryagain, setTryAgain] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleCreateMettingOnPress(){
    props.navigation.push("CreateMeetingScreen")
  }

  function handleOnPressTryAgainButton(){
    setTryAgain(true)
  }

  function getCreatedMeetings(){
    if(isLoading){
      return (
        <View style={{marginTop: 20}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }else if(hasTimeout && !success){
      return (
      <View style={{marginTop: 20, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Não foi possível buscar as reuniões</Text>
            <DefaultButton onPress={handleOnPressTryAgainButton}>
              <Text style={{color: '#fff'}}>Tentar novamente</Text>
            </DefaultButton>
      </View>)
    }else{
      if(createdMeetings.length > 0){
        return createdMeetings.map(meeting => <CreatedMeeting key={meeting.id} duration={'30 min'} title={meeting.name} time={`${meeting.day} ${meeting.startTime} - ${meeting.endTime}`}/>)
      }else{
        return (
          <View style={{marginTop: 20 , justifyContent:'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>Você ainda não criou uma reunião!</Text>
            <Text style={{fontSize: 16}}>Crie uma e bora lá!</Text>
          </View>
        )
      }
    }
    
    
  }
  function handleOnRefresh(){
    setSuccess(false)
    setTryAgain(false)
    setTimeout(()=>{
      setRefreshing(false)
      setHasTimeout(true)
    }, 10 * 1000)
    setRefreshing(true)
    axios.get(`${API_URL}/meeting?userId=2`,)
    .then(result => result.data)
    .then(result => {
      setCreatedMeetings(result.meetings)
      setSuccess(true)
    }).catch(e => {
      console.error(e);
    }).finally(() => {
      setRefreshing(false)
      setHasTimeout(false)

    })
  }

  useEffect(()=>{
    setSuccess(false)
    setTryAgain(false)
    setTimeout(()=>{
      setIsLoading(false)
      setHasTimeout(true)
    }, 10 * 1000)

    setTimeout(() => {
      console.log(`${API_URL}/meeting?userId=2`)
      axios.get(`${API_URL}/meeting?userId=2`)
      .then(result => result.data)
      .then(result => {
        setCreatedMeetings(result.meetings)
      setSuccess(true)
      }).catch(e => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false)
        setHasTimeout(false)
      })
    }, 1000)
  }, [tryagain])
  return (
  <View>
    <StatusBar backgroundColor={"#FCA351"}/>
    <CreateMeetingButton onPress={handleCreateMettingOnPress}/>
    <ScrollView style={{minHeight:"100%"}}
      refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={handleOnRefresh}
          />
        }
    >
      <Header />
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ fontWeight: 'bold', color: '#5E5E5E' }}>Reuniões criadas</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <ScrollView>
          {getCreatedMeetings()}
        </ScrollView>
      </View>
    </ScrollView>
  </View>
  )
}

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      sceneContainerStyle={{backgroundColor: '#fff'}}
    >
      <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="CreateMeetingScreen" component={CreateMeetingScreen} options={{headerTitle: "Criar Reunião"}}/>
      <Stack.Screen name="SelectHourScreen" component={SelectHour} options={{headerTitle: "Selecionar Horário"}}/>
      <Stack.Screen name="SendMeetingScreen" component={SendMeeting} options={{headerTitle: "Enviar reunião"}}/>

    </Stack.Navigator>
  )
}