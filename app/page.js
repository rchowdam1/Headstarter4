import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { Typography, Container, AppBar, Toolbar, Button, Box, Grid } from '@mui/material'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Head from 'next/head'

export default function Home()
{
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content = "Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flashcard Saas</Typography>
          <SignedOut>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: "center", my: 4}}>
        <Typography variant="h2">Welcome to flashcard SaaS</Typography>
        <Typography variant="h5"> {' '}The easiest way to make flashcards from your text</Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>Get Started</Button>
      </Box>

      <Box sx={{my:6}}>
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs = {12} md = {4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: "center"}}>
        <Typography variant="h4">Pricing</Typography> 
        <Grid container spacing={4}>
          <Grid item xs = {12} md = {4}>
            <Box sx={{p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2}}>
            <Typography variant="h5">Basic</Typography>
            <Typography variant="h6">Free</Typography>
            <Typography>{' '}Access to basic flashcard features and limited storage</Typography>
            <Button variant="contained" color="primary">Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Box sx={{p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2}}>
            <Typography variant="h5">Pro</Typography>
            <Typography variant="h6">$5 Per Month</Typography>
            <Typography>{' '}Access to advanced flashcard features and greater storage</Typography>
            <Button variant="contained" color="primary">Choose Pro</Button>
            </Box>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Box sx={{p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2}}>
            <Typography variant="h5">Ultra</Typography>
            <Typography variant="h6">$10 Per Month</Typography>
            <Typography>{' '}Access to additional flashcard features and unlimited storage</Typography>
            <Button variant="contained" color="primary">Choose Ultra</Button>
            </Box>

          </Grid>
        </Grid>          
      </Box>
    </Container>
  )
}