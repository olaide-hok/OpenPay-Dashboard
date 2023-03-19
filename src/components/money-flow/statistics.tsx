import {Box, Heading, HStack, VStack} from '@chakra-ui/react'
import React from 'react'
import ActionTile from '../action-tile'
import {statsActionData} from './stats-action-tile-data'

const Statistics = () => {
  return (
    <Box
      boxShadow="2xl"
      bg="white"
      borderRadius="10px"
      py="42px"
      pl="29"
      pr="34px"
      w="full">
      <VStack alignItems="flex-start" spacing="50px">
        <Heading fontSize="16px">Statistics</Heading>
        <HStack justifyContent="space-between" w="full">
          {statsActionData.map((stat) => {
            const {src, alt, variant, label, amt} = stat
            return (
              <ActionTile
                key={alt}
                src={src}
                alt={alt}
                amt={amt}
                label={label}
                variant={variant}
              />
            )
          })}
        </HStack>
      </VStack>
    </Box>
  )
}

export default Statistics
