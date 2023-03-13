import {Flex} from '@chakra-ui/react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <Flex alignItems="flex-end">
      {/* Search Icon */}
      Search
      {/* Bell and badge Icon */}
      Bell-Badge
      {/* Avatar */}
      Avatar
    </Flex>
  )
}

export default TopNav
