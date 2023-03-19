//@ts-nocheck
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import {BiTrendingUp} from 'react-icons/bi'
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip)

const Graph = () => {
  const data = {
    labels: ['DEC2', 'DEC3', 'DEC4', 'DEC5', 'DEC6', 'DEC7', 'DEC8'],
    datasets: [
      {
        data: [0.8, 1.5, 2.6, 2.8, 3.5],
        borderColor: '#0177FB',
        pointStyle: 'circle',
        backgroundColor: '#FFFFFF',
        radius: 6,
        hoverRadius: 8,
        tension: 0.5,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        offset: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        offset: true,
        dash: [10, 15],
        min: 0,
        max: 4,
        ticks: {
          callback: (val) => val + 'K',
        },
      },
    },
  }

  return (
    <VStack w="full" spacing="18px">
      <VStack w="full" spacing="20px">
        {/* 1st Stack Money Flow */}
        <HStack justifyContent="space-between" w="full">
          <Heading fontSize="16px">Money Flow</Heading>
          <HStack spacing="20px">
            <Icon as={BiTrendingUp} color="#A4B4CB" />
            <Image src="/images/network.png" alt="network bars" />
          </HStack>
        </HStack>
        {/* 2nd Stack Savings Percentage Rise and weekdays dropdown */}
        <HStack justifyContent="space-between" alignItems="flex-start" w="full">
          <HStack spacing="4" alignItems="flex-start">
            <HStack>
              <Box
                display="flex"
                bgColor="#0177FB"
                borderRadius="50%"
                p="4px"
                alignItems="center"
                color="#ffffff">
                <Icon as={BiTrendingUp} color="#ffffff" />
              </Box>
              <Text>Savings</Text>
            </HStack>

            <HStack>
              <Icon as={BiTrendingUp} color="#0177FB" />
              <Text>+6,79%</Text>
            </HStack>
          </HStack>
          {/* Weekdays dropdown */}

          <Select
            placeholder="Week"
            borderRadius="25px"
            fontSize="16px"
            w="100px">
            <option value="option1">Monday</option>
            <option value="option2">Tuesday</option>
            <option value="option3">Wednesday</option>
            <option value="option2">Thursday</option>
            <option value="option3">Friday</option>
          </Select>
        </HStack>
      </VStack>

      <Flex w="352px" h="full">
        <Line data={data} options={options}></Line>
      </Flex>
    </VStack>
  )
}
export default Graph
