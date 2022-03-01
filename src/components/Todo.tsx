import React, { useState, useEffect } from 'react'
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Button,
  Paper,
  DeleteIcon,
  Typography,
} from '../lib/ui'

const todosArray: Array<Todo> = [
  { text: "Get er dun", complete: false, },
  { text: "insert meme here", complete: true }
]

const Todo: React.FC = () => {
  const [todos, setTodos] = useState(todosArray)
  console.log('State of todos:', todos)

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
    console.log('localStorage', localStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteAll = () => { setTodos(() => []) }

  const addTodo: AddTodo = input => {
      setTodos([...todos, {text: input, complete: false }])
  }

  const completionState: CompletionState = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <Box>
      <Paper>
        <Box sx={{ backgroundColor: 'lightblue' }}>
          <Typography
            variant='h4'
            display='flex'
            justifyContent='center'
            padding={3}
          > Things To Do
          </Typography>
        </Box>
      </Paper>
      <Box sx={{ paddingX: '20px' }} >
        <AddTodoForm addTodo={addTodo}/>
        <TodoList todoList={todos} completionState={completionState}/>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        padding={3}
      >
        <Button
          aria-label="delete-all-button"
          onClick={deleteAll}
          disabled={todos.length === 0}
        >
          <DeleteIcon />Delete All
        </Button>
      </Box>
    </Box>
  )
}

export { Todo }
