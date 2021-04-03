import { AppBox } from './style/Globalstyle'
import Chatinput from './components/Chatinput'
import MsgBox from './components/MsgBox'
import Message from './components/Message'
import React, { Component, createRef } from 'react'
import base from './base'

class App extends Component {
  state = {
    msgList: { 
    }
  }
  componentDidMount () {
    base.syncState('/messages', {
      context: this,
      state: 'msgList'
    })
  }

  handleSubmit = (e, value) => {
    const contenu = (e ? e.target.elements[0].value : value)
    if (e) e.preventDefault()

    if (Object.keys(this.state.msgList).length + 1 === 11) {
      const newMsgList = { ...this.state.msgList }
      delete newMsgList[1]
      Object.keys(newMsgList).forEach(key => {
        newMsgList[parseInt(key, 10) - 1] = newMsgList[parseInt(key)]
      })
      delete newMsgList[10]
      this.setState({ msgList: Object.assign(newMsgList, {
        10: {
          author: this.props.match.params.pseudo,
          content: contenu
        }
      })})
    } else {
      this.setState({ msgList: Object.assign(this.state.msgList, {
        [Object.keys(this.state.msgList).length + 1]: {
          author: this.props.match.params.pseudo,
          content: contenu
        }
      })})
    }
  }
  render(){
    const me = this.props.match.params.pseudo
    const list= Object.keys(this.state.msgList)
    .map(message => (
      <React.Fragment key={message}>
        <Message
          author={this.state.msgList[message].author}
          content={this.state.msgList[message].content}
          isFromMe={(this.state.msgList[message].author===me ? true : false)}
        />
      </React.Fragment>
    ))
    return (
      <AppBox>
        <h2>Messages</h2>
        <MsgBox list={list} />
        <Chatinput
          updateMsg={(e, value) => this.handleSubmit(e, value)}
        />
      </AppBox>
    )
  }
}

export default App
