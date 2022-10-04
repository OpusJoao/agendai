import {CreateMeeting} from './styles.js'
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome'
export default function CreateMeetingButton({onPress}){
  return (
    <CreateMeeting onPress={onPress}>
      <IconsFontAwesome name="calendar-plus-o" size={24} color={"#fff"} />
    </CreateMeeting>
  )
}