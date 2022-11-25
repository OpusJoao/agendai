import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import NextButton from "../../components/Buttons/NextButton";
import CardSelectHour from "../../components/Cards/CardSelectHour";
import CardWithBadge from "../../components/Cards/CardWithBadge";
import CardWithDropDown from "../../components/Cards/CardWithDropDown";

export default function SelectHour(props){
    const commonHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const [date, setDate] = useState('');
    const [timeDurationMeeting, setTimeDurationMeeting] = useState(5);
    const optionsTimeMeeting = [
                    {value: 5, label: '5 min'},
                    {value: 10, label: '10 min'},
                    {value: 15, label: '15 min'},
                    {value: 30, label: '30 min'},
                    {value: 45, label: '45 min'},
                    {value: 60, label: '60 min'}
    ]

    const [cardSelectHours, setCardSelectHours] = useState([])
    
    function handleSetDate(date){
        setDate(date)
    }

    function handleOnChangeDropDown(value){
        setTimeDurationMeeting(value)
    }

    function handlePressNextButton(){
        props.navigation.navigate("SendMeetingScreen")
    }

    function changeExpandStatus(hour){
        if(!hour) return 
        let currentCards = [...cardSelectHours];
        currentCards.map( card => {
            if(card.hour === hour){
                card.expanded = !card.expanded;
            }
        }) 
        setCardSelectHours(currentCards)
    }

    function generateSelectHours(){
        let selectHours = [];
        let id = 1;
        
        commonHours.map(hour => {
            selectHours.push({
                id,
                hour,
                title: `${setOneDigitNumberToTwo(hour)}:00`,
                expanded: false
            })
            id++
        })
       
        setCardSelectHours(selectHours)
    }

    function setOneDigitNumberToTwo(number){
        return number < 10 ? `0${number}`: `${number}`
    }

    useEffect(() => {
        handleSetDate(props?.route?.params?.date);
        generateSelectHours();

    }, [])
    return (
        <ScrollView style={{backgroundColor: '#fff', minHeight: '100%', padding: 16, }}>
            <CardWithBadge badgeText={date}>
                    <Text style={{ color: '#212121'}}>Selecione os horários disponíveis</Text>
            </CardWithBadge>
            <CardWithDropDown text={"Duração da reunião"} onChangeDropDown={handleOnChangeDropDown} items={optionsTimeMeeting}></CardWithDropDown>
            { cardSelectHours && cardSelectHours.map((cardSelectHour) => 
                <CardSelectHour 
                durationOfMeeting={timeDurationMeeting} 
                InitialHour={cardSelectHour.hour} 
                title={cardSelectHour.title} 
                expanded={cardSelectHour.expanded} 
                key={cardSelectHour.hour}
                onPressTitle={() => changeExpandStatus(cardSelectHour.hour)}
                />
            )}
            <NextButton onPress={handlePressNextButton}/>
        </ScrollView>
    )
}