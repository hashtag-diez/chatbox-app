import React from 'react'
import styled from 'styled-components'

const signin = () => {
  return (
    <SigninBox>
      <SigninForm>
        <SigninInput
          placeholder='Pseudo'
          type='text'
          required
        />
        <SigninButton type='submit'>GO</SigninButton>
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
export default signin
