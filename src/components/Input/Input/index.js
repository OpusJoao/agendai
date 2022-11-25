import { TextInput, View } from "react-native";
import { ContainerInput, DefaultInput } from "./style";

export default function Input({placeholder, onChange}){
    return(
        <DefaultInput placeholder={placeholder} onChange={onChange}/>
    )
}