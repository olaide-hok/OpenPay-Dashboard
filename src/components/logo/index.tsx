import {Heading, HStack, Image} from '@chakra-ui/react'
export const Logo = () => {
  return (
    <HStack spacing="4">
      <Image src="/images/openpay-logo.png" alt="openpay" />

      <Heading fontSize="12px">OpenPay</Heading>
    </HStack>
  )
}
