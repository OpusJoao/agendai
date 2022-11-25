import { Text, View } from "react-native";
import Badge from "../../Badge";
import Card from "../Card";
import {Container } from "./styled";

export default function CardWithBadge({badgeText, children}) {
    return (
        <View style={{paddingTop: 10}}>
            <Card>
                <Container>
                    {children && children}
                </Container>
            </Card>
            <Badge text={badgeText}/>
        </View>
    )
}