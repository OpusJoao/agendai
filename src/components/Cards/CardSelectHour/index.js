import { ContainerBody, ContainerTitle, CustomCard, ExpandButton, TextTitle } from "./styles";
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Text } from "react-native";
import SelectHourButton from "../../Buttons/SelectHourButton";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";

export default function CardSelectHour({title, durationOfMeeting, InitialHour, expanded = false, onPressTitle = () => {}}){
    const colors = {
        withContent: "#FCA351",
        withNoContent: "#D9D9D9" 
    }
    const [hours, setHours] = useState({
        "hours": []
    })

    const [hasHourActive, setHasHourActive] = useState(false)

    function changeHourActive(id){
        if(!id) return 
        let currentHours = hours.hours;
        currentHours.map( hour => {
            if(hour.id === id){
                hour.selected = !hour.selected;
            }
        }) 
        setHours({"hours": currentHours})

        setHasHourActive(hasAnyHourActive())
    }

    function hasAnyHourActive(){
        const currentHours = hours.hours
        return currentHours.some(hour => hour?.selected)
    }

    function generateHours(){
        const quantityOfMeetingsInAnHour = 60 / durationOfMeeting
        let finalResult = []
        let id = 1
        for(let individualMeeting = 0; individualMeeting < quantityOfMeetingsInAnHour; individualMeeting++){
            const minutes = (0 + (individualMeeting * durationOfMeeting));
            const minutesFormated = setOneDigitNumberToTwo(minutes)
            const hourFormated = setOneDigitNumberToTwo(InitialHour)
            finalResult.push({
                id: id,
                hour: `${hourFormated}:${minutesFormated}`,
                selected: false
            })
            id += 1
        }

        setHours({"hours": finalResult})
    }

    function setOneDigitNumberToTwo(number){
        return number < 10 ? `0${number}`: `${number}`
    }

    function handleRenderHourButton({item}){
        return <SelectHourButton text={item.hour} onPress={()=> changeHourActive(item.id)} isActive={item.selected} />
    }

    useEffect(() => {
        generateHours();
    }, [durationOfMeeting])

    return (
        <CustomCard>
            <ContainerTitle onPress={onPressTitle}>
                <IconEntypo name="dot-single" size={24} color={hasHourActive ? colors.withContent : colors.withNoContent}/>
                <TextTitle>{title}</TextTitle>
                <ExpandButton>
                    <IconEntypo name={!expanded ? 'chevron-down': 'chevron-up'} size={16} color={'#7D7D7D'}/>
                </ExpandButton>
            </ContainerTitle>
            <ContainerBody expanded={expanded}>
                <FlatList
                    scrollEnabled={false}
                    renderItem={handleRenderHourButton} 
                    data={hours.hours} 
                    numColumns={4} 
                    keyExtractor={(item) => item.id }
                    />
            </ContainerBody>
        </CustomCard>
    )
}