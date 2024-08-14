'use client'
import {Box, Stack, TextField, Button, Typography, Image} from '@mui/material'
import {useState, useRef, useEffect} from 'react'

export default function Home()
{
    const handleSubmit = async () => {
        const checkoutSession = await fetch('/api/checkout_sessions', {
          method: 'POST',
          headers: { origin: 'http://localhost:3000' },
        })
        const checkoutSessionJson = await checkoutSession.json()
      
        const stripe = await getStripe()
        const {error} = await stripe.redirectToCheckout({
          sessionId: checkoutSessionJson.id,
        })
      
        if (error) {
          console.warn(error.message)
        }
      }
    
    return  <Box><Box sx={{my: 6}}>
    <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
    <Grid container spacing={4}>
        {/* Feature items */}
    </Grid>
    </Box>
    <Box sx={{my: 6, textAlign: 'center'}}>
    <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
    <Grid container spacing={4} justifyContent="center">
      {/* Pricing plans */}
    </Grid>
    </Box></Box>
}