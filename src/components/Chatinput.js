import React, { useState } from 'react'
import { AppButton, AppForm, AppTextarea } from '../style/Globalstyle'
import styled from 'styled-components'

const Chatinput = ({ updateMsg }) => {
  const [nbCarac, setNbCarac] = useState(140)
  let color = 'black'
  if (nbCarac < 15) {
    if (nbCarac < 5) {
      color = '#c0392b'
    } else {
      color = '#d35400'
    }
  }
  const handleSubmit = (e) => {
    updateMsg(e, '')
    setNbCarac(140)
    e.target.elements[0].value = ''
    e.target.elements[0].focus()
  }
  const handleChange = (e) => setNbCarac(140 - e.target.value.length)
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.target.value.length > 0) {
        updateMsg(false, e.target.value)
        setNbCarac(140)
        e.target.value = ''
      }
    }
  }
  return (
    <>
      <AppForm
        onSubmit={handleSubmit}
      >
        <AppTextarea
          name='content'
          maxLength='140'
          required
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <RemainigCarac color={color}>
          {
            nbCarac
          }
        </RemainigCarac>
        <AppButton>Envoyer !</AppButton>
      </AppForm>
    </>
  )
}

const RemainigCarac = styled.div`
color : ${props => props.color};
display : flex;
justify-content : flex-end;
`
export default Chatinput
