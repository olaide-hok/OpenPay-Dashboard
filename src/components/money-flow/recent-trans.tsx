import {
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import Btn from '../Button'
import {recentTransData} from './recent-trans-data'

interface TransItemProps {
  img: string
  alt: string
  desc: string
  label: string
  date: string
  amt: string
}

const TransItem = ({img, alt, label, date, amt, desc}: TransItemProps) => {
  return (
    <Flex alignItems="flex-start" justifyContent="space-between" w="full">
      <HStack spacing="12px">
        <Image src={img} alt={alt} />
        <Text fontSize="10px">{desc}</Text>
      </HStack>
      <Text fontSize="10px">{date}</Text>
      <Text fontSize="10px">{amt}</Text>
      <Btn variant="outline" label={label} />
    </Flex>
  )
}

type Props = {}

const RecentTrans = (props: Props) => {
  return (
    <VStack alignItems="flex-start" justifyContent="space-between" w="full">
      <HStack justifyContent="space-between" w="full">
        <Heading fontSize="15px">Recent Transactions</Heading>
        <Text fontSize="10px" as={Link}>
          View all
        </Text>
      </HStack>

      {recentTransData.map((recentTrans) => {
        const {img, alt, btnType, date, amt, desc} = recentTrans
        return (
          <TransItem
            img={img}
            alt={alt}
            label={btnType}
            date={date}
            amt={amt}
            desc={desc}
            key={alt}
          />
        )
      })}
    </VStack>
  )
}

export default RecentTrans
