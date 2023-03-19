import {Avatar} from '@chakra-ui/react'

interface AvatarProps {
  name: string
  src: string
}

const AvatarComponent = ({name, src}: AvatarProps) => {
  return <Avatar name={name} src={src} size="xs" />
}

export default AvatarComponent
