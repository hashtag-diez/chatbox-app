import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AppBox, AppForm, AppInput, AppButton } from '../style/Globalstyle'

const Signin = () => {
  const [pseudo, setPseudo] = useState('')
  const [clicked, setClick] = useState(false)

  const handleChange = (e) => setPseudo(e.target.value)
  const handleClick = (e) => {
    e.preventDefault()
    setClick(true)
  }
  if (clicked) {
    return <Redirect push to={'/pseudo/' + pseudo} />
  }
  return (
    <AppBox>
      <AppForm boxWidth='300px'>
        <AppInput
          value={pseudo}
          placeholder='Pseudo'
          type='text'
          onChange={handleChange}
          required
        />
        <AppButton type='submit' onClick={handleClick}>GO</AppButton>
      </AppForm>
    </AppBox>
  )
}

export default Signin
