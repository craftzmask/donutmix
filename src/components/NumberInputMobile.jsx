import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

const NumberInputMobile = ({ value = 0, onChange }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value,
      min: 0,
      max: 9999,
      onChange: (valueAsString, valueAsNumber) => onChange(valueAsString === '' ? 0 : valueAsNumber)
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack flex='2'>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  )
}

export default NumberInputMobile