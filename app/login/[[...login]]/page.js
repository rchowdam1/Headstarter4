import React from 'react'
import Image from 'next/image'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function LoginPage() {

  return <Container maxWidth="100vw">
    <AppBar position="static" sx={{ backgroundColor: '#ff5555' }}>
      <Toolbar>
        <Image src="/android-chrome-192x192.png" alt="Description of Image" height={'50'} width={'50'} />
        <Typography variant="h6" color={"black"} sx={{ flexGrow: 1 }} padding={1}>
          FlashcardsAI
        </Typography>
        <Button href="/sign-up" sx={{color:"#ffffff"}}>Sign Up</Button>
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
        Login
      </Typography>
      <SignIn />
    </Box></Container>
}