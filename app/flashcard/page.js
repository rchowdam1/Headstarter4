'use client'
import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Container, Grid, Card, CardActionArea, CardContent, Box, Typography } from "@mui/material"

import { db } from '@/firebase'
import {
collection,
doc,
getDocs,
query,
setDoc,
deleteDoc,
getDoc,
addDoc,
writeBatch
} from 'firebase/firestore'

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])
  const [flipped, setFlipped] = useState({})

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return
            
      const colRef = collection(doc(collection(db, 'users'), user.id), "flashcardSets")
      const docRef = doc(colRef, search)
      const currentDoc = await getDoc(docRef)
      const currentCards = []
      // if(currentDoc.exists())
      // {
      //   console.log(currentDoc)
      // }
      // const currentCards = []
      // currentDoc.forEach((doc) => {
      //   currentCards.push({ id: doc.id, ...doc.data() })
      // })
      currentDoc.data().flashcards.forEach((card, index) => {
        currentCards.push({ id: index, front: card.front, back: card.back })
      });
      setFlashcards(currentCards)
    }
    getFlashcard()
  }, [search, user])

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box sx={{ /* Styling for flip animation */ }}>
                    <div>
                      <div>
                        <Typography variant="h5" component="div">
                          Front: {flashcard.front}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h5" component="div">
                          Back: {flashcard.back}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}