import {Button} from '@chakra-ui/react'

interface ButtonProps {
  label: string
  variant: string
}

const Btn = ({label, variant}: ButtonProps) => {
  const paddingY = variant === 'solid' ? '15px' : '4.5px'
  const paddingX = variant === 'solid' ? '70px' : '12px'

  return (
    <Button variant={variant} py={paddingY} px={paddingX} fontSize="10px">
      {label}
    </Button>
  )
}

export default Btn
