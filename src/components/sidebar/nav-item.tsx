import {HStack, Text, Image} from '@chakra-ui/react'

type Props = {
  label: string
  icon: any
}

const NavItem = ({label, icon}: Props) => {
  return (
    <HStack spacing="9px" py="8px" pl="13px">
      <Image src={icon} />
      <Text fontSize="12px">{label}</Text>
    </HStack>
  )
}

export default NavItem
