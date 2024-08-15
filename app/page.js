import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { Typography } from '@mui/material'
import { UserButton } from '@clerk/nextjs'

export default function Home()
{
  return
  (
    <Container maxWidth="1g">
      <Head>
        <title>Flashcard Saas</title>
        <meta name = "description" content = "Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flashcard Saas</Typography>
          <SignedOut>
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>
  )
}