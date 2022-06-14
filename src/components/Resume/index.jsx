import React from 'react'
import * as C from './styles'
import ResumeItem from '../ResumeItem'

const index = () => {
  return (
    <C.Container>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
    </C.Container>
  )
}

export default index