import styled from "styled-components";

const ContainerTitle = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px;
`;

const CustomCard = styled.View`
    overflow: hidden;
    width: 100%;
    height: auto;
    background-color: #fff;
    border: #E6E6E6;
    border-radius: 14px;
    margin-bottom: 16px;
`
const TextTitle = styled.Text`
    width: 80%;
    padding-left: 8px;
    color: #7D7D7D;
`;

const ExpandButton = styled.View`
    width: 15%;
    justify-content: center;
    align-items: center;
`;

const ContainerBody = styled.View`
    min-height: 120px;
    height: ${props => props.expanded ? 'auto': '0px'};
    border-top-color: #E6E6E6;
    border-top-width: 1px;
    padding: ${props => props.expanded ? '8px': '0px'};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export {
    CustomCard,
    ContainerTitle,
    TextTitle,
    ExpandButton,
    ContainerBody
}