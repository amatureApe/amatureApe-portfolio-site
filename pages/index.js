import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center" mt={50}>
        Hello, I'm a full-stack developer based in Los Angeles!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flowgrow={1}>
          <Heading as="h2" variant="page-title">
            amatureApe
          </Heading>
          <p>Fullstack Web3 Developer and Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, mt: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/amatureApePfp1.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page