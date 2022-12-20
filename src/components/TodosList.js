import React from 'react'

const TodosList = ({ todos, setTodos }) => {
  const handleComplete = (todo) => { setTodos(todos.map((item) => {if(item.id === todo.id){return {...item, completed: !item.completed};} return {}}))}

  const handleDelete = ({ id }) => { setTodos(todos.filter((todo) => todo.id !== id)) }
  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div className="task-button-wrapper">
            <button className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle">
              </i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit">
              </i>
            </button>
            <button className="button-delete task-button">
              <i className="fa fa-trash"
                onClick={() => handleDelete(todo)}>
              </i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodosList