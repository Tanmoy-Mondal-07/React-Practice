import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import useHabitstore from '../store/store'

function HabitList() {
    const { habits } = useHabitstore()
    return (
        <Box>
            {
                habits.map((habit) => (
                    <Paper key={habit.id}>
                        <Grid>
                            <Grid>
                                <Typography>{habit.name}</Typography>
                                <Typography>{habit.frequency}</Typography>
                            </Grid>
                            <Grid>
                                
                            </Grid>
                        </Grid>
                    </Paper>
                ))
            }
        </Box>
    )
}

export default HabitList