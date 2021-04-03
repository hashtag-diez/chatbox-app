import styled from 'styled-components'

const mainColor = 'white'
const subColor = '#3498db'
const textareaColor = '#ecf0f1'
export const AppBox = styled.div`
  display: flex;
  flex-direction : column;
  background-color: ${mainColor} ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
`
export const AppMsg = styled.section`
  display : flex;
  flex-direction : column;
  width : min(85%,650px);
  padding-bottom : 10px;
`
export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  width : min(85%,650px);
  font-size: 16px;
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
  font-weight : bold;
  font-size: 16px;
  border-radius : 10px;
`
export const AppTextarea = styled.textarea`
  outline : none;
  border-style : none;
  border-bottom : 3px solid ${subColor};
  background-color : ${textareaColor};
  font-family: inherit;
  resize : none;
  overflow-x : hidden;
  overflow-y : visible;
  font-size: 16px;
  padding : 5px;
  border-radius : 5px;
`
export const MsgBox = styled.div`
  display: inline;
  color : ${(props) => (props.isFromMe ? 'white' : 'black')};
  background-color: ${(props) => (props.isFromMe ? subColor : '#bdc3c7')};
  position : relative;
  border-radius : 5px;
  padding : 0.5em;
  margin : 10px 0px;
  align-self : ${(props) => (props.isFromMe ? 'flex-end' : 'flex-start')};
  width: min(inherit, auto);
  font-size: 16px;
`
export const MsgBoxTail = styled.div`
  position : absolute;
  display : inline-block;
  top : 95%;
  right : ${(props) => (props.isFromMe ? 'calc(0% + 10px)' : 'calc(100%-10px)')}; 
  height : 0;
  width : 0;
  border-top : 15px solid ${(props) => (props.isFromMe ? subColor : '#bdc3c7')};
  border-left : ${(props) => (props.isFromMe ? '20px solid transparent' : '')};
  border-right : ${(props) => (props.isFromMe ? '' : '20px solid transparent')};
`
