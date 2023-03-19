import {ChevronRightIcon, SearchIcon} from '@chakra-ui/icons'
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import AvatarComponent from '../avatar'
import {HiPencil} from 'react-icons/hi'
import {recentContacts} from './recent-contacts-data'

const RecentContacts = () => {
  return (
    <VStack alignItems="flex-start" w="full">
      <Flex justifyContent="space-between" w="full">
        <Heading fontSize="13px">Recent Contacts</Heading>
        {/* Pen and Search Icon */}
        <HStack alignItems="flex-start" spacing="20px">
          {/* Pencil Icon */}
          <Icon as={HiPencil} color="#BCCDE1" />
          {/* Search Icon */}
          <SearchIcon color="#0177FB" />
        </HStack>
      </Flex>
      <Text fontSize="10px">18 recipients</Text>
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
        // spacing="24px"
        px="16.5px"
        pb="17px"
        pt="14px"
        justifyContent="space-between"
        w="full">
        <VStack alignItems="flex-start" spacing="11px" mb="24px">
          <Text>Group Party</Text>
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
        </VStack>
        {/* Dakota Milk */}
        <HStack alignItems="flex-start" justifyContent="space-between" w="full">
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
      </Box>
    </VStack>
  )
}

export default RecentContacts
