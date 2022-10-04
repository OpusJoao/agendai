import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import Picker from '@ouroboros/react-native-picker';
import NextButton from "../Buttons/NextButton";


function PickerDisplay({text}){
    return(
        <View style={{width: "100%", backgroundColor: "#2496ef", padding: 8, borderRadius: 5}}>
            <Text style={{color: 'white'}}> {text} </Text>
        </View>
    )
}

function TimeDurationOfMeeting({currentValue = 5, onSelect}){
    return(
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Text style={{marginHorizontal: 8}}>Tempo de duração da reunião</Text>
            <Picker
                component={PickerDisplay}
                onChanged={onSelect}
                value={currentValue}
                options={[
                    {value: 5, text: '5 min'},
                    {value: 10, text: '10 min'},
                    {value: 15, text: '15 min'},
                    {value: 30, text: '30 min'},
                    {value: 45, text: '45 min'},
                    {value: 60, text: '60 min'}
                ]}
                style={{borderWidth: 1, borderColor: '#a7a7a7', borderRadius: 5, marginBottom: 5, padding: 5}}
            />
        </View>
    )
}

function HourItem({ hour = '--:--', selected = false, onPress }){
    const backgroundColor = selected ? '#2496ef' : 'white'
    const color = selected ? 'white' : '#2496ef'
    return (
        <TouchableOpacity style={{
            padding: 8,
            margin: 8,
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            borderWidth: 1,
            borderColor: '#2496ef',
            backgroundColor: backgroundColor,
        }}
        onPress={onPress}
        >
            <Text style={{
                color: color,
            }}>{ hour }</Text>
        </TouchableOpacity>
    )
}

function SelectHour ( props ){
    const [hourAvailable, setHourAvailable] = useState([
        { id: 1, hour: '09:00', selected: false},
    ])
    const [selectedHourAvailable, setSelectedHourAvailable ] = useState([])
    const [durationOfMeeting, setDurationOfMeeting] = useState(5)

    const handlePressBackButton = () => {
        props.navigation.navigate("DateScreen")
    }

    const handlePressHourItem = (idHourAvailable) => {
        setHourAvailable(hourAvailable.map(hourAvailable => {
            if(idHourAvailable == hourAvailable.id){
                hourAvailable.selected = !hourAvailable.selected
            }
            return hourAvailable
        }))
    }

    const generateHourAvailable = ( durationOfMeeting ) => {
        const quantityOfMeetingsInAnHour = 60 / durationOfMeeting
        const commonHours = [
            9,10,11,12,13,14,15,16,17,18
        ]
        let finalResult = []
        let id = 0
        for (const hour of commonHours){
            for(let individualMeeting = 0; individualMeeting < quantityOfMeetingsInAnHour; individualMeeting++){
                finalResult.push({
                    id: id,
                    hour: `${hour}:${(0 + (individualMeeting * durationOfMeeting))}`,
                    selected: false
                })
                id += 1
            }
            id += 1
        }

        setHourAvailable(finalResult)
    }
    useEffect(()=>{
        generateHourAvailable(durationOfMeeting)
        console.log(hourAvailable)
    },[durationOfMeeting])

    return (
        <ScrollView >
            <View style={{height:"100%", display: "flex", justifyContent: "space-around", alignItems: "center",  paddingHorizontal: 24}}>
                <Text style={{marginVertical: 16, fontSize: 18, textAlign: "center"}}>Selecione os horários disponiveis de acordo com sua disponibilidade</Text>
                <TimeDurationOfMeeting onSelect={setDurationOfMeeting} currentValue={durationOfMeeting}/>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 4,
                    flexWrap: "wrap",
                    marginTop: 8
                }}>
                    { hourAvailable.length > 0 && hourAvailable.map(hourAvailable => <HourItem key={hourAvailable.id} hour={hourAvailable.hour} selected={hourAvailable.selected} onPress={()=> handlePressHourItem(hourAvailable.id)}/>) }
                </View>
                {/*<NextButton/>*/}
            </View>

        </ScrollView>
    )
}
 export default SelectHour
