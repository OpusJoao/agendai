import { Text, View } from "react-native";
import InputWithIcon from "../../components/Input/InputWithIcon";
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from "../../components/Cards/Card";
import NextButton from "../../components/Buttons/NextButton";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { useState } from "react";
import { useMemo } from "react";

const INITIAL_DATE = CalendarUtils.getCalendarDateString(new Date())

export default function CreateMeetingScreen(props){
    const [day, setDay] = useState(INITIAL_DATE)
    const [nameMeeting, setNameMeeting] = useState('')
   
    const marked = useMemo(() => {
        return {
          [INITIAL_DATE]: {
            selectedColor: 'transparent',
            selectedTextColor: 'black'
          },
          [day]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
          }
        };
      }, [day]);

    function handleOnChangeNameMeeting(value){
        setNameMeeting(value)
    }

    function handlePressNextButton(){
        props.navigation.navigate("SelectHourScreen", {date: day})
    }
    return (
    <View style={{backgroundColor: '#fff', height: '100%', padding: 16, justifyContent: 'space-between'}}>
        <InputWithIcon icon={<Icon name="calendar-o" size={16} color={'#FCA351'}/>} onChange={handleOnChangeNameMeeting} value={nameMeeting} placeholder='Insira um título.'/>
        <Card>
            <View style={{width: '100%', height: '65%'}}>
            <Calendar 
                onDayPress={day => {
                    setDay(day.dateString)
                }}
                markedDates={marked}
            />
            </View>
        </Card>
        <Card>
            <View style={{width: '100%', height: 48, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#7D7D7D', fontWeight: 'bold'}}>Dia selecionado</Text>
                <Text>{day}</Text>
            </View>
        </Card>
        <NextButton onPress={handlePressNextButton}/>
    </View>
    )
}