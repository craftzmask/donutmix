import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, VStack } from '@chakra-ui/react'
import NumberInputMobile from './NumberInputMobile'
import { useState } from 'react'

const NewDonutStyleForm = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [isLbs, setIsLbs] = useState(true)
  const [flour, setFlour] = useState(0)
  const [yeast, setYeast] = useState(0)
  const [water, setWater] = useState(0)

  const handleClick = () => {
    onSubmit({ name, flour, yeast, water })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Donut Style</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack align='flex-start'>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder='Old Fashioned'
                value={name}
                onChange={e => setName(e.target.value)} />
              <FormErrorMessage>Name is required</FormErrorMessage>
            </FormControl>

            <HStack mt='3' w='full' justifyContent='space-between'>
              <Text flex='2' fontWeight='bold' fontSize='xl'>Ingredients</Text>
              <FormControl flex='1' display='flex' justifyContent='space-between' alignItems='center'>
                <FormLabel mb='0' mr='0' fontSize='xl'>oz</FormLabel>
                <Switch
                  size='lg'
                  defaultChecked
                  isChecked={isLbs}
                  onChange={() => setIsLbs(!isLbs)} />
                <FormLabel mb='0' fontSize='xl'>lbs</FormLabel>
              </FormControl>
            </HStack>

            <FormControl display='flex'  mt='3'>
              <FormLabel flex='1'>Flour</FormLabel>
              <NumberInputMobile value={flour} onChange={setFlour} />
            </FormControl>

            <FormControl display='flex' mt='3'>
              <FormLabel flex='1'>Yeast</FormLabel>
              <NumberInputMobile value={yeast} onChange={setYeast} />
            </FormControl>

            <FormControl display='flex' mt='3'>
              <FormLabel flex='1'>Water</FormLabel>
              <NumberInputMobile value={water} onChange={setWater} />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            w='full'
            bg='green.400'
            color='white'
            mt='auto'
            onClick={handleClick}>
            SAVE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewDonutStyleForm