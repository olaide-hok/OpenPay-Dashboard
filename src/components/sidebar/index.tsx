import {List, ListItem, VStack} from '@chakra-ui/react'
import {Logo} from '../logo'
import {navItems1, navItems2} from './nav-data'
import NavItem from './nav-item'

const Sidebar = () => {
  return (
    <VStack
      alignItems="flex-start"
      justifyContent="space-between"
      width="full"
      height="full"
      maxW={{base: 'none', md: 44}}
      borderRightColor={{base: 'none', lg: '#E8ECF5'}}
      borderRightWidth={2}
      flexShrink={0}
      pl="5"
      pt="6"
      pb="7">
      <VStack>
        {/* Logo */}
        <Logo />
        <List width="full" spacing="15px">
          {navItems1.map((item) => {
            return (
              <ListItem key={item.label}>
                {/* NavItem */}
                <NavItem label={item.label} icon={item.icon} />
              </ListItem>
            )
          })}
        </List>
      </VStack>
      <VStack>
        <List width="full" spacing="15px">
          {navItems2.map((item) => {
            return (
              <ListItem key={item.label}>
                {/* NavItem */}
                <NavItem label={item.label} icon={item.icon} />
              </ListItem>
            )
          })}
        </List>
      </VStack>
    </VStack>
  )
}

export default Sidebar
