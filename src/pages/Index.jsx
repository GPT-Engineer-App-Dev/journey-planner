import { Container, VStack, Box, Text, Input, Button, HStack, Image, SimpleGrid, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">TravelBooking</Text>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/destinations">Destinations</Link>
          <Link as={RouterLink} to="/bookings">Bookings</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bgImage="url('/images/hero.jpg')" bgSize="cover" bgPos="center" height="60vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} bg="rgba(0, 0, 0, 0.5)" p={8} borderRadius="md">
          <Text fontSize="3xl" color="white" fontWeight="bold">Find Your Perfect Getaway</Text>
          <HStack spacing={4} width="100%">
            <Input placeholder="Destination" bg="white" />
            <Input type="date" placeholder="Check-in" bg="white" />
            <Input type="date" placeholder="Check-out" bg="white" />
            <Button colorScheme="teal">Search</Button>
          </HStack>
        </VStack>
      </Box>

      {/* Popular Destinations */}
      <Box p={8}>
        <Text fontSize="2xl" mb={4} fontWeight="bold">Popular Destinations</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box>
            <Image src="/images/destination1.jpg" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Paris</Text>
            <Text>Experience the city of lights and romance.</Text>
          </Box>
          <Box>
            <Image src="/images/destination2.jpg" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Bali</Text>
            <Text>Relax in the tropical paradise of Bali.</Text>
          </Box>
          <Box>
            <Image src="/images/destination3.jpg" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">New York</Text>
            <Text>Explore the bustling city that never sleeps.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">TravelBooking</Text>
            <Text mt={2}>Your trusted travel partner.</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
            <VStack align="start" mt={2}>
              <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
              <Link as={RouterLink} to="/terms">Terms of Service</Link>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
            <HStack spacing={4} mt={2}>
              <Link href="https://facebook.com" isExternal><FaFacebook size="24" /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter size="24" /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram size="24" /></Link>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;