import {HStack, VStack} from '@chakra-ui/react'
import MoneyFlow from './components/money-flow'
import MyCard from './components/mycard'
import {Sidebar} from './components/sidebar'
import TopNav from './components/top-nav'

type Props = {}

const App = (props: Props) => {
  return (
    <HStack width="full" h="100vh" flex={1} overflow="hidden">
      <Sidebar />
      <VStack>
        {/* Search Icon, Bell icon, Avatar */}
        <TopNav />
        {/* MyCard and Money Flow Side-by-Side */}
        <HStack>
          {/* My Card */}
          <MyCard />
          {/* Money Flow */}
          <MoneyFlow />
        </HStack>
      </VStack>
    </HStack>
  )
}

export default App
