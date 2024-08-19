'use client'
import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { Typography, Container, AppBar, Toolbar, Button, Box, Grid } from '@mui/material'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Head from 'next/head'

export default function Home() {
  const sendToCheckout = async(dollarsToPay) => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {origin: 'http://localhost:3000'},
      body: JSON.stringify(dollarsToPay)
    })
    const checkoutSessionJson = await checkoutSession.json()
    const stripe = await Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    const {error} = await stripe.redirectToCheckout({sessionId: checkoutSessionJson.id})
    if(error)
    {
      console.warn(error.message)
    }
  }
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Image src="android-chrome-192x192.png" alt="Description of Image" height={'50'} width={'50'} />
          <Typography variant="h6" style={{ flexGrow: 1 }} padding={1} >Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit" href="/login">{' '}Login</Button>
            <Button color="inherit" href="/sign-up">{' '}Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2">Welcome to flashcard SaaS</Typography>
        <Typography variant="h5"> {' '}The easiest way to make flashcards from your text</Typography>
        <SignedIn>
          <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">Start Generating</Button>
          <Button variant="contained" color="primary" sx={{ mt: 2, ml: 2 }} href="/flashcards">Check Sets</Button>
        </SignedIn>
        <SignedOut>
          <Typography variant="contained" color="primary" sx={{ mt: 2 }}>Create An Account To Get Started!</Typography>
        </SignedOut>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>{' '}Simply input your text, our software does the rest! Now it's much easier to make flashcards!</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2 }}>
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6">Free</Typography>
              <Typography>{' '}Access to basic flashcard features and limited storage</Typography>
              <Button variant="contained" color="primary" onClick={() => sendToCheckout(0)}>Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2 }}>
              <Typography variant="h5">Pro</Typography>
              <Typography variant="h6">$5 Per Month</Typography>
              <Typography>{' '}Access to advanced flashcard features and greater storage</Typography>
              <Button variant="contained" color="primary" onClick={() => sendToCheckout(5)}>Choose Pro</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: "1px solid", borderColor: "grey.300", borderRadius: 2 }}>
              <Typography variant="h5">Ultra</Typography>
              <Typography variant="h6">$10 Per Month</Typography>
              <Typography>{' '}Access to additional flashcard features and unlimited storage</Typography>
              <Button variant="contained" color="primary" onClick={() => sendToCheckout(10)} >Choose Ultra</Button>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}