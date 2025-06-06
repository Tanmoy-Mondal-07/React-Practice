import { useState } from 'react'
import './App.css'
import useHabitstore from './store/store'
import { Box, Container, Typography } from '@mui/material';
import Form from './components/Form';
import HabitList from './components/HabitList';

function App() {

  const store = useHabitstore()
  console.log(store);

  return (
    <Container>
      <Box>
        <Typography>
          Habit Traker
        </Typography>
        <Form/>
        <HabitList/>
      </Box>
    </Container>
  )
}

export default App
