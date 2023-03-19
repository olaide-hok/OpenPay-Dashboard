import {SearchIcon} from '@chakra-ui/icons'
import {Box, HStack, Image} from '@chakra-ui/react'
import AvatarComponent from '../avatar'

const TopNav = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      w="full"
      pt="20px">
      <HStack spacing="20px">
        {/* Search Icon */}
        <SearchIcon />
        {/* Bell and badge Icon */}
        <Image src="/images/bell-badge.png" alt="bell-badge-icon" />
        {/* Avatar */}
        <AvatarComponent src="/images/derick.png" name="derick" />
      </HStack>
    </Box>
  )
}

export default TopNav
