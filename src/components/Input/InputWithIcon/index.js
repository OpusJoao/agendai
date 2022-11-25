import { ContainerInput, IconInput, InputIcon } from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InputWithIcon({icon, onChange, value, placeholder}){
    return(
            <ContainerInput>
                <IconInput>
                    {!!icon ? icon: <Icon name="question-circle-o" size={16} color={'#FCA351'}/>}
                </IconInput>
                <InputIcon placeholder={placeholder} onChange={onChange} value={value}/>
            </ContainerInput>
    )
}