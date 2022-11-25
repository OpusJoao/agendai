import styled from "styled-components";

export const ActiveButton = styled.TouchableOpacity`
    height: 40px;
    padding: 8px 20px;
    background-color: #FCA351;
    border-radius: 15px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    max-width: 100px;
`;

export const NotActiveButton = styled.TouchableOpacity`
    height: 40px;
    padding: 8px 20px;
    background-color: #D7BA9F;
    border-radius: 15px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    max-width: 100px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;