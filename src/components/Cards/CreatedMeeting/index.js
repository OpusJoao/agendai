import { View, TouchableOpacity, Text } from "react-native";
import { Card, Duration, Title, Time, LineTop, Line, LinkContainer } from "./styles";

export default function CreatedMeeting() {
  return (
    <Card>
      <View style={{ padding: 8 }}>
        <LineTop />
        <Duration>30 MIN</Duration>
        <Title>Reunião de 30 minutos com o Pedro</Title>
        <Time>01/10/2022 12:30 - 13:00</Time>
      </View>
      <Line />
      <LinkContainer>
        <TouchableOpacity>
          <Text style={{fontSize: 12, color: "#FCA351"}}>Copiar Link</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 12, color: "#FCA351"}}>Copiar link de uso único</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 12, color: "#FCA351"}}>Duplicar</Text>
        </TouchableOpacity>
      </LinkContainer>
    </Card>
  )
}