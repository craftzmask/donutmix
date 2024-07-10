import { FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const TotalIngredientsModal = ({ donutStyles, isOpen, onClose }) => {
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
                  <Td fontWeight='bold'>{total.flour}</Td>
                  <Td>grams</Td>
                </Tr>
                <Tr>
                  <Td>Yeast</Td>
                  <Td fontWeight='bold'>{total.yeast}</Td>
                  <Td>grams</Td>
                </Tr>
                <Tr>
                  <Td>Water</Td>
                  <Td fontWeight='bold'>{total.water}</Td>
                  <Td>grams</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default TotalIngredientsModal