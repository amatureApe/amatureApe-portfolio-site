import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
        <Paragraph>
          I'm a freelance full-stack web3 developer from the United States with a particular
          passion for DeFi and all the opportunities that it unlocks for the world.
          As a crypto native who was lucky enough to be able to turn my passions into able
          career, I'm always eager to build.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mx={2}>
              My portfolio
            </Button>
          </NextLink>
          <NextLink href="https://github.com/amatureApe">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mx={2}>
              My github
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Los Angeles, Califonia.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated with a degree in Political Science.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Became a blockchain developer specializing in DeFi.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          When I'm not coding, I like to spend my free time reading history
          and philosophy, traveling, learning new langugaes, and weightlifting.
          I also like playing videogames and gambling (responsibly).
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page