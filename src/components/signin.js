import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

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
    <SigninBox>
      <SigninForm>
        <SigninInput
          value={pseudo}
          placeholder='Pseudo'
          type='text'
          onChange={handleChange}
          required
        />
        <SigninButton type='submit' onClick={handleClick}>GO</SigninButton>
      </SigninForm>
    </SigninBox>
  )
}

const SigninBox = styled.div`
  display: grid;
  background-color: #ecf0f1;
  place-items: center;
  width: 100%;
  height: 100%;
`
const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
`
const SigninInput = styled.input` 
  border-style : none;
  padding: 0.5em;
  border-bottom : 3px solid #3498db;
  padding-right : 5em;
  outline : none;
`
const SigninButton = styled.button`
  padding: 5px 0px;
  margin-top: 10px;
  color : white;
  background-color : #3498db;
  border-style : none;
  outline : none;

`
export default Signin
