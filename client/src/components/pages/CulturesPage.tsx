import React from 'react'
import { Container } from 'react-bootstrap'
import CulturesList from '../ui/CulturesList'
import CaruselCulture from '../ui/CaruselCulture'

export default function CulturesPage():JSX.Element {
  return (
    <Container>
      <CaruselCulture/>
      <CulturesList/>
      
    </Container>
  )
}
