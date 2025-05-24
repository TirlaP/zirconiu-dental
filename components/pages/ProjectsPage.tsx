'use client'

import { Badge, Box, Button, Container, Flex, HStack, Heading, Icon, SimpleGrid, Tag, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Activity, ArrowRight, Award, Clock, Eye, Heart, Shield, Sparkles } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ProjectsPageProps {
  businessInfo: any
}

export default function ProjectsPage({ businessInfo }: ProjectsPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  
  const cases = [
    {
      title: 'Transformare Completă cu Fațete Ceramice',
      category: 'Estetica Dentară',
      duration: '3 săptămâni',
      description: 'Pacient tânăr cu dinți decolorați și neuniformi. Aplicarea a 8 fațete ceramice pentru un zâmbet perfect.',
      beforeAfter: 'Înainte: Dinți decolorați și neuniformi | După: Zâmbet perfect și alb',
      tags: ['Fațete Ceramice', 'Estetica', 'Albire'],
      icon: Sparkles,
      color: 'purple.500'
    },
    {
      title: 'Implant Dentar cu Încărcare Imediată',
      category: 'Implantologie',
      duration: '1 zi',
      description: 'Extracție și implant cu coroană provisorie în aceeași ședință. Rezultat estetic și funcțional excelent.',
      beforeAfter: 'Înainte: Dinte deteriorat ireversibil | După: Implant cu coroană definitivă',
      tags: ['Implant', 'Chirurgie', 'Încărcare Imediată'],
      icon: Activity,
      color: 'blue.500'
    },
    {
      title: 'Corectare Ortodontică cu Invisalign',
      category: 'Ortodonție',
      duration: '14 luni',
      description: 'Tratament ortodontic pentru corectarea suprapunerii dentare folosind sistemul Invisalign.',
      beforeAfter: 'Înainte: Dinți suprapuși și înclinați | După: Aliniere perfectă',
      tags: ['Invisalign', 'Ortodonție', 'Invizibil'],
      icon: Shield,
      color: 'green.500'
    },
    {
      title: 'Reconstrucție Completă Arcade Dentară',
      category: 'Protezare',
      duration: '6 săptămâni',
      description: 'Pacient în vârstă cu multiple pierderi dentare. Realizarea unei proteze fixe pe implanturi.',
      beforeAfter: 'Înainte: Multiple absențe dentare | După: Arcade completă funcțională',
      tags: ['Proteze Fixe', 'Implanturi Multiple', 'Reconstrucție'],
      icon: Heart,
      color: 'red.500'
    },
    {
      title: 'Tratament Parodontal și Estetică',
      category: 'Paradontologie',
      duration: '2 luni',
      description: 'Tratament complex pentru boala parodontală urmată de refaceri estetice ale dinților anteriori.',
      beforeAfter: 'Înainte: Gingivită avansată și mobilitate | După: Gingii sănătoase și stabilitate',
      tags: ['Parodontal', 'Gingivită', 'Stabilizare'],
      icon: Award,
      color: 'orange.500'
    },
    {
      title: 'Albire Dentară Profesională',
      category: 'Estetica Dentară',
      duration: '2 ore',
      description: 'Albire dentară cu sistem LED pentru un rezultat spectaculos în doar o ședință.',
      beforeAfter: 'Înainte: Dinți gălbui din cauza cafelei | După: Albire cu 8 nuanțe',
      tags: ['Albire LED', 'Rezultat Rapid', 'Estetica'],
      icon: Sparkles,
      color: 'yellow.500'
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
              CAZURI CLINICE
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Transformări Dentare Spectaculoase
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              Descoperă rezultatele remarcabile obținute în cabinetul nostru. 
              Fiecare caz demonstrează expertiza și dedicarea echipei noastre medicale.
            </Text>
          </MotionVStack>
        </Container>
      </Box>      
      {/* Cases Grid */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {cases.map((case_item, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  borderWidth={2}
                  borderColor="transparent"
                  _hover={{
                    borderColor: case_item.color,
                    transform: 'translateY(-8px)',
                    shadow: '2xl'
                  }}
                  transition="all 0.3s"
                  h="full"
                >
                  {/* Case Header */}
                  <Box w="full" p={6} bg={useColorModeValue(`${case_item.color.split('.')[0]}.50`, `${case_item.color.split('.')[0]}.900`)}>
                    <HStack justify="space-between" align="start">
                      <VStack align="start" spacing={3}>
                        <HStack spacing={3}>
                          <Box
                            p={2}
                            bg={case_item.color}
                            borderRadius="lg"
                            color="white"
                          >
                            <Icon as={case_item.icon} boxSize={5} />
                          </Box>
                          <VStack align="start" spacing={0}>
                            <Text fontSize="sm" color={case_item.color} fontWeight="bold">
                              {case_item.category}
                            </Text>
                            <HStack spacing={2} fontSize="xs" color={textColor}>
                              <Icon as={Clock} boxSize={3} />
                              <Text>{case_item.duration}</Text>
                            </HStack>
                          </VStack>
                        </HStack>
                        <Heading size="md" color={headingColor} lineHeight="short">
                          {case_item.title}
                        </Heading>
                      </VStack>
                    </HStack>
                  </Box>                  
                  {/* Case Content */}
                  <VStack p={6} spacing={4} align="start" flex={1} w="full">
                    <Text color={textColor} fontSize="md" lineHeight="tall">
                      {case_item.description}
                    </Text>
                    
                    <Box w="full">
                      <Text fontSize="sm" fontWeight="semibold" color={headingColor} mb={2}>
                        Rezultatul:
                      </Text>
                      <Text fontSize="sm" color={textColor} fontStyle="italic">
                        {case_item.beforeAfter}
                      </Text>
                    </Box>
                    
                    {/* Tags */}
                    <Flex wrap="wrap" gap={2}>
                      {case_item.tags.map((tag, tagIdx) => (
                        <Tag
                          key={tagIdx}
                          size="sm"
                          colorScheme={case_item.color.split('.')[0]}
                          variant="subtle"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                    
                    <Button
                      size="sm"
                      colorScheme={case_item.color.split('.')[0]}
                      rightIcon={<Eye />}
                      w="full"
                      mt="auto"
                    >
                      Vezi Detalii
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
                Vrei și Tu o Transformare Spectaculoasă?
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                Programează o consultație gratuită și descoperă cum putem transforma 
                și zâmbetul tău cu cele mai moderne tehnologii dentare.
              </Text>
            </VStack>
            
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: 'gray.100' }}
              rightIcon={<ArrowRight />}
            >
              Programează Consultație Gratuită
            </Button>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}