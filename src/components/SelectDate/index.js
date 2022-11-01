import {Text, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import NextButton from "../Buttons/NextButton";
import Card from "../Cards/Card";

function SelectDate ( props ){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('')

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // setDate(date)
        hideDatePicker();
    };

    const handlePressNextButton = () => {
        props.navigation.navigate("HourScreen")
    }

    return (
        <View style={{height:"100%", display: "flex", justifyContent: "space-around",  paddingHorizontal: 16}}>
            <Card>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ padding: 16, width: '100%'}}>
                    <Text style={{ width: '100%', textAlign: 'center' }}>Selecione o dia da reunião</Text>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ padding: 16, width: '100%', height: '' }}>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{
                            width: "100%",
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            borderRadius: 14,
                            backgroundColor: "#2496ef",
                        }}
                    >
                        <Text style={{color: "white", fontSize: 18}}>Selecionar</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    </View>
                </View>
            </Card>

            <Card>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ padding: 16, width: '100%'}}>
                        <Text style={{ width: '100%', textAlign: 'center', color: '#7D7D7D' }}>Data selecionada</Text>
                        <Text style={{ width: '100%', textAlign: 'center' }}>{date}</Text>
                    </View>
                </View>
            </Card>
            
            <NextButton onPress={handlePressNextButton}/>

        </View>
    )
}

export default SelectDate
