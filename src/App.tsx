import {Container, HStack, VStack} from '@chakra-ui/react'
import MoneyFlow from './components/money-flow'
import MyCard from './components/mycard'
import {Sidebar} from './components/sidebar'
import TopNav from './components/top-nav'

const App = () => {
  return (
    <Container maxW="container.xl">
      <HStack h="100vh" flex={1}>
        <Sidebar />
        <VStack h="full" w="full" alignItems="flex-start">
          {/* Search Icon, Bell icon, Avatar */}
          <TopNav />
          {/* MyCard and Money Flow Side-by-Side */}
          <HStack alignItems="flex-start" w="full">
            {/* My Card */}
            <MyCard />
            {/* Money Flow */}
            <MoneyFlow />
          </HStack>
        </VStack>
      </HStack>
    </Container>
  )
}

export default App
