import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

const NumberInputMobile = ({ onChange }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 999,
      onChange: (_: string, valueAsNumber: number) => onChange(valueAsNumber)
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack flex='1'>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  )
}

export default NumberInputMobile