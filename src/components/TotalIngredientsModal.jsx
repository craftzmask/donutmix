import { FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const TotalIngredientsModal = ({ donutStyles, isOpen, onClose }) => {
  const [isLbs, setIsLbs] = useState(true)

  const total = {
    flour: donutStyles.reduce((a, b) => a + b.flour * b.quantity, 0),
    yeast: donutStyles.reduce((a, b) => a + b.yeast * b.quantity, 0),
    water: donutStyles.reduce((a, b) => a + b.water * b.quantity, 0),
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Total Ingredients</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Flour</Td>
                  <Td fontWeight='bold'>{isLbs ? total.flour : total.flour * 16}</Td>
                  <Td>{isLbs ? 'lbs' : 'oz'}</Td>
                </Tr>
                <Tr>
                  <Td>Yeast</Td>
                  <Td fontWeight='bold'>{isLbs ? total.yeast : total.yeast * 16}</Td>
                  <Td>{isLbs ? 'lbs' : 'oz'}</Td>
                </Tr>
                <Tr>
                  <Td>Water</Td>
                  <Td fontWeight='bold'>{isLbs ? total.water : total.water * 16}</Td>
                  <Td>{isLbs ? 'lbs' : 'oz'}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>

        <ModalFooter>
          <HStack w='full' justifyContent='space-between'>
            <Text flex='2' fontSize='lg' fontWeight='bold'>Weight Unit:</Text>
            <FormControl flex='1' display='flex' alignItems='center' gap='5'>
              <FormLabel mb='0' mr='0' fontSize='xl'>oz</FormLabel>
              <Switch
                size='lg'
                defaultChecked
                isChecked={isLbs}
                onChange={() => setIsLbs(!isLbs)} />
              <FormLabel mb='0' fontSize='xl'>lbs</FormLabel>
            </FormControl>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TotalIngredientsModal