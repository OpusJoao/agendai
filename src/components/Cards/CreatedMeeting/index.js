import { View, TouchableOpacity, Text } from "react-native";
import { Card, Duration, Title, Time, LineTop, Line, LinkContainer } from "./styles";

export default function CreatedMeeting({duration = '', title = '', time = ''}) {
  return (
    <Card>
      <View style={{ padding: 8 }}>
        <LineTop />
        <Duration>{duration}</Duration>
        <Title>{title}</Title>
        <Time>{time}</Time>
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