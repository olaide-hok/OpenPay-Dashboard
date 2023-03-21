import {ChevronRightIcon, SearchIcon} from '@chakra-ui/icons'
import {
  Avatar,
  AvatarGroup,
  Box,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import AvatarComponent from '../avatar'
import {HiPencil} from 'react-icons/hi'
import {recentContacts} from './recent-contacts-data'

const RecentContacts = () => {
  return (
    <VStack alignItems="flex-start" w="full" spacing="24px">
      <HStack justifyContent="space-between" w="full">
        <VStack alignItems="flex-start">
          <Heading fontSize="13px">Recent Contacts</Heading>
          <Text fontSize="10px">18 recipients</Text>
        </VStack>
        {/* Pen and Search Icon */}
        <HStack alignItems="flex-start" spacing="20px">
          <InputGroup>
            <Input
              pr="10px"
              border="none"
              htmlSize={6}
              width="auto"
              size="md"
            />
            <InputRightElement
              children={
                <>
                  {/* Pencil Icon */}
                  <Icon as={HiPencil} color="#BCCDE1" mr="10px" />
                  {/* Search Icon */}
                  <SearchIcon color="#0177FB" />
                </>
              }
            />
          </InputGroup>
        </HStack>
      </HStack>

      {/* Contact Avatar Slider */}
      <HStack
        overflowX="auto"
        px={8}
        justifyContent="flex-start"
        spacing={3}
        minH={24}
        maxW={{base: 'xs', xl: 'sm'}}
        w="full">
        {recentContacts.map((contact) => {
          const {name, src, size} = contact
          return <AvatarComponent name={name} size={size} src={src} />
        })}
      </HStack>
      {/* Group Party  */}
      <Box
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="white"
        px="16.5px"
        pb="17px"
        pt="14px"
        justifyContent="space-between"
        w="full">
        <Text fontSize="12" mb="12px">
          Group Party
        </Text>
        <VStack alignItems="flex-start" spacing="24px">
          {/* Group of Avatar */}
          <AvatarGroup size="sm" max={3}>
            <Avatar name="gp-3" src="/images/group-party/gp-3.png" />
            <Avatar name="gp-1" src="/images/group-party/gp-1.png" />
            <Avatar name="gp-2" src="/images/group-party/gp-2.png" />
            <Avatar name="gp-4" src="/images/group-party/gp-4.png" />
            <Avatar name="gp-5" src="/images/group-party/gp-5.png" />
            <Avatar name="gp-6" src="/images/group-party/gp-6.png" />
            <Avatar name="gp-5" src="/images/group-party/gp-5.png" />
            <Avatar name="gp-6" src="/images/group-party/gp-6.png" />
          </AvatarGroup>
          {/* Dakota Milk */}
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            w="full">
            <HStack alignItems="flex-start" spacing="12px">
              <AvatarComponent
                src="/images/dakota-milk.png"
                name="dakota milk"
                size="md"
              />
              <VStack alignItems="flex-start" alignSelf="center">
                <Heading fontSize="12px">Dakota Milk</Heading>
                <Text fontSize="10px" color="#7D8DA6">
                  $420.00
                </Text>
              </VStack>
            </HStack>
            {/* Chevron Right Icon */}
            <ChevronRightIcon boxSize={6} color="#A5B4CB" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}

export default RecentContacts
