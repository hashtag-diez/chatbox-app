import React from 'react'
import { AppButton } from '../style/Globalstyle'
import styled from 'styled-components'

const IconPicker = ({ handleIcon }) => {
  const LinkArray = ['https://kculture.kgames.fr/avatars/001-avatar.png',
    'https://kculture.kgames.fr/avatars/002-avatar-1.png',
    'https://kculture.kgames.fr/avatars/003-avatar-2.png',
    'https://kculture.kgames.fr/avatars/004-avatar-3.png',
    'https://kculture.kgames.fr/avatars/005-avatar-4.png',
    'https://kculture.kgames.fr/avatars/006-avatar-5.png',
    'https://kculture.kgames.fr/avatars/007-man.png',
    'https://kculture.kgames.fr/avatars/008-avatar-6.png',
    'https://kculture.kgames.fr/avatars/009-avatar-7.png',
    'https://kculture.kgames.fr/avatars/010-smileys.png'
  ]
  const updateIcon = (e) => {
    const link = e.target.src
    handleIcon(link)
  }
  const list = LinkArray
    .map(link => (
      <React.Fragment
        key={link}
      >
        <img onClick={updateIcon} src={link} />
      </React.Fragment>
    ))
  return (
    <>
      <IconGalery>
        {
          list
        }
      </IconGalery>
    </>
  )
}

const IconGalery = styled.div`
  display: flex;
  width : min(85%,650px);
  flex-direction:row;
  flex-wrap: wrap;
`

export default IconPicker
