import {Box, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react'

interface Props {
  src: string
  alt: string
  label: string
  variant: string
  amt?: string
}

const ActionTile = ({src, alt, amt, label, variant}: Props) => {
  if (variant === 'vertical') {
    return (
      <VStack spacing="4">
        <Box p="12px" border="1px solid #F2F2F2" borderRadius="7px">
          <Image src={src} alt={alt} />
        </Box>
        <Text fontSize="10px">{label}</Text>
      </VStack>
    )
  }
  if (variant === 'horizontal') {
    return (
      <HStack spacing="6px">
        <Image src={src} alt={alt} />
        <VStack>
          <Heading fontSize="14px">{amt}</Heading>
          <Text fontSize="10px">{label}</Text>
        </VStack>
      </HStack>
    )
  }
  return null
}

export default ActionTile
