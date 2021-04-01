import styled from 'styled-components'

const mainColor = '#ecf0f1'
const subColor = '#3498db'
const textareaColor = '#bdc3c7'
export const AppBox = styled.div`
  display: flex;
  flex-direction : column;
  background-color: ${mainColor} ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  width : 85%;
`
export const AppInput = styled.input` 
  border-style : none;
  padding: 0.5em;
  border-bottom : 3px solid ${subColor};
  padding-right : 5em;
  outline : none;
`
export const AppButton = styled.button`
  padding: 1em 0em;
  margin-top: 10px;
  color : white;
  background-color : ${subColor};
  border-style : none;
  outline : none;
`
export const AppTextarea = styled.span`
  outline : none;
  border-style : none;
  border-bottom : 3px solid ${subColor};
  background-color : ${textareaColor};
  font-family: inherit;
  resize : none;
  overflow-x : hidden;
  overflow-y : visible;
`
export const MsgBox = styled.div`
  color : white; 
  background-color: ${subColor};
  position : relative;
  border-radius : 5px;
  padding : 1em;
  margin : 20px;
  align-self : flex-end;
`
export const MsgBoxTail = styled.div`
  position : absolute;
  display : inline-block;
  top : 95%;
  right : 5%;
  height : 0;
  width : 0;
  border-top : 15px solid ${subColor};
  border-left : 20px solid transparent; 
`
