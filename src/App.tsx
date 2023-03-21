import {Container, Flex, HStack, useDisclosure, VStack} from '@chakra-ui/react'
import MoneyFlow from './components/money-flow'
import MyCard from './components/mycard'
import Sidebar from './components/sidebar'
import SideBarDrawer from './components/sidebar/sidebar-drawer'
import TopNav from './components/top-nav'

const App = () => {
  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose,
  } = useDisclosure()
  return (
    <Container maxW="container.xl">
      <HStack h="100vh" flex={1}>
        <Flex
          as="aside"
          h="full"
          w="full"
          display={{base: 'none', lg: 'flex'}}
          maxW={{base: '11rem', xl: 'sm'}}>
          <Sidebar />
        </Flex>
        <VStack h="full" w="full" alignItems="flex-start" spacing={0}>
          {/* Search Icon, Bell icon, Avatar */}
          <TopNav onSidebarOpen={onSidebarOpen} />
          {/* MyCard and Money Flow Side-by-Side */}
          <Flex alignItems="flex-start" justifyContent="space-between" w="full">
            {/* My Card */}
            <MyCard />
            {/* Money Flow */}
            <MoneyFlow />
          </Flex>
        </VStack>
      </HStack>
      <SideBarDrawer isOpen={isSidebarOpen} onClose={onSidebarClose} />
    </Container>
  )
}

export default App
