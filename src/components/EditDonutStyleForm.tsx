import { Button, ButtonGroup, FormControl, FormLabel, HStack, Switch, Text } from '@chakra-ui/react'
import NumberInputMobile from './NumberInputMobile'
import { useState } from 'react'

const EditDonutStyleForm = ({ donutStyle, onChange, onDelete }) => {
  const [isLbs, setIsLbs] = useState(true)
  const [flour, setFlour] = useState(donutStyle.flour)
  const [yeast, setYeast] = useState(donutStyle.yeast)
  const [water, setWater] = useState(donutStyle.water)

  const flourInOz = flour * 16
  const yeastInOz = yeast * 16
  const waterInOz = water * 16

  const handleSaveClick = () => {
    onChange({
      ...donutStyle,
      flour: isLbs ? flour : flourInOz / 16,
      yeast: isLbs ? yeast : yeastInOz / 16,
      water: isLbs ? water : waterInOz / 16
    })
  }

  const handleDeleteClick = () => {
    onDelete(donutStyle.id)
  }

  return (
    <>
      <HStack mt='3' w='full' justifyContent='space-between'>
        <Text flex='2' fontWeight='bold' fontSize='xl'>Ingredients</Text>
        <FormControl flex='1' display='flex' justifyContent='space-between' alignItems='center' gap='5'>
          <FormLabel mb='0' mr='0' fontSize='xl'>oz</FormLabel>
          <Switch
            size='lg'
            defaultChecked
            isChecked={isLbs}
            onChange={() => setIsLbs(!isLbs)} />
          <FormLabel mb='0' fontSize='xl'>lbs</FormLabel>
        </FormControl>
      </HStack>

      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Flour</FormLabel>
        <NumberInputMobile
          value={isLbs ? flour : flourInOz}
          onChange={value => setFlour(isLbs ? value : value / 16)} />
      </FormControl>

      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Yeast</FormLabel>
        <NumberInputMobile
          value={isLbs ? yeast : yeastInOz}
          onChange={value => setYeast(isLbs ? value : value / 16)} />
      </FormControl>

      <FormControl display='flex' mt='3'>
        <FormLabel flex='1'>Water</FormLabel>
        <NumberInputMobile
          value={isLbs ? water : waterInOz}
          onChange={value => setWater(isLbs ? value : value / 16)} />
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