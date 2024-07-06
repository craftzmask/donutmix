import { Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import SelectDonutStyles from './components/SelectDonutStyles'

const App = () => {
  const [donutStyles, setDonutStyles] = useState(JSON.parse(localStorage.getItem('donutStyles') || '') || [
    {
      id: 1,
      name: 'Old Fashioned',
      flour: 20,
      yeast: 50,
      water: 5,
      selected: false,
      quantity: 0
    },
    {
      id: 2,
      name: 'Cake',
      flour: 40,
      yeast: 0,
      water: 15,
      selected: false,
      quantity: 0
    },
    {
      id: 3,
      name: 'Cream Filled',
      flour: 30,
      yeast: 20,
      water: 5,
      selected: false,
      quantity: 0
    },
  ])

  useEffect(() => {
    localStorage.setItem('donutStyles', JSON.stringify(donutStyles))
  }, [donutStyles])

  const addNewDonutStyle = newStyle => {
    setDonutStyles(donutStyles.concat({
      ...newStyle, selected: false, quantity: 0 
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

  console.log(donutStyles)

  return (
    <Container>
      <SelectDonutStyles
        isOpen={true}
        donutStyles={donutStyles}
        onChange={updateDonutStyle}
        onDelete={deleteDonutStyle} />
    </Container>
  )
}

export default App
