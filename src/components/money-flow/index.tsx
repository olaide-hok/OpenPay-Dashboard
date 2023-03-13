import {HStack, VStack} from '@chakra-ui/react'
import Graph from './graph'
import RecentContacts from './recent-contacts'
import RecentTrans from './recent-trans'
import Statistics from './statistics'

type Props = {}

const MoneyFlow = (props: Props) => {
  return (
    <VStack>
      {/* Graph and Recent Contact */}
      <HStack>
        {/* Graph */}
        <Graph />
        {/* Recent Contact */}
        <RecentContacts />
      </HStack>
      <VStack>
        {/* Recent Transactions */}
        <RecentTrans />
        {/* Statistics */}
        <Statistics />
      </VStack>
    </VStack>
  )
}

export default MoneyFlow
