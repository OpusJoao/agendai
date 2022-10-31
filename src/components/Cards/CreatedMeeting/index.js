import { View, TouchableOpacity, Text } from "react-native";
import { Card, Duration, Title, Time, LineTop, Line, LinkContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const colorText = '#FCA351'

export default function CreatedMeeting({duration = '', title = '', time = '', lessContent = false}) {
  return (
    <Card>
      <TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <LineTop />
          <View style={{ padding: 8 }}>
            <Duration>{duration}</Duration>
            <Title>{title}</Title>
            <Time>{time}</Time>
          </View>
          <View style={{ display:'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 16}}>
            <Icon name="angle-right" size={24} color="#666" />
          </View>
        </View>
        <Line />
      </TouchableOpacity>

        {!lessContent && (
          <LinkContainer>
            <TouchableOpacity>
              <Text style={{fontSize: 12, color: colorText}}>Copiar Link</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 12, color: colorText}}>Copiar link de uso único</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 12, color: colorText}}>Duplicar</Text>
            </TouchableOpacity>
          </LinkContainer>
        )}
    </Card>
  )
}