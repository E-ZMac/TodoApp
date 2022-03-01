import { 
    ButtonGroup,
    Button,
    EditIcon,
    DeleteIcon,
 } from '../lib/ui'
import React, { useEffect, useState } from 'react'

interface TArrayProps {
    todoList: Todo[]
    completionState: CompletionState
}

const todosArray: Array<Todo> = [
    { text: "Get er dun", complete: false, },
    { text: "insert meme here", complete: true }
  ]

export const TodoList: React.FC<TArrayProps> = ({ todoList, completionState }) => {
    const [todos, setTodos] = useState(todosArray)
  
    useEffect(() => {
      setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
      console.log('localStorage', localStorage)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // useEffect(() => {
    //     const handleDeleteButton = (clickE: React.ChangeEvent<HTMLInputElement>) => {

    //         const deleteButton = () => clickE.target.getAttribute('text')
    //         localStorage.removeItem('text')
    //     }
    // }, [null])

    // useEffect(() => {
    //     const handleEditButton = (clickE: React.ChangeEvent<HTMLInputElement>) => {

    //         const editButton = () => clickE.target.getAttribute(localStorage.removeItem('text'))
    //     }
    // }, [null])

    // const handleEditButton = () => {
    //     if (window.localStorage !== undefined) {
    //         return localStorage.setItem('todos')
    //     }
    //     return
    // }

    const handleDeleteButton = () => {
        if (window.localStorage !== undefined) {
            return setTodos(JSON.parse(localStorage.removeItem('todos') || ''))
        }
        return
    }


    return (
        <ul>
            {todoList.map(todo => {
                return (
                    <li key={todo.text} >
                        <label className={todo.complete ? "complete" : undefined }>
                            <input type="checkbox" checked={todo.complete} onChange={() => completionState(todo)}/>
                            {todo.text}
                            <ButtonGroup sx={{ display: 'flex', justifyContent: 'right', paddingRight: '30px' }}>
                                {/* <Button id={todo.text} onClick={handleEditButton}><EditIcon/></Button> */}
                                <Button id={todo.text} onClick={handleDeleteButton}><DeleteIcon/></Button>
                            </ButtonGroup>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}
