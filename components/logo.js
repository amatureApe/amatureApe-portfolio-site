import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Logo = () => {
  const lazyApeImg = `/images/lazyape${useColorModeValue('-light', '-dark')}.png`
  return (
    <Link href="/" scroll={false}>
      <Flex alignItems="center" justifyContent="center" fontWeight="bold" fontSize="18px" h={30} p={5}>
        <Image src={lazyApeImg} width={100} height={100} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          fontWeight="bold"
          ml={3}
        >
          amatureApe
        </Text>
      </Flex>
    </Link>
  )
}

export default Logo