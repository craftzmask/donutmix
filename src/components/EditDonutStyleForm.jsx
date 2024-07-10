import { Button, ButtonGroup, FormControl, FormLabel } from '@chakra-ui/react'
import NumberInputMobile from './NumberInputMobile'
import { useState } from 'react'

const EditDonutStyleForm = ({ donutStyle, onChange, onDelete }) => {
  const [flour, setFlour] = useState(donutStyle.flour)
  const [yeast, setYeast] = useState(donutStyle.yeast)
  const [water, setWater] = useState(donutStyle.water)

  const handleSaveClick = () => {
    onChange({ ...donutStyle, flour, yeast, water })
  }

  const handleDeleteClick = () => {
    onDelete(donutStyle.id)
  }

  return (
    <>
      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Flour</FormLabel>
        <NumberInputMobile
          value={flour}
          onChange={setFlour} />
      </FormControl>

      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Yeast</FormLabel>
        <NumberInputMobile
          value={yeast}
          onChange={setYeast} />
      </FormControl>

      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Water</FormLabel>
        <NumberInputMobile
          value={water}
          onChange={setWater} />
      </FormControl>

      <ButtonGroup mt='6' w='full'>
        <Button
          flex='1'
          bg='green.400'
          color='white'
          onClick={handleSaveClick}>
            SAVE
          </Button>
        <Button
          flex='1'
          bg='red.400'
          color='white'
          onClick={handleDeleteClick}>
            DELETE
          </Button>
      </ButtonGroup>
    </>
  )
}

export default EditDonutStyleForm