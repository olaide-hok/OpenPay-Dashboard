import {HStack, VStack} from '@chakra-ui/react'
import Graph from './graph'
import RecentContacts from './recent-contacts'
import RecentTrans from './recent-trans'
import Statistics from './statistics'

const MoneyFlow = () => {
  return (
    <VStack alignItems="flex-start" justifyContent="space-between" w="full">
      {/* Graph and Recent Contact */}
      <HStack w="full" justifyContent="space-between" alignItems="flex-start">
        {/* Graph */}
        <Graph />
        {/* Recent Contact */}
        <RecentContacts />
      </HStack>
      <VStack alignItems="flex-start" w="full">
        {/* Recent Transactions */}
        <RecentTrans />
        {/* Statistics */}
        <Statistics />
      </VStack>
    </VStack>
  )
}

export default MoneyFlow
