import React, { FormEvent, useState } from 'react'
import { ToastContainer } from '../lib/ui';
import {
    Button,
    Input,
    Box,
    AddIcon
} from '../lib/ui'



interface AddTodoFormProps {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [input, setInput] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value);

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(input)
        setInput("")
    }

    return (
        <form>
            <Box
                aria-label="add-button-input"
                display='flex'
                justifyContent='center'
                padding={5}
            >
                <Input
                placeholder="Add item"
                type={"text"}
                value={input}
                onChange={handleChange}
                />
                <Button
                aria-label="add-button"
                variant="outlined"
                onClick={handleSubmit}
                disabled={input === ''}
                >
                <AddIcon />Add
                </Button>
                <ToastContainer />
            </Box>
        </form>
    )
}