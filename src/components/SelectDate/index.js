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

        </View>
    )
}

export default SelectDate
