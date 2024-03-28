import React from 'react'

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = (t) => () => {
    deleteTodo(t)
  }

  const onClickComplete = (t) => () => {
    completeTodo(t)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <div>
          {todo.text} 
        </div>
        <div style={{ display: 'flex'}}>
        {todo.done ? <p style={{width: '85.53px', margin: '0'}}>done</p> : <button onClick={onClickComplete(todo)}> Set as done </button>}
        <button onClick={onClickDelete(todo)}> Delete </button>
        </div>
      </div>
    </>
  )
}

export default Todo
