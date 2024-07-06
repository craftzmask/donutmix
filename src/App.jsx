import { Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import CalculateIngredients from './components/CalculateIngredients'

const App = () => {
  const [donutStyles, setDonutStyles] = useState(JSON.parse(localStorage.getItem('donutStyles') || ''))

  useEffect(() => {
    localStorage.setItem('donutStyles', JSON.stringify(donutStyles))
  }, [donutStyles])

  const addNewDonutStyle = newStyle => {
    setDonutStyles(donutStyles.concat({
      ...newStyle, id: donutStyles.length + 1, selected: false, quantity: 0 
    }))
  }

  const updateDonutStyle = updatedDonutStyle => {
    setDonutStyles(donutStyles
      .map(donutStyle => donutStyle.id !== updatedDonutStyle.id ? donutStyle : updatedDonutStyle)
    )
  }

  const deleteDonutStyle = id => {
    setDonutStyles(donutStyles.filter(donutStyle => donutStyle.id !== id))
  }

  return (
    <Container py='6'>
      <CalculateIngredients
        donutStyles={donutStyles}
        addNewDonutStyle={addNewDonutStyle}
        deleteDonutStyle={deleteDonutStyle}
        updateDonutStyle={updateDonutStyle} />
    </Container>
  )
}

export default App
