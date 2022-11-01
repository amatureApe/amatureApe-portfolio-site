import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center" mt={50}>
        Hello, I'm a full-stack developer based in Los Angeles!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flowgrow={1}>
          <Heading as="h2" variant="page-title">
            amatureApe
          </Heading>
          Fullstack Web3 Developer and Designer
        </Box>
      </Box>
    </Container>
  )
}

export default Page