'use client'

import { AspectRatio, Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { Activity, AlertCircle, ArrowRight, Award, Calendar, CheckCircle, Clock, DollarSign, Heart, PhoneCall, Shield, Sparkles, Star, ThumbsUp, Users } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

// Animații personalizate
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

interface HomePageProps {
  businessInfo: any
  onNavigate: (page: string) => void
}

export default function HomePage({ businessInfo, onNavigate }: HomePageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.600', 'blue.400')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')  
  const services = [
    {
      icon: Sparkles,
      title: 'Tratamente Laser',
      description: 'Tehnologie laser de ultimă generație pentru tratamente fără durere și recuperare rapidă',
      color: 'purple.500'
    },
    {
      icon: Heart,
      title: 'Stomatologie Pediatrică',
      description: 'Îngrijire specializată pentru copii cu inhalosedare pentru confort maxim',
      color: 'pink.500'
    },
    {
      icon: Shield,
      title: 'Ortodonție',
      description: 'Aparate dentare moderne pentru copii și adulți, inclusiv soluții estetice',
      color: 'green.500'
    },
    {
      icon: Activity,
      title: 'Inhalosedare',
      description: 'Sedare sigură pentru pacienții anxioși - adulți și copii se simt confortabil',
      color: 'blue.500'
    }
  ]
  
  const whyChooseUs = [
    { icon: Sparkles, text: 'Tehnologie Laser de Ultimă Generație' },
    { icon: Heart, text: 'Specialiști în Stomatologie Pediatrică' },
    { icon: Shield, text: 'Inhalosedare pentru Confort Maxim' },
    { icon: Award, text: 'Echipă Tânără și Experimentată' },
    { icon: Users, text: '94% Recomandă (29 Recenzii Google)' },
    { icon: Clock, text: 'Tratamente Moderne și Fără Durere' }
  ]
  
  return (
    <Box bg={bgColor}>
      {/* Hero Section - Dental Focused Design */}
      <Box 
        bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" 
        color="white" 
        position="relative" 
        overflow="hidden"
        minH="100vh"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          bgImage={`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`}
          />
        
        {/* Floating Elements */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          w="80px"
          h="80px"
          bg="whiteAlpha.200"
          borderRadius="full"
          filter="blur(1px)"
          animation={`${float} 8s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          top="60%"
          right="15%"
          w="60px"
          h="60px"
          bg="whiteAlpha.150"
          borderRadius="full"
          filter="blur(1px)"
          animation={`${float} 6s ease-in-out infinite reverse`}
        />
        
        <Container maxW="container.xl" py={{ base: 16, md: 20 }} position="relative" display="flex" alignItems="center" minH="100vh">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center" w="full">
            {/* Left Content */}
            <MotionVStack 
              align={{ base: 'center', lg: 'start' }} 
              spacing={8} 
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <Badge
                bg="whiteAlpha.200"
                color="white"
                px={6}
                py={3}
                fontSize="md"
                fontWeight="bold"
                borderRadius="full"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Box w={2} h={2} bg="green.400" borderRadius="full" />
                Tehnologie laser de ultimă generație
              </Badge>
              
              {/* Main Headline */}
              <VStack spacing={4} align={{ base: 'center', lg: 'start' }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}
                  fontWeight="black"
                  lineHeight="shorter"
                  letterSpacing="-0.02em"
                >
                  Stomatologie modernă
                  <Text as="span" 
                    bgGradient="linear(to-r, #FED7D7, #FEEBC8, #E6FFFA)"
                    bgClip="text"
                    display="block"
                  >
                    în Alba Iulia
                  </Text>
                </Heading>
                <Text 
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
                  fontWeight="medium"
                  opacity={0.95}
                  maxW="600px"
                  lineHeight="tall"
                >
                  Pasiune, eficiență și inovație în medicina dentară. 
                  Tratamente laser fără durere pentru adulți și copii.
                </Text>
              </VStack>
              
              {/* CTA Buttons */}
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} w={{ base: 'full', sm: 'auto' }}>
                <Button
                  size="xl"
                  h="60px"
                  px={8}
                  bg="white"
                  color="purple.700"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                  leftIcon={<Calendar />}
                  w={{ base: 'full', sm: 'auto' }}
                  transition="all 0.3s"
                  borderRadius="2xl"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                  onClick={() => onNavigate('contact')}
                >
                  Programează Consultația
                </Button>
                <Button
                  size="xl"
                  h="60px"
                  px={8}
                  variant="outline"
                  borderColor="white"
                  borderWidth={2}
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{ 
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)'
                  }}
                  leftIcon={<PhoneCall />}
                  as="a"
                  href={`tel:${businessInfo.phone}`}
                  w={{ base: 'full', sm: 'auto' }}
                  transition="all 0.3s"
                  borderRadius="2xl"
                  backdropFilter="blur(10px)"
                >
                  {businessInfo.phone}
                </Button>
              </Stack>
              
              {/* Stats */}
              <HStack spacing={8} pt={6} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                <VStack spacing={1}>
                  <HStack>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={Star} boxSize={4} color="yellow.300" fill="yellow.300" />
                    ))}
                  </HStack>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    94% Recomandă
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    8+
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    Ani experiență
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    29
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    Recenzii Google
                  </Text>
                </VStack>
              </HStack>
            </MotionVStack>
            
            {/* Right Visual Element */}
            <MotionBox 
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              position="relative"
            >
              {/* Main Patient Image Container */}
              <Box position="relative" w="full" h="600px">
                {/* Central 3D Tooth */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="200px"
                  h="200px"
                  zIndex={2}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="white"
                    borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
                    position="relative"
                    boxShadow="0 20px 40px rgba(0,0,0,0.3)"
                    animation={`${float} 4s ease-in-out infinite`}
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: '20%',
                      left: '20%',
                      right: '20%',
                      bottom: '40%',
                      bg: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                      borderRadius: '50%'
                    }}
                  >
                    {/* Orbital Rings */}
                    <Box
                      position="absolute"
                      top="-20px"
                      left="-20px"
                      right="-20px"
                      bottom="-20px"
                      border="2px solid"
                      borderColor="whiteAlpha.400"
                      borderRadius="full"
                      animation={`${float} 8s linear infinite`}
                    />
                    <Box
                      position="absolute"
                      top="-40px"
                      left="-40px"
                      right="-40px"
                      bottom="-40px"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      borderRadius="full"
                      animation={`${float} 12s linear infinite reverse`}
                    />
                  </Box>
                </Box>
                
                {/* Patient Photos */}
                <MotionBox
                  position="absolute"
                  top="10%"
                  right="10%"
                  w="150px"
                  h="150px"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor="whiteAlpha.300"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    <VStack spacing={2} color="white" textAlign="center">
                      <Box
                        w={12}
                        h={12}
                        bg="green.400"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Sparkles size={24} />
                      </Box>
                      <Text fontSize="sm" fontWeight="bold">
                        Zâmbet perfect
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
                
                <MotionBox
                  position="absolute"
                  bottom="15%"
                  left="5%"
                  w="130px"
                  h="130px"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor="whiteAlpha.300"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    <VStack spacing={2} color="white" textAlign="center">
                      <Box
                        w={10}
                        h={10}
                        bg="blue.400"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Shield size={20} />
                      </Box>
                      <Text fontSize="xs" fontWeight="bold">
                        Tratament sigur
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
        
        {/* Bottom Wave */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="100px"
          bg={bgColor}
          sx={{
            clipPath: 'polygon(0 50%, 100% 80%, 100% 100%, 0 100%)'
          }}
        />
      </Box>      
      {/* Services Section */}
      <Box py={{ base: 16, md: 20 }} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <MotionVStack 
              spacing={4} 
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                SERVICII PROFESIONALE
              </Badge>
              <Heading size="xl" color={headingColor}>
                Serviciile Noastre Stomatologice
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                De la urgențe stomatologice la tratamente estetice complexe, oferim soluții moderne 
                pentru toate nevoile tale de sănătate dentară.
              </Text>
            </MotionVStack>
            
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="full">
              {services.map((service, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 } as any}
                >
                  <VStack
                    bg={cardBg}
                    p={8}
                    borderRadius="xl"
                    spacing={4}
                    h="full"
                    borderWidth={1}
                    borderColor={borderColor}
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      borderColor: service.color,
                      transform: 'translateY(-8px)',
                      shadow: 'xl'
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    onClick={() => onNavigate('services')}
                  >                    {/* Gradient decorativ */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      h="3px"
                      bg={`linear-gradient(90deg, ${service.color} 0%, transparent 100%)`}
                    />
                    
                    <Box
                      p={4}
                      bg={`${service.color.split('.')[0]}.50`}
                      color={service.color}
                      borderRadius="full"
                    >
                      <Icon as={service.icon} boxSize={8} />
                    </Box>
                    <Heading size="md" color={headingColor} textAlign="center">
                      {service.title}
                    </Heading>
                    <Text color={textColor} textAlign="center" fontSize="sm" lineHeight="tall">
                      {service.description}
                    </Text>
                    <Box pt={2}>
                      <Text fontSize="sm" color={service.color} fontWeight="bold">
                        Află mai multe →
                      </Text>
                    </Box>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
            
            <Button
              size="lg"
              colorScheme="blue"
              onClick={() => onNavigate('services')}
              rightIcon={<ArrowRight />}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.3s"
            >
              Vezi Toate Serviciile
            </Button>
          </VStack>
        </Container>
      </Box>      
      {/* Why Choose Us */}
      <Box bg={cardBg} py={{ base: 16, md: 20 }} position="relative">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AspectRatio ratio={4/3}>
                <Box
                  bg="linear-gradient(135deg, #3182ce 0%, #2c5282 100%)"
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap={4}
                  color="white"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top="-50%"
                    right="-50%"
                    width="100%"
                    height="100%"
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    filter="blur(40px)"
                  />
                  <Icon as={Award} boxSize={20} />
                  <VStack spacing={2}>
                    <Text fontSize="4xl" fontWeight="bold">
                      {businessInfo.yearsInBusiness}+
                    </Text>
                    <Text fontSize="lg" textAlign="center" px={4}>
                      Ani de Excelență în Alba Iulia
                    </Text>
                  </VStack>
                </Box>
              </AspectRatio>
            </MotionBox>            
            <MotionVStack 
              align="start" 
              spacing={6}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                <Text
                  color={accentColor}
                  fontWeight="bold"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={2}
                >
                  DE CE SĂ NE ALEGI
                </Text>
                <Heading size="xl" color={headingColor} mb={4}>
                  Clinica Ta de Încredere din Alba Iulia
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="tall">
                  ZirconiuDental combină pasiunea pentru stomatologie cu tehnologia de ultimă generație. 
                  Dr. Paul Achim și echipa noastră oferă tratamente moderne, fără durere, atât pentru adulți 
                  cât și pentru copii. Suntem specializați în inhalosedare pentru pacienții anxioși și 
                  folosim tehnologia laser pentru rezultate superioare.
                </Text>
              </Box>
              
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} w="full">
                {whyChooseUs.map((item, idx) => (
                  <HStack key={idx} spacing={3} align="start">
                    <Icon as={CheckCircle} boxSize={5} color="green.500" mt={0.5} />
                    <Text color={textColor} fontSize="sm">
                      {item.text}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
              
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => onNavigate('about')}
                rightIcon={<ArrowRight />}
                _hover={{ transform: 'scale(1.05)' }}
                transition="all 0.3s"
              >
                Află Mai Multe Despre Noi
              </Button>
            </MotionVStack>
          </SimpleGrid>
        </Container>
      </Box>      
      {/* Testimonials */}
      <Box py={{ base: 16, md: 20 }} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <MotionVStack 
              spacing={4} 
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                TESTIMONIALE PACIENȚI
              </Badge>
              <Heading size="xl" color={headingColor}>
                Ce Spun Pacienții Noștri
              </Heading>
              <Text fontSize="lg" color={textColor}>
                94% din pacienți ne recomandă prietenilor și familiei
              </Text>
            </MotionVStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  name: 'Elena Stefan',
                  role: 'Mamă, Alba Iulia',
                  text: 'Am un băiețel de 6 anișori foarte fricos, dar cu inhalosedarea de la ZirconiuDental nu as fi avut nici o șansă cu el. Din propria experiență v-as îndruma sa treceți încă de la prima ședință la acest cabinet. Mulțumim!',
                  rating: 5,
                  treatment: 'Stomatologie Pediatrică'
                },
                {
                  name: 'Adrian Mateescu',
                  role: 'Pacient, Alba Iulia',
                  text: 'Profesionism, empatie, programare imediată, rezolvarea unei probleme care părea de durată într-un timp extrem de scurt. Echipa tânără și aparatura medicală de foarte bună calitate.',
                  rating: 5,
                  treatment: 'Tratament Laser'
                },
                {
                  name: 'Maria Florin',
                  role: 'Pacient, Alba Iulia',
                  text: 'Nu credeam că voi merge vreodată într-un cabinet stomatologic cu plăcere! Munca depusă de către toată echipa este excepțională. Nu am simțit durere și am revenit fără teamă.',
                  rating: 5,
                  treatment: 'Stomatologie Generală'
                }
              ].map((testimonial, idx) => (
                <MotionBox
                  key={idx}
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  borderWidth={1}
                  borderColor={borderColor}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 } as any}
                  _hover={{ 
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'blue.300'
                  }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Top gradient accent */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bg="linear-gradient(90deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)"
                  />
                  
                  {/* Quote mark */}
                  <Box
                    position="absolute"
                    top={6}
                    right={6}
                    w={8}
                    h={8}
                    bg="blue.500"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    &quot;
                  </Box>
                  
                  <VStack align="start" spacing={5} pt={4}>
                    {/* Rating */}
                    <HStack spacing={1}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} as={Star} boxSize={4} color="yellow.400" fill="yellow.400" />
                      ))}
                    </HStack>
                    
                    {/* Treatment badge */}
                    <Badge colorScheme="blue" fontSize="xs" px={3} py={1} borderRadius="full">
                      {testimonial.treatment}
                    </Badge>
                    
                    {/* Testimonial text */}
                    <Text 
                      color={textColor} 
                      fontSize="md" 
                      lineHeight="tall"
                      fontStyle="italic"
                    >
                      {testimonial.text}
                    </Text>
                    
                    {/* Patient info */}
                    <Box pt={2} borderTop="1px solid" borderColor={useColorModeValue('gray.200', 'gray.600')} w="full">
                      <Text fontWeight="bold" color={headingColor} fontSize="md">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color={textColor} opacity={0.8}>
                        {testimonial.role}
                      </Text>
                    </Box>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>      
      {/* CTA Section */}
      <Box 
        bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" 
        color="white" 
        py={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          bgImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3C/g%3E%3C/svg%3E")`}
          />
        
        {/* Floating dental elements */}
        <Box
          position="absolute"
          top="20%"
          right="15%"
          w="40px"
          h="40px"
          bg="whiteAlpha.200"
          borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
          animation={`${float} 6s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          bottom="30%"
          left="10%"
          w="30px"
          h="30px"
          bg="whiteAlpha.150"
          borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
          animation={`${float} 8s ease-in-out infinite reverse`}
        />
        
        <Container maxW="container.xl" textAlign="center" position="relative">
          <MotionVStack 
            spacing={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={6}>
              <Badge
                bg="whiteAlpha.200"
                color="white"
                px={6}
                py={3}
                fontSize="md"
                fontWeight="bold"
                borderRadius="full"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Heart size={16} />
                ÎNCEPE TRANSFORMAREA TA
              </Badge>
              
              <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl" lineHeight="shorter">
                Zâmbetul perfect începe cu o
                <Text as="span" color="yellow.300"> programare astăzi</Text>
              </Heading>
              
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" lineHeight="tall" opacity={0.95}>
                Descoperă diferența tratamentelor cu laser și inhalosedare. 
                Programează-te pentru o consultație în clinica noastră modernă din Alba Iulia.
              </Text>
              
              {/* Benefits */}
              <HStack spacing={8} flexWrap="wrap" justify="center" pt={4}>
                <HStack>
                  <Icon as={Sparkles} boxSize={5} color="purple.300" />
                  <Text fontWeight="medium">Tehnologie laser</Text>
                </HStack>
                <HStack>
                  <Icon as={Heart} boxSize={5} color="pink.300" />
                  <Text fontWeight="medium">Inhalosedare</Text>
                </HStack>
                <HStack>
                  <Icon as={Shield} boxSize={5} color="blue.300" />
                  <Text fontWeight="medium">Fără durere</Text>
                </HStack>
              </HStack>
            </VStack>
            
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
              <Button
                size="xl"
                h="60px"
                px={10}
                bg="white"
                color="purple.700"
                fontWeight="bold"
                fontSize="lg"
                _hover={{ 
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
                leftIcon={<Calendar />}
                onClick={() => onNavigate('contact')}
                transition="all 0.3s"
                borderRadius="2xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.2)"
              >
                Programează Consultația
              </Button>
              <Button
                size="xl"
                h="60px"
                px={8}
                variant="outline"
                borderColor="white"
                borderWidth={2}
                color="white"
                fontWeight="bold"
                fontSize="lg"
                _hover={{ 
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)'
                }}
                leftIcon={<PhoneCall />}
                as="a"
                href={`tel:${businessInfo.phone}`}
                transition="all 0.3s"
                borderRadius="2xl"
                backdropFilter="blur(10px)"
              >
                Sună: {businessInfo.phone}
              </Button>
            </Stack>
            
            {/* Trust signals */}
            <HStack spacing={6} pt={4} opacity={0.9} flexWrap="wrap" justify="center">
              <Text fontSize="sm">✓ 94% din pacienți ne recomandă</Text>
              <Text fontSize="sm">✓ Specialiști în stomatologie pediatrică</Text>
              <Text fontSize="sm">✓ Tehnologie laser de ultimă generație</Text>
            </HStack>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}