import React from 'react'
import CartWidget from './CartWidget'
import {
    Flex,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
  } from '@chakra-ui/react'
  
  const NavBar = () => {
      return (
        <div>

        <Flex>

        <Box p='4' bg='red.400'>
        NavBar
        </Box>

        <Spacer />

        <Menu>
        <MenuButton as={Button}>
        Categorias
        </MenuButton>
        <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
        </Menu>

        <Spacer />
        
        <Box p='4' bg='green.400'>
        <CartWidget/>
        </Box>

        </Flex>

        </div>
  )
}

export default NavBar