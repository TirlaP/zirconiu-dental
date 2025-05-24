'use client'

import { Box, Container, HStack, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Navigation from './Navigation'

interface ScrollingNavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  businessInfo: any
  children?: React.ReactNode
}

export default function ScrollingNavbar({ currentPage, onNavigate, businessInfo, children }: ScrollingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Trigger after 50px of scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Call hooks unconditionally first
  const lightNavBg = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(26, 32, 44, 0.95)')
  const lightBorderColor = useColorModeValue('rgba(226, 232, 240, 0.8)', 'rgba(45, 55, 72, 0.8)')

  // For home page: invisible when at top, white when scrolled
  // For other pages: always visible with white background
  const shouldShowNavbar = currentPage !== 'home' || isScrolled
  const navBg = shouldShowNavbar ? lightNavBg : 'transparent'
  const borderColor = shouldShowNavbar ? lightBorderColor : 'transparent'

  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0}
      right={0}
      zIndex={1000}
      bg={navBg}
      backdropFilter={shouldShowNavbar ? "blur(20px)" : "none"}
      borderBottomWidth={shouldShowNavbar ? 1 : 0}
      borderColor={borderColor}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      boxShadow={shouldShowNavbar ? 'lg' : 'none'}
      opacity={shouldShowNavbar ? 1 : (currentPage === 'home' ? 0.9 : 1)}
      transform={shouldShowNavbar ? 'translateY(0)' : (currentPage === 'home' ? 'translateY(0)' : 'translateY(0)')}
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" py={4} transition="all 0.3s">
          <Navigation 
            currentPage={currentPage} 
            onNavigate={onNavigate}
            businessInfo={businessInfo}
            isScrolled={isScrolled}
          />
          {children}
        </HStack>
      </Container>
    </Box>
  )
}