import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import Rest from '../api/rest'

const App = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const rest = new Rest()
    let call = await rest.calculate(input)
    setOutput(call)
  }

  return (
    <div>
      <Header>TEST PARADOX ENGINEERING</Header>
      <Main>
        <Input
          placeholder="Inserisci l'operazione da eseguire"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSubmit(e)
            }
          }}
        />
        <Button
          onClick={handleSubmit}
          disabled={input.length === 0 ? true : false}
        >
          Calcola
        </Button>
        <Output>{output}</Output>
      </Main>
      <Footer>Made by Badr Rahmaouy</Footer>
    </div>
  )
}

const Main = styled.main`
  height: 50vh;
  padding: 10%;
  background-color: azure;
`

const Output = styled.div`
  margin: 10px;
  border-radius: 10px;
  font-size: medium;
  font-weight: 600;
`

export default App
