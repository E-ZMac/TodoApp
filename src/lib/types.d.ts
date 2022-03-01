type Todo = {
    text: string
    complete: boolean
}

type CompletionState = (selectedTodo: Todo) => void

type AddTodo = (input: string) => void

type EditTodo = (text: Todo) => Todo.text