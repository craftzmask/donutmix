import { Button, ButtonGroup, Divider, FormControl, FormLabel, Heading, VStack, useDisclosure } from '@chakra-ui/react'
import { Fragment } from 'react/jsx-runtime'
import NewDonutStyleModal from './NewDonutStyleModal'
import SelectDonutStyles from './SelectDonutStyles'
import NumberInputMobile from './NumberInputMobile'
import TotalIngredientsModal from './TotalIngredientsModal'

const CalculateIngredients = ({ donutStyles, updateDonutStyle, addNewDonutStyle, deleteDonutStyle }) => {
  const { isOpen: isSelectOpen, onOpen: onSelectOpen, onClose: onSelectClose } = useDisclosure()
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
  const { isOpen: isCalOpen, onOpen: onCalOpen, onClose: onCalClose } = useDisclosure()

  const selectedDonutStyles = donutStyles.filter(donutStyle => donutStyle.selected)

  return (
    <VStack align='flex-start' h='100%'>
      <Heading>Calculate Ingredients</Heading>

      <ButtonGroup w='full'>
        <Button flex='1' bg='blue.400' color='white' onClick={onSelectOpen}>Select Styles</Button>
        <Button flex='1'  bg='green.400' color='white' onClick={onAddOpen}>Add New Style</Button>
      </ButtonGroup>

      <Button mt='2' py='5' w='full' bg='purple.400' color='white' onClick={onCalOpen}>Calculate</Button>

      <VStack w='full' overflowY='auto'>
        {selectedDonutStyles.map(donutStyle => 
            <Fragment key={donutStyle.id}>
              <FormControl display='flex' alignItems='center' justifyContent='space-between' mt='3'>
                <FormLabel flex='2' mb='0'>{donutStyle.name}</FormLabel>
                <NumberInputMobile
                  value={donutStyle.quantity}
                  onChange={newQuantity => updateDonutStyle({ ...donutStyle, quantity: newQuantity })} />
              </FormControl>
              <Divider />
            </Fragment>
        )}
      </VStack>

      <NewDonutStyleModal
        isOpen={isAddOpen}
        onClose={onAddClose}
        onSubmit={addNewDonutStyle} />
      <SelectDonutStyles
        donutStyles={donutStyles}
        onChange={updateDonutStyle}
        onDelete={deleteDonutStyle}
        isOpen={isSelectOpen}
        onClose={onSelectClose} />
      <TotalIngredientsModal
        donutStyles={selectedDonutStyles}
        isOpen={isCalOpen}
        onClose={onCalClose} />
    </VStack>
  )
}

export default CalculateIngredients