import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AppBox, AppForm, AppInput, AppButton } from '../style/Globalstyle'
import IconPicker from './IconPicker'

const Signin = ({ pseudo, handlePseudo, handleIcon }) => {
  const [clicked, setClick] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setClick(true)
  }
  if (clicked) {
    return <Redirect push to='/app' />
  }
  return (
    <AppBox>
      <IconPicker
        handleIcon={(link) => handleIcon(link)}
      />
      <AppForm boxWidth='300px'>
        <AppInput
          value={pseudo}
          placeholder='Pseudo'
          type='text'
          onChange={handlePseudo}
          required
        />
        <AppButton type='submit' onClick={handleClick}>GO</AppButton>
      </AppForm>
    </AppBox>
  )
}

export default Signin
