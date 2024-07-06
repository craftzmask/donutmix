import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Checkbox, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import EditDonutStyleForm from './EditDonutStyleForm'

const SelectDonutStyles = ({ donutStyles, isOpen, onClose, onChange, onDelete }) => {
  const [textSearch, setTextSearch] = useState('')

  const foundDonutStyles = donutStyles.filter(donutStyle => 
    donutStyle.name.toLowerCase().includes(textSearch.toLowerCase())
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Donut Styles</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack py='4'>
            <InputGroup mb='4'>
              <InputLeftElement>
                <Search2Icon color='gray.500' />
              </InputLeftElement>
              <Input
                type='search'
                placeholder='Old Fashioned'
                value={textSearch} onChange={e => setTextSearch(e.target.value)}/>
            </InputGroup>

            <VStack w='full' overflowY='auto'>
              {foundDonutStyles.map(donutStyle => 
                <Accordion allowToggle w='full' key={donutStyle.id}>
                  <AccordionItem>
                    <AccordionButton>
                      <HStack w='full' justify='space-between'>
                        <Checkbox
                          isChecked={donutStyle.selected}
                          onChange={() => onChange({ ...donutStyle, selected: !donutStyle.selected })}
                        >{donutStyle.name}</Checkbox>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>

                    <AccordionPanel>
                      <EditDonutStyleForm
                        donutStyle={donutStyle}
                        onChange={onChange}
                        onDelete={onDelete} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SelectDonutStyles