'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6F7FF',
      100: '#BAE7FF',
      200: '#8DD5FF',
      300: '#5FC3FF',
      400: '#31B1FF',
      500: '#029FFF',
      600: '#007FCC',
      700: '#005F99',
      800: '#003F66',
      900: '#001F33',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}