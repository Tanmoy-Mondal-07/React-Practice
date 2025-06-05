import { Box, Button, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import useHabitstore from '../store/store';

function Form() {
    const [name, setname] = useState("")
    const [frequency, setfrequency] = useState<"daily" | "weekly">("daily")

    const { addHabit, habits } = useHabitstore()

    console.log(habits);

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            addHabit(name, frequency),
                setname("")
        }
    }

    return (
        <form onSubmit={handelSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="habbit name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder='Enter habit name'
                    fullWidth
                />

                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        label="Frequency"
                        onChange={(e) => setfrequency(e.target.value as "daily" | "weekly")}
                    >
                        <MenuItem value={"daily"}>Daily</MenuItem>
                        <MenuItem value={"weekly"}>Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant="contained">Save</Button>
            </Box>
        </form>
    )
}

export default Form