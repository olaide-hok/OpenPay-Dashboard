import {Avatar} from '@chakra-ui/react'

interface AvatarProps {
  name: string
  src: string
  size: string
}

const AvatarComponent = ({name, src, size}: AvatarProps) => {
  return <Avatar name={name} src={src} size={size} />
}

export default AvatarComponent
