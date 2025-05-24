'use client'

import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Hide, HStack, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

// Import the pages
const HomePage = dynamic(() => import('../components/pages/HomePage'))
const ServicesPage = dynamic(() => import('../components/pages/ServicesPage'))
const AboutPage = dynamic(() => import('../components/pages/AboutPage'))
const ProjectsPage = dynamic(() => import('../components/pages/ProjectsPage'))
const ContactPage = dynamic(() => import('../components/pages/ContactPage'))
const ScrollingNavbar = dynamic(() => import('../components/components/ScrollingNavbar'))
const Footer = dynamic(() => import('../components/components/Footer'))

// ZirconiuDental business information
export const demoBusinessInfo = {
  name: "ZirconiuDental",
  tagline: "Pasiune, Eficienta, Inovatie in Medicina Dentara moderna",
  phone: "0752 438 156",
  email: "zirconiudental@gmail.com",
  address: "Vasile Goldis nr.22A",
  city: "Alba Iulia",
  state: "România",
  zipCode: "510016",
  description: "Clinică stomatologică modernă cu tehnologie laser de ultimă generație și servicii complete pentru adulți și copii",
  yearsInBusiness: 8,
  hours: {
    "Luni-Vineri": "9:00 - 19:00",
    "Sâmbătă": "9:00 - 15:00",
    "Duminică": "Închis",
    "Urgențe": "Program Special"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/EstheticAndLaserCenter/",
    facebookKids: "https://www.facebook.com/LaserDentalKids/?locale=ro_RO",
    instagram: "https://www.instagram.com/zirconiudental/",
    website: "zirconiudental.ro"
  }
}
export default function ZirconiuDentalTemplate() {
  const [currentPage, setCurrentPage] = useState('home')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  
  const handleNavigation = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
      case 'services':
        return <ServicesPage businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
      case 'about':
        return <AboutPage businessInfo={demoBusinessInfo} />
      case 'projects':
        return <ProjectsPage businessInfo={demoBusinessInfo} />
      case 'contact':
        return <ContactPage businessInfo={demoBusinessInfo} />
      default:
        return <HomePage businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
    }
  }
  
  return (
    <Box bg={bgColor} minH="100vh">
      {/* Scrolling Navigation */}
      <ScrollingNavbar 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        businessInfo={demoBusinessInfo}
      >
        {/* Mobile Menu Button */}
        <Hide above="md">
          <IconButton
            aria-label="Open menu"
            icon={<Menu />}
            onClick={onOpen}
            variant="ghost"
            color={currentPage === 'home' ? 'white' : 'gray.600'}
            _hover={{ bg: currentPage === 'home' ? 'whiteAlpha.200' : 'gray.100' }}
          />
        </Hide>
      </ScrollingNavbar>
      
      {/* Page Content - No padding, starts from top */}
      {renderPage()}
      
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{demoBusinessInfo.name}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {['home', 'services', 'about', 'projects', 'contact'].map((page) => {
                const pageLabels: { [key: string]: string } = {
                  home: 'Acasă',
                  services: 'Servicii',
                  about: 'Despre Noi',
                  projects: 'Cazuri',
                  contact: 'Contact'
                }
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'solid' : 'ghost'}
                    colorScheme={currentPage === page ? 'blue' : 'gray'}
                    onClick={() => {
                      handleNavigation(page)
                      onClose()
                    }}
                  >
                    {pageLabels[page]}
                  </Button>
                )
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      {/* Footer */}
      <Footer businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
    </Box>
  )
}