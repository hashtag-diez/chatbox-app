import React, { useState } from 'react'
import { AppButton, AppForm, AppTextarea } from '../style/Globalstyle'
import styled from 'styled-components'
import Message from './Message'

const Chatinput = () => {
  const [nbCarac, setNbCarac] = useState(140)
  let color = 'black'
  if (nbCarac < 15) {
    if (nbCarac < 5) {
      color = '#c0392b'
    } else {
      color = '#d35400'
    }
  }
  const RemainigCarac = styled.div`
    color : ${color};
    display : flex;
    justify-content : flex-end;
  `
  const handleChange = (e) => setNbCarac(140 - e.target.value.length)
  return (
    <>
      <Message />
      <AppForm>
        <AppTextarea
          
          maxLength='140'
          required
          onChange={handleChange}
        />
        <RemainigCarac>
          {
            nbCarac
          }
        </RemainigCarac>
        <AppButton>Envoyer !</AppButton>
      </AppForm>
    </>
  )
}

export default Chatinput
