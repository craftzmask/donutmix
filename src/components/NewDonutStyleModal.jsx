import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import NumberInputMobile from './NumberInputMobile'
import { useState } from 'react'

const NewDonutStyleModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [flour, setFlour] = useState(0)
  const [yeast, setYeast] = useState(0)
  const [water, setWater] = useState(0)
  const [isTouched, setIsTouched] = useState(false);

  const handleClick = () => {
    if (name.trim() === '') {
      setIsTouched(true)
    } else {
      onSubmit({ name, flour, yeast, water })
      setName('')
      setIsTouched(false)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Donut Style</ModalHeader>
        <ModalCloseButton onClick={() => setIsTouched(false)}/>

        <ModalBody>
          <VStack align='flex-start'>
            <FormControl isRequired isInvalid={isTouched && name.trim() === ''}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder='Old Fashioned'
                onBlur={() => setIsTouched(true)}
                value={name}
                onChange={e => setName(e.target.value)} />
              {isTouched && name.trim() === '' &&
                <FormErrorMessage>Name is required</FormErrorMessage>
              }
            </FormControl>

            <FormControl display='flex' alignItems='center' mt='3'>
              <FormLabel flex='1' mb='0'>Flour</FormLabel>
              <NumberInputMobile value={flour} onChange={setFlour} />
            </FormControl>

            <FormControl display='flex' alignItems='center' mt='3'>
              <FormLabel flex='1' mb='0'>Yeast</FormLabel>
              <NumberInputMobile value={yeast} onChange={setYeast} />
            </FormControl>

            <FormControl display='flex' alignItems='center' mt='3'>
              <FormLabel flex='1' mb='0'>Water</FormLabel>
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

export default NewDonutStyleModal