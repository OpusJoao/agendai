import styled from "styled-components";

const CardBody = styled.View`
  overflow: hidden;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 14px;
  margin-bottom: 16px;
  elevation: 2;
`

const Duration = styled.Text`
  margin: 4px 0;
  font-size: 11px;
  font-weight: bold;
  color: #7D7D7D;
  text-transform: uppercase;
`

const Title = styled.Text`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 14 px;
`

const Time = styled.Text`
  font-size: 11px;
  color: #7D7D7D;
  margin-bottom: 4px;
`
const LineTop = styled.View`
  width: 110%;
  height: 6px;
  background-color: #FCA351;
  position: absolute;
`

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #EDEDED;
`

const LinkContainer = styled.View`
  padding: 8px;
  margin-right: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export {
  CardBody,
  Duration,
  Title,
  Time,
  LineTop,
  Line,
  LinkContainer
}