'use client'

import { Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Text, VStack, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, Heart, Sparkles, Shield, Zap, Clock, Award, CheckCircle, Phone } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ServicesPageProps {
  businessInfo: any
  onNavigate: (page: string) => void
}

export default function ServicesPage({ businessInfo, onNavigate }: ServicesPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  
  const services = [
    {
      icon: Sparkles,
      title: 'Tratamente Laser',
      description: 'Tehnologie laser de ultimă generație pentru tratamente fără durere și recuperare rapidă',
      features: ['Chirurgie laser gingivală', 'Tratament carii cu laser', 'Sterilizare avansată', 'Recuperare accelerată'],
      price: 'Consultație pentru evaluare',
      color: 'purple.500'
    },
    {
      icon: Heart,
      title: 'Stomatologie Pediatrică',
      description: 'Îngrijire specializată pentru copii cu inhalosedare pentru confort maxim',
      features: ['Inhalosedare pentru copii', 'Tratamente fără durere', 'Abordare prietenoasă', 'Prevenție dentară copii'],
      price: 'De la 100 RON',
      color: 'pink.500'
    },
    {
      icon: Shield,
      title: 'Ortodonție',
      description: 'Aparate dentare moderne pentru copii și adulți, inclusiv soluții estetice',
      features: ['Aparate metalice/ceramice', 'Ortodonție pediatrică', 'Corectarea malocluziilor', 'Menținere ortodontică'],
      price: 'De la 1500 RON',
      color: 'green.500'
    },
    {
      icon: Activity,
      title: 'Inhalosedare',
      description: 'Sedare sigură pentru pacienții anxioși - adulți și copii se simt confortabil',
      features: ['Sedare cu gaz ilar', 'Pentru copii și adulți', 'Tratamente fără stres', 'Monitorizare constantă'],
      price: 'De la 80 RON/ședință',
      color: 'blue.500'
    },
    {
      icon: CheckCircle,
      title: 'Stomatologie Generală',
      description: 'Tratamente complete pentru întreaga familie cu echipamente moderne',
      features: ['Obturații estetice', 'Detartraj profesional', 'Tratamente de canal', 'Extrații dentare'],
      price: 'De la 80 RON',
      color: 'teal.500'
    },
    {
      icon: Zap,
      title: 'Urgențe Stomatologice',
      description: 'Intervenții rapide pentru dureri acute și traumatisme dentare',
      features: ['Disponibilitate urgență', 'Tratament durerii', 'Diagnosticare rapidă', 'Soluții imediate'],
      price: 'De la 120 RON',
      color: 'red.500'
    }
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
              SERVICII COMPLETE
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Servicii Stomatologice Complete în Alba Iulia
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              De la tratamente laser avansate la stomatologie pediatrică cu inhalosedare, oferim 
              servicii moderne pentru întreaga familie folosind tehnologia cea mai avansată.
            </Text>
          </MotionVStack>
        </Container>
      </Box>
      
      {/* Services Grid */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  spacing={6}
                  h="full"
                  borderWidth={2}
                  borderColor="transparent"
                  _hover={{
                    borderColor: service.color,
                    transform: 'translateY(-8px)',
                    shadow: '2xl'
                  }}
                  transition="all 0.3s"
                  position="relative"
                  overflow="hidden"
                >                  {/* Header */}
                  <VStack spacing={4}>
                    <Box
                      p={4}
                      bg={`${service.color.split('.')[0]}.50`}
                      borderRadius="2xl"
                      color={service.color}
                    >
                      <Icon as={service.icon} boxSize={12} />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="lg" color={headingColor} textAlign="center">
                        {service.title}
                      </Heading>
                      <Text color={textColor} textAlign="center" fontSize="md" lineHeight="tall">
                        {service.description}
                      </Text>
                    </VStack>
                  </VStack>
                  
                  {/* Features */}
                  <VStack align="start" spacing={3} w="full">
                    {service.features.map((feature, featureIdx) => (
                      <HStack key={featureIdx} spacing={3} align="start">
                        <Icon as={CheckCircle} boxSize={5} color="green.500" mt={0.5} />
                        <Text color={textColor} fontSize="sm">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                  
                  {/* Price and CTA */}
                  <VStack spacing={4} w="full">
                    <Box textAlign="center">
                      <Text fontSize="2xl" fontWeight="bold" color={service.color}>
                        {service.price}
                      </Text>
                      <Text fontSize="sm" color={textColor}>
                        *Preț orientativ, consultația include examinarea completă
                      </Text>
                    </Box>
                    <Button
                      colorScheme={service.color.split('.')[0]}
                      size="lg"
                      w="full"
                      rightIcon={<ArrowRight />}
                      onClick={() => onNavigate('contact')}
                    >
                      Programează Consultație
                    </Button>
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>      
      {/* CTA Section */}
      <Box bg="blue.600" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl" textAlign="center">
          <MotionVStack
            spacing={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4}>
              <Heading size={{ base: 'xl', md: '2xl' }}>
                Ai Întrebări Despre Serviciile Noastre?
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                Echipa noastră de specialiști este pregătită să îți răspundă la toate întrebările 
                și să îți ofere consultația de care ai nevoie.
              </Text>
            </VStack>
            
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'gray.100' }}
                leftIcon={<Phone />}
                as="a"
                href={`tel:${businessInfo.phone}`}
              >
                Sună: {businessInfo.phone}
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => onNavigate('contact')}
              >
                Programează Online
              </Button>
            </HStack>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}