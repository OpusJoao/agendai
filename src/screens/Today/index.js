import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header";
import CreatedMeeting from "../../components/Cards/CreatedMeeting";
import CreateMeetingButton from "../../components/Buttons/CreateMeetingButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreateMeetingScreen from "../CreateMeeting";
import SelectHour from "../SelectHour";
import SendMeeting from "../SendMeeting";


const Stack = createNativeStackNavigator()

function Today(props){
  function handleCreateMettingOnPress(){
    props.navigation.push("CreateMeetingScreen")
  }
  return (
  <View>
    <CreateMeetingButton onPress={handleCreateMettingOnPress}/>
    <ScrollView style={{minHeight:"100%"}}>
      <Header lessContent={true}/>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ fontWeight: 'bold', color: '#5E5E5E' }}>Reuniões criadas</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <CreatedMeeting duration={'30 min'} title={'Reunião de 30 minutos com o Pedro'} time={'01/10/2022 12:30 - 13:00'} lessContent={true} />
        <CreatedMeeting duration={'35 min'} title={'Reunião de 35 minutos com o Pedro'} time={'02/10/2022 12:30 - 13:05'} lessContent={true} />
      </View>
    </ScrollView>
  </View>
  )
}

export default function TodayScreen() {
  return (
    <Stack.Navigator
      initialRouteName="TodayScreen"
    >
      <Stack.Screen name="TodayScreen" component={Today} options={{headerShown: false}}/>
      <Stack.Screen name="CreateMeetingScreen" component={CreateMeetingScreen} options={{headerTitle: "Criar Reunião"}}/>
      <Stack.Screen name="SelectHourScreen" component={SelectHour} options={{headerTitle: "Selecionar Horário"}}/>
      <Stack.Screen name="SendMeetingScreen" component={SendMeeting} options={{headerTitle: "Enviar reunião"}}/>
    </Stack.Navigator>
    
  )
}