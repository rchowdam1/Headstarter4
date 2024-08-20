import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage() {

  return <Container maxWidth="100vw"><AppBar position="static" sx={{ backgroundColor: '#ff5555' }}>
    <Toolbar>
      <Typography variant="h6" color={"black"} sx={{ flexGrow: 1 }}>
        Flashcards
      </Typography>
      <Button href="/login" sx={{color:"#ffffff"}}>Login</Button>
        <Button href="/" sx={{color:"#ffffff"}}>Home</Button>
    </Toolbar>
  </AppBar>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: 'center', my: 4 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <SignUp />
    </Box></Container>
}