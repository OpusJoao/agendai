import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header";
import CreatedMeeting from "../../components/Cards/CreatedMeeting";
import CreateMeetingButton from "../../components/Buttons/CreateMeetingButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SelectDate from "../../components/SelectDate";

const Stack = createNativeStackNavigator()

function Home(props){
  function handleCreateMettingOnPress(){
    props.navigation.push("SelectDateScreen")
  }
  return (
  <View>
    <CreateMeetingButton onPress={handleCreateMettingOnPress}/>
    <ScrollView style={{minHeight:"100%"}}>
      <Header />
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ fontWeight: 'bold', color: '#5E5E5E' }}>Reuniões criadas</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <CreatedMeeting duration={'30 min'} title={'Reunião de 30 minutos com o Pedro'} time={'01/10/2022 12:30 - 13:00'}/>
        <CreatedMeeting duration={'35 min'} title={'Reunião de 35 minutos com o Pedro'} time={'02/10/2022 12:30 - 13:05'}/>
      </View>
    </ScrollView>
  </View>
  )
}

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="SelectDateScreen" component={SelectDate} options={{headerTitle: ""}}/>
    </Stack.Navigator>
    
  )
}