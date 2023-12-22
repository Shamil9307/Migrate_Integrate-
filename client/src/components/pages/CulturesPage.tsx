import React from 'react'
import { Container } from 'react-bootstrap'
import CulturesList from '../ui/CulturesList'

export default function CulturesPage():JSX.Element {
  return (
    <Container>
      <img src='https://media3.giphy.com/media/ZF2Fo5VS8gtgTioUuc/giphy.gif?cid=ecf05e47uw7pr0xebnnuph0p626j6q167bh0g8oi3edatd95&ep=v1_gifs_search&rid=giphy.gif&ct=g'></img>
      <CulturesList/>
      
    </Container>
  )
}
