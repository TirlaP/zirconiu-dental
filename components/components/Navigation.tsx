'use client'

import { Box, Button, Flex, HStack, Show, Text, useColorModeValue, IconButton, Hide } from '@chakra-ui/react'
import { Activity, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
  businessInfo: any
}

export default function Navigation({ currentPage, onNavigate, businessInfo }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pages = ['home', 'services', 'about', 'projects', 'contact']
  const pageLabels: { [key: string]: string } = {
    home: 'Acasă',
    services: 'Servicii',
    about: 'Despre Noi',
    projects: 'Cazuri',
    contact: 'Contact'
  }
  
  // On homepage: white text when not scrolled, dark when scrolled
  // On other pages: always dark
  const shouldUseLightColors = currentPage === 'home' && !isScrolled
  
  const darkLogoTextColor = useColorModeValue('gray.800', 'white')
  const darkNavTextColor = useColorModeValue('gray.700', 'gray.300')
  const darkNavTextHoverColor = useColorModeValue('blue.600', 'blue.400')
  const darkActiveNavColor = useColorModeValue('blue.600', 'blue.400')
  
  const logoTextColor = shouldUseLightColors ? 'white' : darkLogoTextColor
  const navTextColor = shouldUseLightColors ? 'whiteAlpha.900' : darkNavTextColor
  const navTextHoverColor = shouldUseLightColors ? 'white' : darkNavTextHoverColor
  const activeNavColor = shouldUseLightColors ? 'white' : darkActiveNavColor

  return (
    <Flex w="full" justify="space-between" align="center">
      {/* Logo */}
      <HStack spacing={3} cursor="pointer" onClick={() => onNavigate('home')}>
        <Box
          p={2}
          bg={shouldUseLightColors ? "whiteAlpha.200" : "blue.500"}
          borderRadius="lg"
          color="white"
          backdropFilter={shouldUseLightColors ? "blur(10px)" : "none"}
          border={shouldUseLightColors ? "1px solid" : "none"}
          borderColor={shouldUseLightColors ? "whiteAlpha.300" : "transparent"}
          transition="all 0.3s"
        >
          <Activity size={28} />
        </Box>
        <Box>
          <Text 
            fontWeight="bold" 
            fontSize="xl" 
            lineHeight="short" 
            color={logoTextColor}
            transition="color 0.3s"
          >
            {businessInfo.name.split(' ').slice(0, 1).join(' ')}
          </Text>
          <Text 
            fontSize="xs" 
            color={shouldUseLightColors ? "whiteAlpha.800" : "gray.500"} 
            fontWeight="medium" 
            maxW="200px" 
            noOfLines={1}
            transition="color 0.3s"
          >
            {businessInfo.tagline}
          </Text>
        </Box>
      </HStack>      
      
      {/* Desktop Navigation */}
      <Show above="md">
        <HStack spacing={1}>
          {pages.map((page) => (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              fontWeight={currentPage === page ? 'bold' : 'medium'}
              color={currentPage === page ? activeNavColor : navTextColor}
              _hover={{ 
                color: navTextHoverColor, 
                bg: shouldUseLightColors ? 'whiteAlpha.200' : 'blue.50',
                backdropFilter: shouldUseLightColors ? 'blur(10px)' : 'none'
              }}
              onClick={() => onNavigate(page)}
              position="relative"
              transition="all 0.3s"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                bg: activeNavColor,
                transform: currentPage === page ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.2s',
                transformOrigin: 'center'
              }}
            >
              {pageLabels[page]}
            </Button>
          ))}
        </HStack>
        
        {/* CTA Button - Responsive */}
        <Hide below="lg">
          <Button
            colorScheme={shouldUseLightColors ? 'whiteAlpha' : 'blue'}
            variant={shouldUseLightColors ? 'outline' : 'solid'}
            size="sm"
            leftIcon={<Phone size={16} />}
            as="a"
            href={`tel:${businessInfo.phone}`}
            borderColor={shouldUseLightColors ? "whiteAlpha.400" : "transparent"}
            backdropFilter={shouldUseLightColors ? "blur(10px)" : "none"}
            _hover={{
              transform: 'translateY(-1px)',
              boxShadow: shouldUseLightColors ? '0 4px 20px rgba(255,255,255,0.2)' : 'md'
            }}
            transition="all 0.3s"
          >
            Programare: {businessInfo.phone}
          </Button>
        </Hide>
        <Show below="lg">
          <IconButton
            aria-label="Call"
            icon={<Phone size={20} />}
            colorScheme={shouldUseLightColors ? 'whiteAlpha' : 'blue'}
            variant={shouldUseLightColors ? 'outline' : 'solid'}
            size="sm"
            as="a"
            href={`tel:${businessInfo.phone}`}
            borderColor={shouldUseLightColors ? "whiteAlpha.400" : "transparent"}
            backdropFilter={shouldUseLightColors ? "blur(10px)" : "none"}
            _hover={{
              transform: 'translateY(-1px)',
              boxShadow: shouldUseLightColors ? '0 4px 20px rgba(255,255,255,0.2)' : 'md'
            }}
            transition="all 0.3s"
          />
        </Show>
      </Show>
    </Flex>
  )
}

