import {HStack} from '@chakra-ui/react'
import React from 'react'
import {Sidebar} from './components/sidebar'

type Props = {}

const App = (props: Props) => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <Sidebar />
    </HStack>
  )
}

export default App
