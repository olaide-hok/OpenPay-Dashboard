import {Button} from '@chakra-ui/react'

interface ButtonProps {
  label: 'Success' | 'Pending' | 'Send Money' | string
  variant: string
}

const Btn = ({label, variant}: ButtonProps) => {
  const paddingY = variant === 'solid' ? '15px' : '4px'
  const paddingX = variant === 'solid' ? '70px' : '10rdpx'
  const fontSize = variant === 'solid' ? '16px' : '10px'
  const fontColor =
    label === 'Send Money'
      ? 'white'
      : label === 'Success'
      ? '#61BB84'
      : label === 'Pending'
      ? '#FFAA90'
      : 'black'

  const brdRadius = variant === 'solid' ? '16px' : '4px'
  const bgColor =
    label === 'Success'
      ? '#EBFFF3'
      : label === 'Pending'
      ? '#FFF1ED'
      : '#0177FB'

  const width = variant === 'outline' ? '57px' : 'null'

  return (
    <Button
      borderRadius={brdRadius}
      variant={variant}
      bgColor={bgColor}
      py={paddingY}
      px={paddingX}
      color={fontColor}
      fontSize={fontSize}
      w={width}>
      {label}
    </Button>
  )
}

export default Btn
