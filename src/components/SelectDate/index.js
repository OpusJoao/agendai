import {Text, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import NextButton from "../Buttons/NextButton";

function SelectDate ( props ){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const handlePressNextButton = () => {
        props.navigation.navigate("HourScreen")
    }

    return (
        <View style={{height:"100%", display: "flex", justifyContent: "space-around", alignItems: "center",  paddingHorizontal: 24}}>
            <Text style={{margin: 8, fontSize: 24}}>Selecione o dia</Text>
            <TouchableOpacity
                onPress={showDatePicker}
                style={{
                    margin: 24,
                    width: "100%",
                    maxWidth: 120,
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
            <NextButton onPress={handlePressNextButton}/>

        </View>
    )
}

export default SelectDate
