'use client'

import { Badge, Box, Button, Container, FormControl, FormLabel, HStack, Heading, Icon, Input, SimpleGrid, Text, Textarea, VStack, useColorModeValue, Select, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Calendar, Send, Heart, Star, Award } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ContactPageProps {
  businessInfo: any
}

export default function ContactPage({ businessInfo }: ContactPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [businessInfo.phone, 'Programări și urgențe'],
      color: 'blue.500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [businessInfo.email, 'Pentru întrebări generale'],
      color: 'green.500'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      details: [`${businessInfo.address}`, `${businessInfo.city}, ${businessInfo.state}`],
      color: 'purple.500'
    },
    {
      icon: Clock,
      title: 'Program',
      details: ['Luni-Vineri: 09:00-19:00', 'Sâmbătă: 09:00-15:00'],
      color: 'orange.500'
    }
  ]  
  const services = [
    'Consultație Generală',
    'Tratamente Laser',
    'Stomatologie Pediatrică',
    'Ortodonție',
    'Inhalosedare',
    'Urgențe Stomatologice',
    'Stomatologie Generală',
    'Prevenție Dentară'
  ]
  
  return (
    <Box bg={bgColor} pt="80px">
      {/* Hero Section */}
      <Box bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" color="white" py={{ base: 16, md: 20 }} minH="60vh" display="flex" alignItems="center">
        <Container maxW="container.xl">
          <MotionVStack
            spacing={6}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              bg="whiteAlpha.200" 
              color="white" 
              fontSize="md" 
              px={4} 
              py={2}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              CONTACT ȘI PROGRAMĂRI
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Programează-te la Cabinetul Nostru
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              Suntem aici să îți oferim cea mai bună îngrijire dentară. 
              Contactează-ne pentru programări sau consultații de urgență.
            </Text>
          </MotionVStack>
        </Container>
      </Box>
      
      {/* Contact Info */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} mb={16}>
            {contactInfo.map((info, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  spacing={4}
                  textAlign="center"
                  borderWidth={1}
                  borderColor={borderColor}
                  _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >                  <Box
                    p={4}
                    bg={info.color}
                    borderRadius="2xl"
                    color="white"
                  >
                    <Icon as={info.icon} boxSize={8} />
                  </Box>
                  <VStack spacing={2}>
                    <Heading size="md" color={headingColor}>
                      {info.title}
                    </Heading>
                    {info.details.map((detail, detailIdx) => (
                      <Text
                        key={detailIdx}
                        color={detailIdx === 0 ? headingColor : textColor}
                        fontSize={detailIdx === 0 ? 'md' : 'sm'}
                        fontWeight={detailIdx === 0 ? 'semibold' : 'normal'}
                      >
                        {detail}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
          
          {/* Contact Form */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VStack align="start" spacing={6}>
                <VStack align="start" spacing={3}>
                  <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                    PROGRAMARE ONLINE
                  </Badge>
                  <Heading size="xl" color={headingColor}>
                    Completează Formularul de Programare
                  </Heading>
                  <Text color={textColor} fontSize="lg" lineHeight="tall">
                    Completează formularul alăturat și te vom contacta în cel mai scurt timp 
                    pentru confirmarea programării. Pentru urgențe, te rugăm să ne suni direct.
                  </Text>
                </VStack>
                
                <VStack align="start" spacing={4} w="full">
                  <HStack spacing={3}>
                    <Icon as={Star} boxSize={5} color="yellow.400" />
                    <Text color={textColor}>
                      <Text as="span" fontWeight="bold">Consultația inițială</Text> include examinarea completă și planul de tratament
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={Award} boxSize={5} color="blue.500" />
                    <Text color={textColor}>
                      <Text as="span" fontWeight="bold">Garanție</Text> pentru toate lucrările efectuate
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={Heart} boxSize={5} color="red.500" />
                    <Text color={textColor}>
                      <Text as="span" fontWeight="bold">Îngrijire personalizată</Text> adaptată nevoilor tale
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </MotionBox>            
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                borderWidth={1}
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              >
                <VStack spacing={6} as="form">
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel color={headingColor}>Nume</FormLabel>
                      <Input placeholder="Numele tău" bg={bgColor} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color={headingColor}>Prenume</FormLabel>
                      <Input placeholder="Prenumele tău" bg={bgColor} />
                    </FormControl>
                  </SimpleGrid>
                  
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel color={headingColor}>Telefon</FormLabel>
                      <Input placeholder="0722 123 456" bg={bgColor} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color={headingColor}>Email</FormLabel>
                      <Input placeholder="email@exemplu.com" bg={bgColor} />
                    </FormControl>
                  </SimpleGrid>
                  
                  <FormControl isRequired>
                    <FormLabel color={headingColor}>Serviciu Dorit</FormLabel>
                    <Select placeholder="Selectează serviciul" bg={bgColor}>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel color={headingColor}>Data Preferată</FormLabel>
                    <Input type="date" bg={bgColor} />
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel color={headingColor}>Mesaj Adițional</FormLabel>
                    <Textarea
                      placeholder="Descrie problemele sau întrebările tale..."
                      rows={4}
                      bg={bgColor}
                    />
                  </FormControl>
                  
                  <Button
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    leftIcon={<Send />}
                    _hover={{ transform: 'scale(1.02)' }}
                    transition="all 0.3s"
                  >
                    Trimite Cererea de Programare
                  </Button>
                  
                  <Text fontSize="sm" color={textColor} textAlign="center">
                    Prin trimiterea formularului, ești de acord cu 
                    <Text as="span" color="blue.500" cursor="pointer"> Politica de Confidențialitate</Text>
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}