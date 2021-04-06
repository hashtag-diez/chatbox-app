import React from 'react'
import { MsgBox, MsgBoxTail } from '../style/Globalstyle'
import styled from 'styled-components'

const Message = ({ author, content, date, isFromMe }) => {
  return (
    <MsgBox
      isFromMe={isFromMe}
    >
      <IconDiv
        isFromMe={isFromMe}
      >
        <img src={author.img} width='30' height='30' />
      </IconDiv>
      <MsgDiv>
        <b>{author.pseudo}</b> : {content}
        <MsgDate
          isFromMe={isFromMe}
        >
          {date}
        </MsgDate>
      </MsgDiv>
      <MsgBoxTail
        isFromMe={isFromMe}
      />
    </MsgBox>
  )
}
const MsgDiv = styled.div`
  position: relative;
  width : 100%;
  word-break: break-all;
`
const IconDiv = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0%;
  left: ${(props) => (props.isFromMe ? '100%' : '')};
  right: ${(props) => (props.isFromMe ? '' : '100%')};
  margin: 0px 5px;
`
const MsgDate = styled.div`
  font-size : 14px;
  position : absolute;
  display : inline-block;
  top : calc(100% + 8px);
  right: ${(props) => (props.isFromMe ? '' : '0%')};
  left: ${(props) => (props.isFromMe ? '0%' : '')};
  color: black;
`
export default Message
