import { BadgeBody, BadgeText } from "./styles";

export default function Badge({text}){
    return (<BadgeBody>
        <BadgeText>{text}</BadgeText>
    </BadgeBody>)
}