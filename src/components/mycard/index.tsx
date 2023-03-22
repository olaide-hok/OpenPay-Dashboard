import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import {SmallAddIcon} from '@chakra-ui/icons'
import Btn from '../Button'
import ActionTile from '../action-tile'
import {actionData} from './action-tile-data'

const MyCard = () => {
  return (
    <Box pl={{base: '', lg: '22px'}} maxW={{base: 56, lg: '256px'}}>
      <VStack alignItems="flex-start" spacing="25px">
        <Box w="full">
          <Heading mb="25px" fontSize="18px">
            My Card
          </Heading>
          {/* Debit Card Component */}
          <Box
            w="full"
            borderRadius="12px"
            py="11px"
            px="15px"
            bgColor="#0177FB"
            color="white">
            <VStack alignItems="flex-start" spacing="36px">
              <VStack alignItems="flex-start">
                <Text fontSize="9px">Name</Text>
                <Heading fontSize="13px">Carla Rosser</Heading>
              </VStack>
              <HStack
                justifyContent="space-between"
                w="full"
                alignItems="flex-start">
                <VStack alignItems="flex-start">
                  <Text fontSize="10px">1200 01452 54215</Text>
                  <Heading fontSize="8px">08/23</Heading>
                </VStack>
                <Image src="/images/visa-logo.png" alt="visa" />
              </HStack>
            </VStack>
          </Box>
        </Box>

        {/* Send Money Button */}
        <Box w="full">
          <Heading fontSize="16px" mb="10px">
            Send Money
          </Heading>
          <HStack
            borderRadius="10px"
            py="4"
            px="4"
            boxShadow="2xl"
            spacing="45px"
            mb="20px"
            bg="white">
            <HStack spacing="11px">
              <Image src="/images/mastercard-logo.png" alt="mastercard-logo" />
              <Text>Debit</Text>
            </HStack>
            {/* Dropdown */}
            <Select
              placeholder="$10.680"
              borderRadius="25px"
              border="none"
              fontSize="16px"
              w="165px">
              <option value="option1">
                <Text as={'span'} color="#A4B4CB">
                  $
                </Text>
                10.790
              </option>
              <option value="option2">
                {' '}
                <Text as={'span'} color="#A4B4CB">
                  $
                </Text>
                10.810
              </option>
              <option value="option3">
                {' '}
                <Text as={'span'} color="#A4B4CB">
                  $
                </Text>
                10.911
              </option>
              <option value="option2">
                {' '}
                <Text as={'span'} color="#A4B4CB">
                  $
                </Text>
                10.102
              </option>
              <option value="option3">
                {' '}
                <Text as={'span'} color="#A4B4CB">
                  $
                </Text>
                10.113
              </option>
            </Select>
          </HStack>

          {/* Enter Amount Input */}
          <VStack spacing="4" alignItems="flex-start" mb="25px">
            <Box
              boxShadow="2xl"
              bg="white"
              borderRadius="10px"
              px="15px"
              pb="15px"
              pt="6px">
              <HStack alignItems="flex-start" mb="13px">
                <Image src="/images/amt-icon.png" alt="enter amt avatar" />
                <Text fontSize="12px">Enter the amount</Text>
              </HStack>
              {/* Input Field */}
              <InputGroup border="transparent">
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="21px"
                  children="$"
                />
                <Input fontSize="21px" placeholder="800.00" />
                <InputRightElement
                  children={
                    <>
                      <Image src="/images/usa-logo.png" alt="mastercard-logo" />
                      <Image
                        src="/images/france-logo.png"
                        alt="mastercard-logo"
                        ml="-1"
                      />
                    </>
                  }
                />
              </InputGroup>
            </Box>

            <HStack justifyContent="space-between" w="full">
              <HStack>
                <Image src="/images/astrid-hayes.png" alt="astrid hayes" />
                <Text>Astrid Hayes</Text>
              </HStack>
              <SmallAddIcon
                borderRadius="50%"
                bgColor="#dff3fe"
                w="24px"
                h="24px"
              />
            </HStack>

            {/* Send Button */}
            <Btn variant="solid" label="Send Money" />
          </VStack>
        </Box>

        {/* Quick Transfer Section */}
        <Box py="15px" px="12px" border="1px solid #E8E8E8" rounded="md">
          <VStack spacing="13px" alignItems="flex-start">
            <Heading fontSize="11px">Quick transfer</Heading>
            <HStack
              alignItems="center"
              borderRadius="7px"
              border="0.566969px solid #F6F8FB"
              p="10px"
              justifyContent="space-between"
              bg="white">
              <HStack alignItems="flex-start" spacing="11px">
                <Image
                  src="/images/mastercard-logo.png"
                  alt="mastercard-logo"
                />
                <Text>Debit</Text>
              </HStack>
              {/* Dropdown */}
              <Select
                placeholder="$10.432"
                borderRadius="25px"
                border="none"
                fontSize="16px"
                w="105px">
                <option value="option1">
                  <Text as={'span'} color="#A4B4CB">
                    $
                  </Text>
                  10.790
                </option>
                <option value="option2">
                  {' '}
                  <Text as={'span'} color="#A4B4CB">
                    $
                  </Text>
                  10.810
                </option>
                <option value="option3">
                  {' '}
                  <Text as={'span'} color="#A4B4CB">
                    $
                  </Text>
                  10.911
                </option>
                <option value="option2">
                  {' '}
                  <Text as={'span'} color="#A4B4CB">
                    $
                  </Text>
                  10.102
                </option>
                <option value="option3">
                  {' '}
                  <Text as={'span'} color="#A4B4CB">
                    $
                  </Text>
                  10.113
                </option>
              </Select>
            </HStack>

            {/* Enter Amount Input */}
            {/* Input Field */}
            <VStack
              alignItems="flex-start"
              border="1px solid #819CFD"
              borderRadius="8px"
              py="10px"
              px="9px"
              spacing="6px">
              <HStack alignItems="flex-start">
                <Text fontSize="12px">Enter the amount</Text>
              </HStack>

              <InputGroup border="transparent">
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="21px"
                  children="$"
                />
                <Input placeholder="1,24" />
                <InputRightElement
                  children={
                    <>
                      <Image src="/images/qt1.png" alt="mastercard-logo" />
                      <Image
                        src="/images/qt2.png"
                        alt="mastercard-logo"
                        ml="-1"
                      />
                    </>
                  }
                />
              </InputGroup>
            </VStack>

            {/* Action Tiles */}
            {/* <Box> */}
            <HStack justifyContent="space-between" w="full">
              {actionData.map((action) => {
                const {src, alt, variant, label} = action
                return (
                  <ActionTile
                    key={alt}
                    src={src}
                    alt={alt}
                    label={label}
                    variant={variant}
                  />
                )
              })}
            </HStack>
            {/* </Box> */}
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default MyCard
