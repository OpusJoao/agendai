import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import { HeaderContainer, UserButton, WelcomeText } from './styles'
export default function Header({ lessContent = false }){
  
  return (
    <HeaderContainer>
      <View style={{marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <UserButton>
          <Icon name="user" size={20} color="#fff"/>
        </UserButton>
        <TouchableOpacity>
          <IconMI name="help-outline" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
      {!lessContent && ( <WelcomeText>Olá, João</WelcomeText> )}
    </HeaderContainer>
  )
}