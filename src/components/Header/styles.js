import styled from "styled-components/native";

const HeaderContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
  background-color: #FCA351;
  padding: 0 16px;
  min-height: 80px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`

const UserButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: #FFC28A;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WelcomeText = styled.Text`
  margin-top: 8px;
  color: #fff;
  padding-bottom: 16px;
`

export {
  HeaderContainer,
  UserButton,
  WelcomeText

}