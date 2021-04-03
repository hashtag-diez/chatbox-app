import React from 'react'
import { MsgBox, MsgBoxTail } from '../style/Globalstyle'
import styled from 'styled-components'

const Message = ({ author, content, isFromMe }) => {
  return (
    <MsgBox
      isFromMe={isFromMe}
    >
      <MsgDiv><b>{author}</b> : {content}</MsgDiv>
      <MsgBoxTail
        isFromMe={isFromMe}
      />
    </MsgBox>
  )
}
const MsgDiv = styled.div`
  width : 100%;
  word-break: break-all;
`
export default Message
