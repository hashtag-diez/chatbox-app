import { AppBox } from './style/Globalstyle'
import Chatinput from './components/Chatinput'
import MsgBox from './components/MsgBox'
import Message from './components/Message'
import React, { useState } from 'react'

const App = () => {
  const [nbMsg, setNbMsg] = useState(2)
  const [msgList, setMsgList] = useState({
    1: {
      content: 'Coucou'
    },
    2: {
      content: 'BAW CA FLINGUE !'
    }
  })
  const list = Object.keys(msgList)
    .map(message => (
      <React.Fragment key={message}>
        <Message
          author={window.location.href.slice(29)}
          content={msgList[message].content}
        />
      </React.Fragment>
    ))
  const handleSubmit = (e, value) => {
    const contenu = (e ? e.target.elements[0].value : value)
    if (e) e.preventDefault()

    if (nbMsg + 1 === 11) {
      const newMsgList = { ...msgList }
      delete newMsgList[1]
      console.log(Object.keys(newMsgList))
      Object.keys(newMsgList).forEach(key => {
        newMsgList[parseInt(key, 10) - 1] = newMsgList[parseInt(key)]
      })
      delete newMsgList[10]
      setMsgList(Object.assign(newMsgList, {
        10: {
          content: contenu
        }
      }))
    } else {
      setNbMsg(nbMsg + 1)
      setMsgList(Object.assign(msgList, {
        [nbMsg + 1]: {
          content: contenu
        }
      }))
    }
  }
  return (
    <AppBox>
      <h2>Messages</h2>
      <MsgBox list={list} />
      <Chatinput
        updateMsg={(e, value) => handleSubmit(e, value)}
      />
    </AppBox>
  )
}

export default App
