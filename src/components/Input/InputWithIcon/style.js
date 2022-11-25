import styled from "styled-components";

const ContainerInput = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`
const IconInput = styled.Text`
    position: absolute;
    top: 13px;
    left: 12px;
    z-index: 10;
`

const InputIcon = styled.TextInput`
    padding: 8px;
    padding-left: 40px;
    background-color: #F5F5F5;
    color: #515151;
    border-radius: 14px;
    width: 100%;
`
export {
    ContainerInput,
    IconInput,
    InputIcon
}