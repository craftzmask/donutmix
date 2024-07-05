import { Container } from '@chakra-ui/react'
import NewDonutStyleForm from './components/NewDonutStyleForm'
import { useState } from 'react'

const App = () => {
  const [donutStyles, setDonutStyles] = useState([
    {
      name: 'Old Fashioned',
      flour: 20,
      yeast: 50,
      water: 5,
      quantity: 0
    },
    {
      name: 'Cake',
      flour: 40,
      yeast: 0,
      water: 15,
      quantity: 0
    },
    {
      name: 'Cream Filled',
      flour: 30,
      yeast: 20,
      water: 5,
      quantity: 0
    },
  ])

  const addNewDonutStyle = newStyle => {
    setDonutStyles(donutStyles.concat({...newStyle, quantity: 0 }))
  }

  console.log(donutStyles)

  return (
    <Container>
      <NewDonutStyleForm
        isOpen={true}
        onSubmit={addNewDonutStyle} />
    </Container>
  )
}

export default App
