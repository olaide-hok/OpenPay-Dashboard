import {Box, HStack, VStack} from '@chakra-ui/react'
import Graph from './graph'
import RecentContacts from './recent-contacts'
import RecentTrans from './recent-trans'
import Statistics from './statistics'

const MoneyFlow = () => {
  return (
    <Box mt="45px" ml={9}>
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        w="full"
        h="full"
        spacing="45px">
        {/* Graph and Recent Contact */}
        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing="8">
          {/* Graph */}
          <Graph />
          {/* Recent Contact */}
          <RecentContacts />
        </HStack>
        <VStack alignItems="flex-start" w="full" spacing="30px">
          {/* Recent Transactions */}
          <RecentTrans />
          {/* Statistics */}
          <Statistics />
        </VStack>
      </VStack>
    </Box>
  )
}

export default MoneyFlow
