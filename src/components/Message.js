import React from 'react'
import { MsgBox, MsgBoxTail } from '../style/Globalstyle'

const Message = ({ author, content }) => {
  return (
    <MsgBox>
      <b>{author}</b> : {content}
      <MsgBoxTail />
    </MsgBox>
  )
}

export default Message
