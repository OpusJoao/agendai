import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text } from "react-native";
import Card from "../Card";
import { Container } from "./styled";


export default function CardWithDropDown({text, onChangeDropDown, items}){
    const [selectedDurationOfMeeting, setSelectedDurationOfMeeting] = useState('');
    return(
        <Card>
            <Container>
                <Text style={{marginRight: 24}}>{text}</Text>
                <Picker
                    style={{width: 130, fontSize: 12, borderRadius: 15, color: '#FCA351'}}
                    dropdownIconColor={"#FCA351"}
                    selectedValue={selectedDurationOfMeeting}
                    onValueChange={(itemValue, itemIndex) => {
                            setSelectedDurationOfMeeting(itemValue)
                            onChangeDropDown(itemValue)
                        }
                    }>
                    {items && items.map((item, index) => <Picker.Item label={item.label} value={item.value} key={index} />)}
                </Picker>
            </Container>
        </Card>
    )
}