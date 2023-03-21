import {SearchIcon} from '@chakra-ui/icons'
import {
  Box,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import AvatarComponent from '../avatar'
import {GrMenu} from 'react-icons/gr'

interface Prop {
  onSidebarOpen: () => void
}

const TopNav = ({onSidebarOpen}: Prop) => {
  return (
    <Box as="nav" display="flex" w="full" pt="20px">
      <HStack
        spacing="20px"
        w="full"
        justifyContent={{base: 'space-between', lg: 'flex-end'}}
        alignItems="center">
        <IconButton
          onClick={onSidebarOpen}
          display={{base: 'inherit', lg: 'none'}}
          icon={<GrMenu />}
          aria-label="Toggle Sidebar"
        />
        <HStack>
          {/* Search Icon */}
          <InputGroup>
            <Input border="none" width="auto" size="md" />
            <InputRightElement children={<SearchIcon color="#C1C1C1" />} />
          </InputGroup>

          {/* Bell and badge Icon */}
          <Image src="/images/bell-badge.png" alt="bell-badge-icon" />
          {/* Avatar */}
          <AvatarComponent src="/images/derick.png" name="derick" size="xs" />
        </HStack>
      </HStack>
    </Box>
  )
}

export default TopNav
