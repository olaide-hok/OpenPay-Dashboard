import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import Sidebar from '.'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SideBarDrawer = ({isOpen, onClose}: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <Sidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default SideBarDrawer
