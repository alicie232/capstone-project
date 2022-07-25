export default function TaskList({todos, setTodos}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{listStyle: 'none'}}>
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => {
              setTodos(todos.map(todo_ => (todo_.id === todo.id ? {...todo_, isChecked: !todo.isChecked} : todo_)));
            }}
          />{' '}
          <span style={{textDecoration: todo.isChecked && 'line-through'}}>{todo.task}</span>
        </li>
      ))}
    </ul>
  );
}
