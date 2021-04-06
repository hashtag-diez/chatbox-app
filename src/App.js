import { AppBox } from './style/Globalstyle'
import Chatinput from './components/Chatinput'
import Message from './components/Message'
import React, { Component } from 'react'
import base from './base'
import { CSSTransition } from 'react-transition-group'
import { AppMsg } from './style/Globalstyle'
import './style/animation.css'
import { Redirect } from 'react-router-dom'

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
  createDate = () => {
    const date = new Date(Date.now())
    return date.getUTCHours().toString().padStart(2,'0') + ":" + date.getUTCMinutes().toString().padStart(2,'0')
  }
  handleSubmit = (e, value) => {
    const contenu = (e ? e.target.elements[0].value : value)
    if (e) e.preventDefault()

    if (Object.keys(this.state.msgList).length + 1 === 11) {
      const newMsgList = { ...this.state.msgList }
      newMsgList[1] = null
      Object.keys(newMsgList).forEach(key => {
        newMsgList[parseInt(key, 10) - 1] = newMsgList[parseInt(key)]
      })
      delete newMsgList[10]
      this.setState({ msgList: Object.assign(newMsgList, {
        10: {
          author: {
            pseudo: this.props.pseudo,
            img : this.props.icon
          },
          content: contenu,
          date: this.createDate()
        }
      })})
    } else {
      this.setState({ msgList: Object.assign(this.state.msgList, {
        [Object.keys(this.state.msgList).length + 1]: {
          author: {
            pseudo: this.props.pseudo,
            img : this.props.icon
          },
          content: contenu,
          date: this.createDate()
        }
      })})
    }
  }
  render(){
    
    const me = this.props.pseudo
    const list= Object.keys(this.state.msgList)
    .map(message => (
      <CSSTransition 
        timeout={1000}
        classNames='fade'
        key={message}>
        <Message
          author={this.state.msgList[message].author}
          content={this.state.msgList[message].content}
          date={this.state.msgList[message].date}
          isFromMe={(this.state.msgList[message].author.pseudo===me ? true : false)}
        />
      </CSSTransition>
    ))
    if(this.props.pseudo!==''){
      return (
        <AppBox>
          <h2>Messages</h2>
          <AppMsg>
            {
              list
            }
          </AppMsg>
          <Chatinput
            updateMsg={(e, value) => this.handleSubmit(e, value)}
          />
        </AppBox>
      )
    }
    else{
      return <Redirect push to={'/'} />
    }
  }
}

export default App
