import { View, TouchableOpacity, Text } from "react-native";
import { Card, Duration, Title, Time, LineTop, Line, LinkContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CreatedMeeting({duration = '', title = '', time = '', lessContent = false}) {
  return (
    <Card>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <LineTop />
        <View style={{ padding: 8 }}>
          <Duration>{duration}</Duration>
          <Title>{title}</Title>
          <Time>{time}</Time>
        </View>
        <TouchableOpacity style={{ display:'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 16}}>
          <Icon name="angle-right" size={24} color="#666" />
        </TouchableOpacity>
      </View>
      <Line />

      {!lessContent && (
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
      )}
    </Card>
  )
}