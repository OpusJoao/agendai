import { ScrollView, Text, View } from "react-native";
import Header from "../Header";
import CreatedMeeting from "../Cards/CreatedMeeting";
import CreateMeetingButton from "../Buttons/CreateMeetingButton";

export default function Home() {
  return (
    <View>
      <CreateMeetingButton />
      <ScrollView>
        <Header />
        <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          <Text style={{ fontWeight: 'bold', color: '#5E5E5E' }}>Reuniões criadas</Text>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <CreatedMeeting />
          <CreatedMeeting />
          <CreatedMeeting />
          <CreatedMeeting />
          <CreatedMeeting />
          <CreatedMeeting />
          <CreatedMeeting />
        </View>
      </ScrollView>
    </View>
  )
}